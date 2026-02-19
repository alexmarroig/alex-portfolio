import type { ProjectStatus, SiteContent } from "@/src/data/content";

type ValidationSuccess<T> = { ok: true; data: T };
type ValidationFailure = { ok: false; errors: string[] };

export type ValidationResult<T> = ValidationSuccess<T> | ValidationFailure;

type StackCategoryInput = {
  category: unknown;
  items: { name: unknown; note: unknown }[];
};

type CertificationInput = {
  title: unknown;
  issuer: unknown;
  year: unknown;
};

type SupportingFocusInput = {
  title: unknown;
  summary: unknown;
  tags: unknown;
  status: unknown;
};

const validProjectStatuses: ProjectStatus[] = ["BUILDING", "SHIPPING", "IMPROVING"];

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function normalizeText(value: string) {
  return value.trim();
}

function normalizeStringList(values: string[]) {
  return values.map(normalizeText).filter((value) => value.length > 0);
}

function normalizeYear(year: unknown): string {
  if (typeof year === "number" && Number.isFinite(year)) {
    return String(Math.trunc(year));
  }

  if (typeof year === "string") {
    const trimmed = year.trim();
    if (trimmed.length === 0) return "";

    if (/^\d+(\.\d+)?$/.test(trimmed)) {
      return String(Math.trunc(Number(trimmed)));
    }

    return trimmed;
  }

  return "";
}

export function validateAboutParagraphs(value: unknown): ValidationResult<SiteContent["about"]["paragraphs"]> {
  if (!Array.isArray(value)) {
    return { ok: false, errors: ["about.paragraphs deve ser um array de strings."] };
  }

  const errors: string[] = [];
  const paragraphs = normalizeStringList(
    value.map((item, index) => {
      if (typeof item !== "string") {
        errors.push(`about.paragraphs[${index}] deve ser string.`);
        return "";
      }
      return item;
    })
  );

  if (paragraphs.length === 0) {
    errors.push("about.paragraphs precisa conter ao menos uma string não vazia.");
  }

  if (errors.length > 0) return { ok: false, errors };

  return { ok: true, data: paragraphs };
}

export function validateMainFocusTags(value: unknown): ValidationResult<SiteContent["currentFocus"]["main"]["tags"]> {
  if (!Array.isArray(value)) {
    return { ok: false, errors: ["currentFocus.main.tags deve ser um array de strings."] };
  }

  const errors: string[] = [];
  const tags = normalizeStringList(
    value.map((item, index) => {
      if (typeof item !== "string") {
        errors.push(`currentFocus.main.tags[${index}] deve ser string.`);
        return "";
      }
      return item;
    })
  );

  if (tags.length === 0) {
    errors.push("currentFocus.main.tags precisa de ao menos uma tag não vazia.");
  }

  if (errors.length > 0) return { ok: false, errors };

  return { ok: true, data: tags };
}

export function validateContractAreas(value: unknown): ValidationResult<SiteContent["contract"]["areas"]> {
  if (!Array.isArray(value)) {
    return { ok: false, errors: ["contract.areas deve ser um array de strings."] };
  }

  const errors: string[] = [];
  const areas = normalizeStringList(
    value.map((item, index) => {
      if (typeof item !== "string") {
        errors.push(`contract.areas[${index}] deve ser string.`);
        return "";
      }
      return item;
    })
  );

  if (areas.length === 0) {
    errors.push("contract.areas precisa conter ao menos uma área não vazia.");
  }

  if (errors.length > 0) return { ok: false, errors };

  return { ok: true, data: areas };
}

export function validateAwards(value: unknown): ValidationResult<SiteContent["awards"]> {
  if (!Array.isArray(value)) {
    return { ok: false, errors: ["awards deve ser um array de strings."] };
  }

  const errors: string[] = [];
  const awards = normalizeStringList(
    value.map((item, index) => {
      if (typeof item !== "string") {
        errors.push(`awards[${index}] deve ser string.`);
        return "";
      }
      return item;
    })
  );

  if (awards.length === 0) {
    errors.push("awards precisa conter ao menos um item não vazio.");
  }

  if (errors.length > 0) return { ok: false, errors };

  return { ok: true, data: awards };
}

export function validateStackCategories(value: unknown): ValidationResult<StackCategoryInput[]> {
  if (!Array.isArray(value)) {
    return { ok: false, errors: ["stackCategories deve ser um array."] };
  }

  const errors: string[] = [];
  const stackCategories: StackCategoryInput[] = [];

  value.forEach((entry, categoryIndex) => {
    if (!isRecord(entry)) {
      errors.push(`stackCategories[${categoryIndex}] deve ser um objeto.`);
      return;
    }

    const category = typeof entry.category === "string" ? normalizeText(entry.category) : "";
    if (!category) {
      errors.push(`stackCategories[${categoryIndex}].category é obrigatório e deve ser string não vazia.`);
    }

    if (!Array.isArray(entry.items)) {
      errors.push(`stackCategories[${categoryIndex}].items deve ser um array.`);
      return;
    }

    const items: { name: string; note: string }[] = [];

    entry.items.forEach((item, itemIndex) => {
      if (!isRecord(item)) {
        errors.push(`stackCategories[${categoryIndex}].items[${itemIndex}] deve ser objeto.`);
        return;
      }

      const name = typeof item.name === "string" ? normalizeText(item.name) : "";
      const note = typeof item.note === "string" ? normalizeText(item.note) : "";

      if (!name) {
        errors.push(`stackCategories[${categoryIndex}].items[${itemIndex}].name é obrigatório.`);
      }

      if (!note) {
        errors.push(`stackCategories[${categoryIndex}].items[${itemIndex}].note é obrigatório.`);
      }

      if (name && note) {
        items.push({ name, note });
      }
    });

    if (items.length === 0) {
      errors.push(`stackCategories[${categoryIndex}].items precisa de ao menos um item válido.`);
    }

    if (category && items.length > 0) {
      stackCategories.push({ category, items });
    }
  });

  if (stackCategories.length === 0) {
    errors.push("stackCategories precisa conter ao menos uma categoria válida.");
  }

  if (errors.length > 0) {
    return { ok: false, errors };
  }

  return { ok: true, data: stackCategories };
}

export function validateCertifications(value: unknown): ValidationResult<CertificationInput[]> {
  if (!Array.isArray(value)) {
    return { ok: false, errors: ["certifications deve ser um array."] };
  }

  const errors: string[] = [];
  const certifications: { title: string; issuer: string; year: string }[] = [];

  value.forEach((entry, index) => {
    if (!isRecord(entry)) {
      errors.push(`certifications[${index}] deve ser objeto.`);
      return;
    }

    const title = typeof entry.title === "string" ? normalizeText(entry.title) : "";
    const issuer = typeof entry.issuer === "string" ? normalizeText(entry.issuer) : "";
    const year = normalizeYear(entry.year);

    if (!title) errors.push(`certifications[${index}].title é obrigatório.`);
    if (!issuer) errors.push(`certifications[${index}].issuer é obrigatório.`);
    if (!year) errors.push(`certifications[${index}].year é obrigatório e deve ser string/número válido.`);

    if (title && issuer && year) {
      certifications.push({ title, issuer, year });
    }
  });

  if (certifications.length === 0) {
    errors.push("certifications precisa conter ao menos uma certificação válida.");
  }

  if (errors.length > 0) return { ok: false, errors };

  return { ok: true, data: certifications };
}

export function validateSupportingFocus(value: unknown): ValidationResult<SiteContent["currentFocus"]["supporting"]> {
  if (!Array.isArray(value)) {
    return { ok: false, errors: ["currentFocus.supporting deve ser um array."] };
  }

  const errors: string[] = [];
  const supporting: SiteContent["currentFocus"]["supporting"] = [];

  value.forEach((entry, index) => {
    if (!isRecord(entry)) {
      errors.push(`currentFocus.supporting[${index}] deve ser objeto.`);
      return;
    }

    const typedEntry = entry as SupportingFocusInput;
    const title = typeof typedEntry.title === "string" ? normalizeText(typedEntry.title) : "";
    const summary = typeof typedEntry.summary === "string" ? normalizeText(typedEntry.summary) : "";

    if (!title) errors.push(`currentFocus.supporting[${index}].title é obrigatório.`);
    if (!summary) errors.push(`currentFocus.supporting[${index}].summary é obrigatório.`);

    if (!Array.isArray(typedEntry.tags)) {
      errors.push(`currentFocus.supporting[${index}].tags deve ser um array de strings.`);
    }

    const tags = Array.isArray(typedEntry.tags)
      ? normalizeStringList(
          typedEntry.tags.map((tag, tagIndex) => {
            if (typeof tag !== "string") {
              errors.push(`currentFocus.supporting[${index}].tags[${tagIndex}] deve ser string.`);
              return "";
            }
            return tag;
          })
        )
      : [];

    if (tags.length === 0) {
      errors.push(`currentFocus.supporting[${index}].tags precisa ter ao menos uma tag não vazia.`);
    }

    const status = typedEntry.status;
    if (typeof status !== "string" || !validProjectStatuses.includes(status as ProjectStatus)) {
      errors.push(`currentFocus.supporting[${index}].status deve ser BUILDING, SHIPPING ou IMPROVING.`);
    }

    if (title && summary && tags.length > 0 && typeof status === "string" && validProjectStatuses.includes(status as ProjectStatus)) {
      supporting.push({ title, summary, tags, status: status as ProjectStatus });
    }
  });

  if (supporting.length === 0) {
    errors.push("currentFocus.supporting precisa conter ao menos um card válido.");
  }

  if (errors.length > 0) return { ok: false, errors };

  return { ok: true, data: supporting };
}

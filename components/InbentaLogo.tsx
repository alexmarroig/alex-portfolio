type Props = {
  variant?: "mark" | "full";
  className?: string;
  wordmarkColor?: string;
};

/**
 * Inbenta brand logo — recreated as an SVG.
 *
 * The real Inbenta mark is two angular triangular peaks side-by-side
 * in deep indigo/blue, with a small orange accent dot on the apex of
 * the right peak. The wordmark "inbenta" is lowercase indigo text.
 */
export default function InbentaLogo({ variant = "full", className, wordmarkColor = "#1e1be8" }: Props) {
  // Inbenta mark — a single continuous angular stroke that traces
  // an "M-like" shape: two adjacent triangular peaks sharing a central
  // valley, drawn as one rounded-join outline. Orange dot sits in the
  // negative space near the right peak.
  const Mark = (
    <g>
      <path
        d="M 5 52 L 21 8 L 32 30 L 43 8 L 59 52"
        stroke="#1e1be8"
        strokeWidth="6.5"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      />
      {/* Orange accent dot positioned in the negative space near right peak */}
      <circle cx="49" cy="14" r="3.6" fill="#ff8a3d" />
    </g>
  );

  if (variant === "mark") {
    return (
      <svg
        viewBox="0 0 64 58"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        role="img"
        aria-label="Inbenta logo mark"
      >
        {Mark}
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 280 58"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Inbenta"
    >
      {Mark}

      {/* Wordmark "inbenta" — lowercase, sans-serif */}
      <text
        x="74"
        y="42"
        fontFamily="'Inter', 'Segoe UI', system-ui, sans-serif"
        fontSize="34"
        fontWeight="500"
        letterSpacing="-0.015em"
        fill={wordmarkColor}
      >
        inbenta
      </text>
    </svg>
  );
}

type Props = {
  variant?: "mark" | "full";
  className?: string;
  wordmarkColor?: string;
};

/**
 * Inbenta brand logo — recreated as SVG.
 *
 * The real Inbenta mark is a single continuous angular outline that
 * resembles a stylized "M" or two adjacent peaks. The right peak
 * apex carries a small orange accent dot.
 *
 * Re-traced to match the official brand sample: outlined stroke,
 * rounded line joins, indigo color, with the orange dot positioned
 * at the very tip of the right peak.
 */
export default function InbentaLogo({
  variant = "full",
  className,
  wordmarkColor = "#1e1be8",
}: Props) {
  const Mark = (
    <g>
      {/* Single continuous angular outline forming the M shape */}
      <path
        d="M 6 50 L 22 8 L 32 32 L 42 8 L 58 50"
        stroke="#1e1be8"
        strokeWidth="5"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      />
      {/* Orange accent dot AT the apex of the right peak */}
      <circle cx="42" cy="8" r="3.5" fill="#ff8a3d" />
    </g>
  );

  if (variant === "mark") {
    return (
      <svg
        viewBox="0 0 64 56"
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
      viewBox="0 0 280 56"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Inbenta"
    >
      {Mark}

      {/* Wordmark "inbenta" — lowercase, geometric sans-serif */}
      <text
        x="74"
        y="40"
        fontFamily="'Inter', 'Segoe UI', system-ui, sans-serif"
        fontSize="32"
        fontWeight="500"
        letterSpacing="-0.02em"
        fill={wordmarkColor}
      >
        inbenta
      </text>
    </svg>
  );
}

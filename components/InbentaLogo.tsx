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
  // Two angular peaks (left + right) — the iconic Inbenta mark
  // Drawn as outlined triangles with thick strokes for that crisp look
  const Mark = (
    <g>
      {/* Left peak — outlined triangle */}
      <path
        d="M 4 50 L 19 8 L 34 50"
        stroke="#1e1be8"
        strokeWidth="6"
        strokeLinejoin="miter"
        strokeLinecap="butt"
        fill="none"
      />
      {/* Right peak — outlined triangle */}
      <path
        d="M 30 50 L 45 8 L 60 50"
        stroke="#1e1be8"
        strokeWidth="6"
        strokeLinejoin="miter"
        strokeLinecap="butt"
        fill="none"
      />
      {/* Orange accent dot at apex of right peak */}
      <circle cx="45" cy="8" r="4.2" fill="#ff8a3d" />
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

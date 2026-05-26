type Props = {
  variant?: "mark" | "full";
  className?: string;
  wordmarkColor?: string;
};

/**
 * Inbenta brand logo — recreated as an SVG so it scales perfectly.
 * The brand is a stylized "M-like" mark in deep indigo/blue with an
 * orange dot accent, followed by the lowercase "inbenta" wordmark.
 */
export default function InbentaLogo({ variant = "full", className, wordmarkColor = "#1e1be8" }: Props) {
  if (variant === "mark") {
    return (
      <svg
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        role="img"
        aria-label="Inbenta logo mark"
      >
        <defs>
          <linearGradient id="inbentaMarkGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1e1be8" />
            <stop offset="100%" stopColor="#5b32d6" />
          </linearGradient>
        </defs>
        {/* M-shaped mark: two angular peaks */}
        <path
          d="M 6 50 L 18 14 L 32 38 L 46 14 L 58 50 L 50 50 L 44 32 L 32 50 L 20 32 L 14 50 Z"
          fill="url(#inbentaMarkGrad)"
        />
        {/* Orange accent dot */}
        <circle cx="46" cy="14" r="4" fill="#ff8a3d" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 280 64"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Inbenta"
    >
      <defs>
        <linearGradient id="inbentaFullGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1e1be8" />
          <stop offset="100%" stopColor="#5b32d6" />
        </linearGradient>
      </defs>
      {/* M-shaped mark */}
      <path
        d="M 6 50 L 18 14 L 32 38 L 46 14 L 58 50 L 50 50 L 44 32 L 32 50 L 20 32 L 14 50 Z"
        fill="url(#inbentaFullGrad)"
      />
      <circle cx="46" cy="14" r="4" fill="#ff8a3d" />

      {/* Wordmark "inbenta" */}
      <text
        x="76"
        y="44"
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

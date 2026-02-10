export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <main
      style={{
        maxWidth: 960,
        margin: "0 auto",
        padding: "32px 20px",
        lineHeight: 1.55
      }}
    >
      {children}
    </main>
  );
}

"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
      setError("Email ou senha inválidos.");
      setLoading(false);
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  return (
    <section className="section simplePage glassPanel adminLoginPage">
      <h1>Admin Login</h1>
      <p>Acesso privado para editar o site.</p>

      <form onSubmit={handleSubmit} className="adminLoginForm">
        <label className="adminLabel" htmlFor="email">Email</label>
        <input id="email" className="adminInput" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />

        <label className="adminLabel" htmlFor="password">Senha</label>
        <input id="password" className="adminInput" type="password" value={password} onChange={(event) => setPassword(event.target.value)} required />

        {error ? <p className="adminError">{error}</p> : null}

        <button className="btn btnPrimary" type="submit" disabled={loading}>
          {loading ? "Entrando..." : "Entrar"}
        </button>
      </form>
    </section>
  );
}

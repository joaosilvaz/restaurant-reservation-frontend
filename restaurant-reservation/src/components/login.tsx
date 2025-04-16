"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const isFormValid = email.trim() !== "" && email.includes("@") && password.trim() !== "";

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:8080/users");
      const users = await response.json();

      const user = users.find((u: any) => u.emailCliente === email && u.senha === password);


      if (user) {
        router.push("/");
      } else {
        setError("Email ou senha incorretos.");
      }
    } catch (err) {
      console.error(err);
      setError("Erro ao conectar com o servidor.");
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen w-full bg-cover bg-center bg-black/60"
      style={{
        backgroundImage: "url('/images/bg-cadastro.jpg')",
        backgroundBlendMode: "darken",
      }}
    >
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-[500px] w-full">
        <h2 className="text-2xl font-bold text-center mb-4 text-black pb-3">
          BEM VINDO DE VOLTA!
        </h2>
        <p className="text-left text-sm text-gray-600 mb-6">
          Novo aqui?{" "}
          <Link href="/cadastro" className="text-blue-500 underline">
            Crie sua conta!
          </Link>
        </p>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Digite seu Email"
            maxLength={50}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-950 rounded-3xl mb-4 text-gray-500"
          />
          <input
            type="password"
            placeholder="Digite sua Senha"
            maxLength={30}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-950 rounded-3xl mb-4 text-gray-500"
          />
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full py-2 rounded-3xl transition border ${
              isFormValid
                ? "bg-black text-white hover:bg-white hover:text-black hover:border-black cursor-pointer"
                : "bg-black text-white cursor-not-allowed"
            }`}
          >
            ENTRAR
          </button>
        </form>

        <div className="text-center my-4 text-gray-500">OU</div>

        <button
          onClick={() => window.location.href = "https://accounts.google.com/signin"}
          className="w-full flex items-center justify-center border border-orange-500 text-orange-500 py-2 rounded-3xl mb-2 hover:bg-orange-500 hover:text-white transition cursor-pointer"
        >
          <img src="images/google.svg" alt="Google" className="w-5 h-5 mr-2" />
          Continue com Google
        </button>
      </div>
    </div>
  );
}

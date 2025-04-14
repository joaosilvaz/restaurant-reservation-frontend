"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const isFormValid =
    email.trim() !== "" &&
    email.includes("@") &&
    password.trim() !== "";

  const handleGoogleLogin = () => {
    window.location.href = "https://accounts.google.com/signin";
  };

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:8080/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        // Aqui você pode redirecionar para a página principal
        router.push("/");
      } else {
        alert("Email ou senha incorretos.");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Erro ao conectar com a API.");
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
          <a href="/cadastro" className="text-blue-500 underline">
            Crie sua conta aqui!
          </a>
        </p>
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
        <div className="flex justify-between items-center mb-4">
          <label className="flex items-center text-sm text-gray-600">
            <input type="checkbox" className="mr-2 cursor-pointer" /> Lembre-me
          </label>
          <a href="#" className="text-blue-500 text-sm underline">
            Esqueceu sua senha?
          </a>
        </div>

        <button
          onClick={handleLogin}
          disabled={!isFormValid}
          className={`w-full py-2 rounded-3xl transition border ${isFormValid
            ? "bg-black text-white hover:bg-white hover:text-black hover:border-black cursor-pointer"
            : "bg-black text-white cursor-not-allowed"
            }`}
        >
          ENTRAR
        </button>

        <div className="text-center my-4 text-gray-500">OR</div>

        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center border border-orange-500 text-orange-500 py-2 rounded-3xl mb-2 hover:bg-orange-500 hover:text-white transition cursor-pointer"
        >
          <img src="images/google.svg" alt="Google" className="w-5 h-5 mr-2" />{" "}
          Continue com Google
        </button>
      </div>
    </div>
  );
}

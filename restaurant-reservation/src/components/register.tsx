"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const isFormValid =
    name.trim() !== "" &&
    email.trim() !== "" &&
    password.trim() !== "" &&
    confirmPassword.trim() !== "" &&
    password === confirmPassword;

  const handleGoogleRegister = () => {
    window.location.href = "https://accounts.google.com/signin";
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center bg-black/60"
      style={{
        backgroundImage: "url('/images/bg-cadastro.jpg')",
        backgroundBlendMode: "darken",
      }}
    >
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[500px]">
        <h2 className="pb-3 text-2xl font-bold text-center mb-4 text-black">
          CRIE SUA CONTA!
        </h2>
        <p className="text-left text-sm text-gray-600 mb-6">
          Já possui uma conta?{" "}
          <Link href="/login" className="text-blue-500 underline">
            Entre aqui!
          </Link>
        </p>

        <form>
          <input
            type="text"
            placeholder="Digite seu Nome"
            maxLength={40}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border mb-4 border-gray-950 rounded-3xl text-gray-500"
          />
          <input
            type="email"
            placeholder="Digite seu Email"
            maxLength={50}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border mb-4 border-gray-950 rounded-3xl text-gray-500"
          />
          <input
            type="password"
            placeholder="Digite sua senha"
            maxLength={30}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border mb-4 border-gray-950 rounded-3xl text-gray-500"
          />
          <input
            type="password"
            placeholder="Confirme sua senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-2 border mb-4 border-gray-950 rounded-3xl text-gray-500"
          />

          <div className="flex justify-between items-center mb-4">
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="mr-2 cursor-pointer" />{" "}
              Lembre-me
            </label>
            <a href="#" className="text-blue-500 text-sm underline">
              Esqueceu sua senha?
            </a>
          </div>

          <Link
            href={isFormValid ? "/" : "#"}
            onClick={(e) => !isFormValid && e.preventDefault()}
          >
            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-full py-2 rounded-3xl transition border ${
                isFormValid
                  ? "bg-black text-white hover:bg-white hover:text-black hover:border-black cursor-pointer"
                  : "bg-black text-white cursor-not-allowed"
              }`}
            >
              CRIAR
            </button>
          </Link>
        </form>

        <div className="text-center my-4 text-gray-500">OU</div>

        <button
          onClick={handleGoogleRegister}
          className="w-full flex items-center justify-center border border-orange-500 text-orange-500 py-2 rounded-3xl mb-2 hover:bg-orange-500 hover:text-white transition cursor-pointer"
        >
          <img src="/images/google.svg" alt="Google" className="w-5 h-5 mr-2" />
          Continue com Google
        </button>
      </div>
    </div>
  );
}

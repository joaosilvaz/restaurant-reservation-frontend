"use client";
import Link from "next/link";

export default function LoginPage() {
    const handleGoogleLogin = () => {
        window.location.href = "https://accounts.google.com/signin";
    };

    const handleFacebookLogin = () => {
        window.location.href = "https://www.facebook.com/login.php";
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/image3.png')" }}>
            <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
                <h2 className="text-2xl font-bold text-center mb-4">WELCOME BACK!</h2>
                <p className="text-center text-sm text-gray-600 mb-6">
                    New here? <Link href="/cadastro" className="text-blue-500">Sign up here!</Link>
                </p>
                <input
                    type="email"
                    placeholder="Digite seu Email"
                    className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="password"
                    placeholder="Digite sua Senha"
                    className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="flex justify-between items-center mb-4">
                    <label className="flex items-center text-sm text-gray-600">
                        <input type="checkbox" className="mr-2" /> Remember me
                    </label>
                    <a href="#" className="text-blue-500 text-sm">Forgot password?</a>
                </div>
                <a href="/home">
                    <button className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition">
                        LOGIN
                    </button>
                </a>
                <div className="text-center my-4 text-gray-500">OR</div>

                <button
                    onClick={handleGoogleLogin}
                    className="w-full flex items-center justify-center border border-orange-500 text-orange-500 py-2 rounded-lg mb-2 hover:bg-orange-100 transition"
                >
                    <img src="/google-icon.svg" alt="Google" className="w-5 h-5 mr-2" /> Continue with Google
                </button>

                <button
                    onClick={handleFacebookLogin}
                    className="w-full flex items-center justify-center border border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-100 transition"
                >
                    <img src="/facebook-icon.svg" alt="Facebook" className="w-5 h-5 mr-2" /> Continue with Facebook
                </button>
            </div>
        </div>
    );
}
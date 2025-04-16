import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();

  const handleLogout = () => {
    const confirmLogout = window.confirm("Tem certeza que deseja sair?");
    if (!confirmLogout) return;

    // Limpa o token do localStorage (ou qualquer dado de autenticação)
    localStorage.removeItem("token");

    // Redireciona para a página de login
    router.push("/login");
  };

  return (
    <footer className="bg-[#080808]  text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4 tracking-wide">Fale conosco</h3>
          <p className="flex items-center gap-2 mb-2">
            📞 <span>(11) 55439-3325</span>
          </p>
          <p className="flex items-center gap-2">
            📧 <span>contato@yamatosushi.com</span>
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="/images/logo-yamato.jpeg"
            alt="Yamato Sushi"
            className="w-24 h-24 object-contain rounded-full"
          />
        </div>
        <div className="flex justify-center md:justify-end gap-4">
          <a href="https://www.instagram.com/joaovitoor._/" target="blank" className="hover:scale-110 transition transform duration-300">
            <img src="/images/insta.png" alt="Instagram" className="w-8 h-8" />
          </a>
          <a href="#" className="hover:scale-110 transition transform duration-300">
            <img src="/images/facebook.png" alt="Facebook" className="w-8 h-8" />
          </a>
          <a href="#" className="hover:scale-110 transition transform duration-300">
            <img src="/images/whatsapp.png" alt="WhatsApp" className="w-8 h-8" />
          </a>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-zinc-400">
        © 2025 Yamato Sushi. Todos os direitos reservados.
      </div>

      <div
        className="bg-[#ffffff] p-2 rounded-full fixed bottom-7 right-7 cursor-pointer border border-black"
        onClick={handleLogout}
      >
        <img
          src="/images/logout.png"
          alt="Logout"
          width={20}
          height={20}
          className="transition-all"
        />
      </div>
    </footer>
  );
}

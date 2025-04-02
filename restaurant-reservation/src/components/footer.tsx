import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-10">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="font-bold text-2xl">CONTATOS</h2>
          <p className="text-sm mt-2">📞 (11) 55439-3325</p>
          <p className="text-sm">📧 contato@yamatosushi.com</p>
        </div>
        <div className="flex justify-center items-center pr-[70px] pb-6">
          <img src="/images/logo-yamato.jpeg" alt="Logo" className="w-26 h-auto rounded-4xl" />
        </div>
        <div className="flex gap-4">
          <Link href="#" className="hover:opacity-80 transition">
            <img src="/images/insta.png" alt="Instagram" className="w-6 h-6" />
          </Link>
          <Link href="#" className="hover:opacity-80 transition">
            <img src="/images/facebook.png" alt="Facebook" className="w-6 h-6" />
          </Link>
          <Link href="#" className="hover:opacity-80 transition">
            <img src="/images/whatsapp.png" alt="WhatsApp" className="w-6 h-6" />
          </Link>
        </div>
      </div>

      <p className="text-sm text-center mt-6">
        &copy; 2025 Yamato Sushi. Todos os direitos reservados.
      </p>
    </footer>
  );
};



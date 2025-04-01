const Footer = () => {
  return (
    <footer className="bg-[#294056] text-white py-10 px-10">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="font-bold text-2xl">CONTATOS</h2>
          <p className="text-sm mt-2">📞 (11) 55439-3325</p>
          <p className="text-sm">📧 contato@yamatosushi.com</p>
        </div>
        <div className="flex justify-center items-center pr-[70px]">
          <img src="/images/logo-yamato.jpeg" alt="Logo" className="w-18 h-auto rounded-4xl" />
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:opacity-80 transition">
            <img src="/images/insta.png" alt="Instagram" className="w-6 h-6" />
          </a>
          <a href="#" className="hover:opacity-80 transition">
            <img src="/images/facebook.png" alt="Facebook" className="w-6 h-6" />
          </a>
          <a href="#" className="hover:opacity-80 transition">
            <img src="/images/whatsapp.png" alt="WhatsApp" className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Texto centralizado */}
      <p className="text-sm text-center mt-6">
        &copy; 2025 Yamato Gourmet. Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;

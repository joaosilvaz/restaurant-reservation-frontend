const Footer = () => {
    return (
      <footer className="bg-[#294056] text-white py-6 px-4 text-center">
        <p className="text-sm">&copy; 2025 Yamato Gourmet. Todos os direitos reservados.</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="#" className="hover:opacity-80 transition">
            <img src="/images/insta.png" alt="Instagram" className="w-6 h-6" />
          </a>
          <a href="#" className="hover:opacity-80 transition">
            <img src="/images/facebook.png" alt="Facebook" className="w-6 h-6" />
          </a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
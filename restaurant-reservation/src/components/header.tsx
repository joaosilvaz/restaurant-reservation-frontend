'use client';
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [activeLink, setActiveLink] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (href: string) => {
    setActiveLink(href);
    setMenuOpen(false); // Fecha o menu após clique
  };

  const navItems = [
    { href: "#home", label: "Sobre Nós" },
    { href: "#reservas", label: "Reserva" },
    { href: "#localizacao", label: "Localização" },
    { href: "#horarios", label: "Horários" },
  ];

  return (
    <header className="top-0 left-0 w-full z-50 bg-black backdrop-blur-md py-6 px-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex flex-col pl-2">
        <h1 className="text-white text-xl font-bold md:text-3xl lg:text-5xl">YAMATO</h1>
        <h2 className="text-white text-sm text-center font-bold md:text-xl">Sushi</h2>
      </div>

      {/* Desktop nav */}
      <nav className="hidden md:flex justify-between items-center gap-16 py-6 px-10 rounded-full bg-[#202020]">
        <ul className="flex space-x-6 text-white font-semibold cursor-pointer text-[16px] gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => handleClick(item.href)}
                className={`relative pb-1 transition-all duration-200 
          ${activeLink === item.href ? 'text-white' : 'text-white'}
          before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[2px] 
          before:w-0 before:bg-orange-500 before:transition-all before:duration-300 
          hover:before:w-full`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Login button */}
      <div className="hidden md:flex justify-center items-center px-6">
        <a href="/login">
          <button className="w-32 h-12 bg-orange-500 text-white hover:bg-white hover:text-black text-sm font-semibold uppercase px-10 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer">
            Login
          </button>
        </a>
      </div>

      {/* Menu hamburger (mobile) */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="text-white w-6 h-6" /> : <Menu className="text-white w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#202020] flex flex-col items-center gap-6 py-6 z-40 shadow-md md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => handleClick(item.href)}
              className={`text-white font-semibold text-lg ${activeLink === item.href ? 'border-b-2 border-orange-500' : ''
                }`}
            >
              {item.label}
            </Link>
          ))}
          <a href="/login">
            <button className="mt-4 w-32 h-12 bg-orange-500 text-white hover:bg-white hover:text-black text-sm font-semibold uppercase px-10 rounded-xl shadow-md hover:shadow-lg transition-all duration-200">
              Login
            </button>
          </a>
        </div>
      )}
    </header>
  );
}

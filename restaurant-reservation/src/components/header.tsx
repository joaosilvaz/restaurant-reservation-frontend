'use client';
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [activeLink, setActiveLink] = useState("#home");

  const handleClick = (href: string) => {
    setActiveLink(href);
  };

  const navItems = [
    { href: "#home", label: "Sobre Nós" },
    { href: "#reservas", label: "Reserva" },
    { href: "#localizacao", label: "Localização" },
    { href: "#horarios", label: "Horários" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black backdrop-blur-md py-6 px-4 flex justify-between">
      <div className="flex flex-col pl-7">
        <h1 className="text-white text-5xl font-bold">YAMATO</h1>
        <h2 className="text-white text-xl text-center font-bold">Sushi</h2>
      </div>

      <nav className="flex justify-between items-center gap-16 py-1 px-8 rounded-full bg-[#080808]">
        <ul className="flex space-x-6 text-white font-semibold cursor-pointer text-[16px] gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => handleClick(item.href)}
                className={`pb-1 transition-all duration-200 ${
                  activeLink === item.href ? 'border-b-2 border-orange-500' : 'border-b-2 border-transparent'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex justify-center items-center px-10">
        <a href="/login">
          <button className="w-32 h-12 bg-orange-500 text-white hover:bg-white hover:text-black text-sm font-semibold uppercase px-10 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer">
            Login
          </button>
        </a>
      </div>
    </header>
  );
}

"use client"
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative h-[900px] bg-[url('/images/comida-japonesa.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-between">
                <nav className="container pt-3 pl-12">
                    <ul className="flex space-x-6 text-white font-semibold cursor-pointer text-[16px]">
                        <li><Link href="#home">Home</Link></li>
                        <li><Link href="#reservas">Reserva</Link></li>
                        <li><Link href="#localizacao">Localização</Link></li>
                        <li><Link href="#horarios">Horários</Link></li>
                    </ul>
                </nav>
                <div className="flex flex-grow items-center justify-center flex-col text-center">
                    <h1 className="text-white text-5xl mb-8 font-bold leading-snug">O melhor rodízio <br /> de São Paulo</h1>
                    <Link href="#reservas" scroll={false}>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                const reservasSection = document.querySelector("#reservas");
                                if (reservasSection) {
                                    reservasSection.scrollIntoView({ behavior: "smooth" });
                                }
                            }}
                            className="bg-black text-white text-[18px] px-6 py-3 font-semibold rounded-lg cursor-pointer hover:bg-white hover:text-black transition-all duration-200"
                        >
                            Faça sua reserva
                        </button>
                    </Link>

                </div>
            </div>
        </section>
    );
};

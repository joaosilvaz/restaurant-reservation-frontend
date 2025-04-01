import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative h-[600px] bg-[url('/images/restaurant.png')] bg-contain bg-center">
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-between">
                <nav className="container p-5 pl-12">
                    <ul className="flex space-x-6 text-white font-semibold cursor-pointer text-[16px]">
                        <li><Link href="#home">Home</Link></li>
                        <li><Link href="#reservas">Reserva</Link></li>
                        <li><Link href="#localizacao">Localização</Link></li>
                        <li><Link href="#horarios">Horários</Link></li>
                    </ul>
                </nav>
                <div className="flex flex-grow items-center justify-center">
                    <Link href="#reservas">
                        <button className="bg-[#294056]/60 text-white text-[18px] px-6 py-3 font-semibold rounded-lg cursor-pointer hover:bg-[#294056]/80 transition">
                            Faça sua reserva
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

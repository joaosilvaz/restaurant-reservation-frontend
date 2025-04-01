import Link from "next/link";

const Hero = () => {
    return (
        <section className="relative h-[400px] bg-[url('/images/restaurant.png')] bg-cover bg-center">
            <nav className="container flex justify-start p-3 ml-10">
                <ul className="flex space-x-6 text-white font-semibold">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="#reservas">Reserva</Link></li>
                    <li><Link href="#localizacao">Localização</Link></li>
                    <li><Link href="#horarios">Horários</Link></li>
                </ul>
            </nav>
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">

                <button className="bg-[#294056]/60 text-white px-6 py-3 font-semibold rounded-lg cursor-pointer">
                    Faça sua reserva
                </button>
            </div>
        </section>
    );
};

export default Hero;

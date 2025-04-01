import Link from "next/link";

const Hero = () => {
    return (
        <section className="relative h-[600px] bg-[url('/images/restaurant.png')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-between">
                <nav className="container p-5 pl-12">
                    <ul className="flex space-x-6 text-white font-semibold cursor-pointer text-[16px]">
                        <li><Link href="#home" className="">Home</Link></li>
                        <li><Link href="#reservas" className="">Reserva</Link></li>
                        <li><Link href="#localizacao" className="">Localização</Link></li>
                        <li><Link href="#horarios" className="">Horários</Link></li>
                    </ul>
                </nav>
                <div className="flex items-center justify-center mb-10">
                    <button className="bg-[#294056]/60 text-white px-6 py-3 font-semibold rounded-lg cursor-pointer hover:bg-[#294056]/80 transition">
                        Faça sua reserva
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;

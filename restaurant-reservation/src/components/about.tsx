export default function About() {
    return (
        <section id="home" className="bg-black text-white py-16 px-6">
            <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="md:w-1/2 flex flex-col items-center md:items-start">
                    <div className="text-center">
                        <h1 className="text-[100px] font-extrabold">YAMATO</h1>
                        <h2 className="text-4xl font-semibold">SUSHI</h2>
                    </div>
                    <img
                        src="/images/img-food.png"
                        alt="Pratos de sushi"
                        className="rounded-lg w-full max-w-md shadow-lg mt-16"
                    />
                </div>
                <div className="md:w-1/2 text-[22px]">
                    <p className="leading-relaxed">
                        Bem-vindo ao Yamato, onde tradição e sabor se encontram para proporcionar uma experiência autêntica da culinária japonesa. Nosso nome, Yamato (大和), carrega a essência do Japão antigo, simbolizando harmonia, cultura e excelência gastronômica.
                    </p>
                    <p className="mt-4 leading-relaxed">
                        Com ingredientes frescos e selecionados, preparamos cada prato com respeito à tradição e um toque de inovação. Do sushi artesanal ao ramen fumegante, cada detalhe é pensado para oferecer um sabor inesquecível.
                    </p>
                    <p className="mt-4 leading-relaxed">
                        Nosso ambiente foi projetado para transportar você ao Japão, combinando elegância e conforto. Seja para um jantar especial, um almoço rápido ou uma experiência gastronômica completa, estamos aqui para surpreender seu paladar.
                    </p>
                </div>
            </div>
        </section>
    );
};



export default function OpeningHours() {
  return (
    <section id="horarios" className="flex justify-center items-center py-12">
      <div className="bg-[#294056] text-white p-8 rounded-lg w-[800px] h-[260px] text-center shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Nosso Horário de Funcionamento:</h2>
        <p className="text-lg font-semibold mb-2">
          Venha Conhecer o Melhor Restaurante de São Paulo
        </p>
        <p className="mt-2 text-lg">Segunda a Sexta: 11h – 23h</p>
        <p>Sábado e Domingo: 12h – 00h</p>
        <p className="mt-2 text-lg">
          Feriados – Consulte nossas redes sociais para horários especiais!
        </p>
      </div>
    </section>
  );
};


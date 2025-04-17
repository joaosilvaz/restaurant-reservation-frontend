export default function OpeningHours() {
  return (
    <section
      id="horarios"
      className="flex justify-center items-center py-12 bg-[url('/images/bg-cadastro.jpg')] bg-no-repeat bg-cover bg-center"
    >
      <div className="bg-black text-white p-10 rounded-lg w-[800px] h-[280px] text-center shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Horário de Funcionamento:</h2>

        <p className="mt-2 text-sm flex items-center justify-center gap-2">
          <img src="images/relogio.png" alt="Relógio" className="w-4 h-4" />
          Segunda à Sexta - Almoço - 12hs às 15hs | Jantar - 19hs às 23hs
        </p>
        <p className="mt-2 text-sm flex items-center justify-center gap-2">
          <img src="images/relogio.png" alt="Relógio" className="w-4 h-4" />
          Sábado - 12hs às 00hs
        </p>
        <p className="mt-2 text-sm flex items-center justify-center gap-2">
          <img src="images/relogio.png" alt="Relógio" className="w-4 h-4" />
          Domingo - 12hs às 23hs
        </p>
        <p className="mt-10 text-lg text-center">
          Feriados – Consulte nossas redes sociais para horários especiais!
        </p>
      </div>
    </section>
  );
}

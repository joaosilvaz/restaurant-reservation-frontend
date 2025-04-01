const Reservation = () => {
  return (
    <section id="reservas" className="bg-[#294056] text-white py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center">RESERVAS</h2>
        <p className="text-center mt-6 text-white text-[20px]">
          Aqui você pode criar, alterar, visualizar e excluir suas reservas de forma rápida e fácil
        </p>

        <div className="mt-10 flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold">Como Funciona?</h3>
            <ul className="mt-2 text-white space-y-2 text-xl">
              <li><strong>Passo 1:</strong> Escolha uma data e horário disponíveis.</li>
              <li><strong>Passo 2:</strong> Informe a quantidade de pessoas.</li>
              <li><strong>Passo 3:</strong> Confirme sua reserva e receba a confirmação.</li>
              <li><strong>Passo 4:</strong> Caso precise, altere ou cancele facilmente.</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 items-end">
            <button className="w-64 bg-[#A8BBCD] text-white font-bold py-3 rounded-lg hover:bg-gray-400 transition cursor-pointer">
              CRIAR RESERVA
            </button>
            <button className="w-64 bg-[#A8BBCD] text-white font-bold py-3 rounded-lg hover:bg-gray-400 transition cursor-pointer">
              ALTERAR RESERVA
            </button>
            <button className="w-64 bg-[#A8BBCD] text-white font-bold py-3 rounded-lg hover:bg-gray-400 transition cursor-pointer">
              VER RESERVA
            </button>
            <button className="w-64 bg-[#A8BBCD] text-white font-bold py-3 rounded-lg hover:bg-gray-400 transition cursor-pointer">
              EXCLUIR RESERVA
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;

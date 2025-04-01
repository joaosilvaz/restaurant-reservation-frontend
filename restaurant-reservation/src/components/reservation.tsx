export default function Reservation() {
  return (
    <section className="bg-[#1E3A5F] text-white py-16 px-6 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Column - Como Funciona */}
        <div className="md:w-1/2">
          <div className="text-center md:text-left">
            <h1 className="text-5xl font-extrabold mb-6 uppercase">RESERVAS</h1>
            <p className="text-xl mb-8">
              Aqui você pode criar, alterar, visualizar e excluir suas reservas
              de forma rápida e fácil
            </p>

            <h2 className="text-3xl font-semibold mb-6 uppercase">
              Como Funciona?
            </h2>

            <div className="space-y-4 text-lg">
              <p>
                <span className="font-bold">Passo 1:</span> Escolha uma data e
                horário disponíveis.
              </p>
              <p>
                <span className="font-bold">Passo 2:</span> Informe a quantidade
                de pessoas.
              </p>
              <p>
                <span className="font-bold">Passo 3:</span> Confirme sua reserva
                e receba a confirmação.
              </p>
              <p>
                <span className="font-bold">Passo 4:</span> Caso precise, altere
                ou cancele facilmente.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Reservation Actions */}
        <div className="md:w-1/2 flex flex-col items-center">
          <div className="w-full max-w-md">
            <button className="text-3xl font-semibold mb-8 text-center uppercase">
              CRIAR RESERVA
            </button>

            <button className="text-2xl uppercase font-bold tracking-wider cursor-pointer hover:text-gray-300 transition-colors">
              ALTERAR RESERVA
            </button>
            <button className="text-2xl uppercase font-bold tracking-wider cursor-pointer hover:text-gray-300 transition-colors">
              VERRESERVA
            </button>
            <button className="text-2xl uppercase font-bold tracking-wider cursor-pointer hover:text-gray-300 transition-colors">
              EXCLUIR RESERVA
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

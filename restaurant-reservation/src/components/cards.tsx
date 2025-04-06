export default function Card() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="flex flex-wrap gap-10 justify-center">
        <div className="bg-orange-500 hover:bg-black transition-all duration-200 text-white p-10 rounded-2xl text-center w-70">
          <div className="flex justify-center">
            <img className="w-20 filter invert" src="/images/cliente.png" alt="Atendimento" />
          </div>
          <h2 className="text-xl font-bold mt-4">Atendimento Premium</h2>
          <p className="mt-2">Cuidamos de cada detalhe para que você se sinta especial do início ao fim.</p>
        </div>

        <div className="bg-orange-500 hover:bg-black transition-all duration-200 text-white p-10 rounded-2xl text-center w-70">
          <div className="flex justify-center">
            <img className="w-20 filter invert" src="/images/prato.png" alt="Prato" />
          </div>
          <h2 className="text-xl font-bold mt-4">Drinks</h2>
          <p className="mt-2">Drinks autorais com um toque japonês, perfeitos para cada momento.</p>
        </div>

        <div className="bg-orange-500 hover:bg-black transition-all duration-200 text-white p-10 rounded-2xl text-center w-70">
          <div className="flex justify-center">
            <img className="w-20 filter invert" src="/images/coquetel.png" alt="Drinks" />
          </div>
          <h2 className="text-xl font-bold mt-4">Pratos</h2>
          <p className="mt-2">Receitas autênticas com ingredientes frescos e apresentação impecável.</p>
        </div>
      </div>
    </div>
  );
}

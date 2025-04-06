export default function Card() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="flex flex-wrap gap-10 justify-center">
        <div className="bg-orange-500 hover:bg-black transition-all duration-200 text-white p-12 rounded-2xl text-center w-80 flex flex-col items-center">
          <img className="w-20 filter invert mb-4" src="/images/cliente.png" alt="Atendimento" />
          <h2 className="text-xl font-bold">Atendimento Premium</h2>
          <p className="mt-2">Cuidamos de cada detalhe para que você se sinta especial do início ao fim.</p>
        </div>

        <div className="bg-orange-500 hover:bg-black transition-all duration-200 text-white p-12 rounded-2xl text-center w-80 flex flex-col items-center">
          <img className="w-20 filter invert mb-4" src="/images/prato.png" alt="Drinks" />
          <h2 className="text-xl font-bold">Drinks</h2>
          <p className="mt-2">Drinks autorais com um toque japonês, perfeitos para cada momento.</p>
        </div>

        <div className="bg-orange-500 hover:bg-black transition-all duration-200 text-white p-12 rounded-2xl text-center w-80 flex flex-col items-center">
          <img className="w-20 filter invert mb-4" src="/images/coquetel.png" alt="Pratos" />
          <h2 className="text-xl font-bold">Pratos</h2>
          <p className="mt-2">Receitas autênticas com ingredientes frescos e apresentação impecável.</p>
        </div>
      </div>
    </div>
  );
}

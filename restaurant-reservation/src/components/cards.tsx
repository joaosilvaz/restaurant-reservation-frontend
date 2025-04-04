export default function Card() {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <div className="flex flex-wrap gap-10 justify-center">
          <div className="bg-orange-500 hover:bg-black transition-all duration-200 text-white p-10 rounded-2xl text-center w-64">
            <div className="text-5xl">🤝</div>
            <h2 className="text-xl font-bold mt-4">Atendimento</h2>
            <p className="mt-2">Hospitalidade de excelência em uma atmosfera acolhedora.</p>
          </div>
  
          <div className="bg-orange-500 hover:bg-black transition-all duration-200 text-white p-10 rounded-2xl text-center w-64">
            <div className="text-5xl">🥤</div>
            <h2 className="text-xl font-bold mt-4">Drinks</h2>
            <p className="mt-2">Sabores exclusivos, uma experiência em cada gole.</p>
          </div>
  
          <div className="bg-orange-500 hover:bg-black transition-all duration-200 text-white p-10 rounded-2xl text-center w-64">
            <div className="text-5xl">🍽️</div>
            <h2 className="text-xl font-bold mt-4">Pratos</h2>
            <p className="mt-2">Hospitalidade de excelência em uma atmosfera acolhedora.</p>
          </div>
        </div>
  
        <p className="mt-10 text-lg">Faça seu pedido em nosso delivery</p>
        <div className="flex gap-4 mt-4">
          <button className="flex items-center gap-2 px-4 py-2 border border-black hover:bg-black transition-all duration-200 hover:text-white rounded-full cursor-pointer text-black">
             Yamato Aclimação
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-black hover:bg-black transition-all duration-200 hover:text-white rounded-full cursor-pointer text-black">
            Yamato Paulista
          </button>
        </div>
      </div>
    );
  }
  
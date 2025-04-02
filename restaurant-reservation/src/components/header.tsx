export default function Header() {
  return (
    <header className="flex w-full justify-between bg-black py-6 px-4">
      <div className="flex flex-col pl-7">
        <h1 className="text-white text-5xl font-bold">YAMATO</h1>
        <h2 className="text-white text-xl text-center font-bold">Sushi</h2>
      </div>
      <div className="flex justify-center items-center px-10">
        <button className="w-32 h-12 bg-orange-500 text-white hover:bg-white hover:text-black text-sm font-semibold uppercase px-10 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer">
          Login
        </button>
      </div>
    </header>
  );
};

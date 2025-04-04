export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black backdrop-blur-md py-6 px-4 flex justify-between">
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

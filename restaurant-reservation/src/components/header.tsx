import Link from "next/link";

const Header = () => {
  return (
    <header className="flex w-full bg-[#294056] py-6 px-4">
      <div className="flex flex-col pl-7">
        <h1 className="text-white text-5xl font-bold">YAMATO</h1> 
        <h2 className="text-white text-xl text-center font-bold"> Sushi</h2>
      </div>
    </header>
  );
};

export default Header;

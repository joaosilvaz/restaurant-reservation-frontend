import Hero from "@/components/hero";
import Header from "../components/header";
import Image from "next/image";
import About from "@/components/about";
import Reservation from "@/components/reservation";

export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <About />
    <Reservation/>

    </>
  );
}

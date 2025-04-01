import Hero from "@/components/hero";
import Header from "../components/header";
import Image from "next/image";
import About from "@/components/about";
import Location from "@/components/location";
import Footer from "@/components/footer";
import OpeningHours from "@/components/openinghours";
import Reservation from "@/components/reservation";

export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <About />
    <Reservation />
    <Location/>
    <OpeningHours />
    <Footer />
    </>
  );
}

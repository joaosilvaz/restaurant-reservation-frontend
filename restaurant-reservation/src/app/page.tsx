import Hero from "@/components/hero";
import Header from "../components/header";
import Image from "next/image";
import About from "@/components/about";
import Location from "@/components/location";
import Footer from "@/components/footer";
import OpeningHours from "@/components/openinghours";

export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <About />
    <Location/>
    <OpeningHours />
    <Footer />
    </>
  );
}

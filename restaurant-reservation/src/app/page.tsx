
import Hero from "@/components/banner";
import Header from "../components/header";
import About from "@/components/about";
import Location from "@/components/location";
import Footer from "@/components/footer";
import OpeningHours from "@/components/openinghours";
import Reservation from "@/components/reservation";
import Carousel from "@/components/carousel";
import Card from "@/components/cards";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Card />
      <Carousel />
      <Location />
      <Reservation active={"create"} />
      <OpeningHours />
      <Footer />
    </>
  );
}

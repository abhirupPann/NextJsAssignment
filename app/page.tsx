import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Page2 from "@/components/Page2";
import Page3 from "@/components/Page3";
import Page4 from "@/components/Page4";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Page2/>
      <Page3/>
      <Page4/>
      <Footer/>
    </main>
  );
}

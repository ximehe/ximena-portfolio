import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Benefits } from "./components/Benefits";
import { Services } from "./components/Services";
import { FeaturedProject } from "./components/FeaturedProject";
import { About } from "./components/About";
import { Process } from "./components/Process";
import { Pricing } from "./components/Pricing";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import BackgroundDecor from "./components/BackgroundDecor/BackgroundDecor";

function App() {
  return (
    <>
    <BackgroundDecor />

      <Header />
      <main>
        <Hero />
        <Benefits />
        <Services />
        <FeaturedProject />
        <About />
        <Process />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;

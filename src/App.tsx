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

function App() {
  return (
    <>
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

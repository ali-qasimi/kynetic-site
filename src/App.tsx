import { About } from "./components/About";
// import { Cta } from "./components/Cta";
// import { FAQ } from "./components/FAQ";
import { Jobs } from "./components/Jobs";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Pricing } from "./components/Pricing";
import { Navbar } from "./components/Navbar";
// import { Newsletter } from "./components/Newsletter";
// import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";
// import { Services } from "./components/Services";
// import { Team } from "./components/Team";
import { ContactUs } from "./components/ContactUs";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />

      <Jobs />
      <Pricing />
      {/*<Services />*/}
      <ContactUs />
      {/* <Team />*/}
      {/* <FAQ />*/}
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;

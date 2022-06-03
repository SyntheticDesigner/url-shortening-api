import CTA from "./components/CTA";
import Footer from "./components/footer/Footer";
import HeroSection from "./components/hero/HeroSection";
import Main from "./components/main/Main";
import NavBar from "./components/nav/NavBar";

function App() {
  return (
    <div className='App'>
      <NavBar />
      <HeroSection />
      <Main />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;

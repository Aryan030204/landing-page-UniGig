import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import HiringForm from "./components/HiringForm";
import Waitlist from "./components/Waitlist";

function App() {
  return (
    <>
      <div className="flex flex-col">
        <HeroSection />
        <Waitlist />
        <HiringForm />
        <Footer />
      </div>
    </>
  );
}

export default App;

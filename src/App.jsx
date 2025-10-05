import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import HiringForm from "./components/HiringForm";
import HypeSection from "./components/HypeSection";
import Waitlist from "./components/Waitlist";

function App() {
  return (
    <>
      <div className="flex flex-col">
        <HeroSection />
        <Waitlist />
        <HypeSection />
        <HiringForm />
        <Footer />
      </div>
    </>
  );
}

export default App;

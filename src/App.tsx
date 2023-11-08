
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Portfolio from "./components/Portfolio";
import { Container } from "@mui/material";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";
import ProgressSection from "./components/ProgressSection";

function App() {
  return (
    <Container>
      <Navbar />
      <HeroSection />
      <ProgressSection />
      <Portfolio />
      <Contact />
      <Footer />
      <Copyright />
    </Container>
  );
}

export default App;

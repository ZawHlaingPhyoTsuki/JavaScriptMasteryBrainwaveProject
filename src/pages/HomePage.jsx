// import ButtonGradient from "./assets/svg/ButtonGradient";
// import Benefits from "./components/Benefits";
// import Skills from "./components/Skills";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import Projects from "./components/Projects";
// import Roadmap from "./components/Roadmap";
// import Services from "./components/Services";

// const App = () => {
//   return (
//     <>
//       <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
//         <Header />
//         <Hero />
//         <Benefits />
//         <Skills />
//         <Services />
//         <Projects />
//         <Roadmap />
//         <Footer />
//       </div>

//       <ButtonGradient />
//     </>
//   );
// };

// export default App;

import ButtonGradient from "../assets/svg/ButtonGradient";
import Benefits from "../components/Benefits";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Roadmap from "../components/Roadmap";
import Services from "../components/Innovations";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Benefits />
      <Skills />
      <Services />
      <Projects />
      <Roadmap />
    </>
  );
};

export default HomePage;

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/main";

const App = () => {
  // Inicializando animações
  useEffect(() => {
    AOS.init({
      duration: 800, // Tempo das animações
      easing: "ease-in-out",
      once: false, // Se true, anima apenas uma vez por elemento
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#9e6d4e] to-[#c28a5c]">
      {/* Cabeçalho */}
      <Header data-aos="fade-down" />

      {/* Texto animado com Typewriter */}
      <div className="text-white text-lg font-bold flex justify-center items-center mt-6">
        <Typewriter
          options={{
            loop: true,
            autoStart: true, // Evita o uso do `onInit`
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("Bem-vindos à Chocoaçu!")
              .pauseFor(1500)
              .deleteAll()
              .typeString("Feitos com carinho 💝")
              .pauseFor(3000)
              .deleteAll()
              .start();
          }}
        />
      </div>

      {/* Conteúdo principal */}
      <Main data-aos="fade-up" className="grow px-4 sm:px-6 md:px-8" />

      {/* Rodapé */}
      <Footer data-aos="zoom-in" className="flex-shrink-0" />
    </div>
  );
};

export default App;
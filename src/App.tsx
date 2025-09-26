import AOS from "aos";
import "aos/dist/aos.css";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import LoadingScreen from "./components/LoadingScreen"; // NOVO: Importa o componente de loading
import Main from "./components/main";

const App = () => {
  // NOVO: Estado para controlar a visibilidade do loading screen
  const [isLoading, setIsLoading] = useState(true);

  // Inicializando animações e o timer do loading
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
    });

    // NOVO: Timer para esconder o loading screen após 2 segundos
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 750);

    // NOVO: Limpa o timer para evitar problemas
    return () => clearTimeout(timer);
  }, []); // O array vazio [] garante que isso só rode uma vez

  return (
    <AnimatePresence>
      {isLoading ? (
        // Se estiver carregando, mostra o LoadingScreen
        <motion.div
          key="loader"
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
        >
          <LoadingScreen />
        </motion.div>
      ) : (
        // Quando terminar de carregar, mostra o conteúdo principal do site
        <motion.div
          key="main-app"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.8 } }}
          className="flex min-h-screen flex-col bg-gradient-to-b from-[#9e6d4e] to-[#c28a5c]"
        >
          <Header />
          <div className="h-[120px] md:h-[100px]" /> {/* Spacer ajustado, sem o Typewriter aqui */}
          <Main data-aos="fade-up" className="grow px-4 sm:px-6 md:px-8" />
          <Footer data-aos="zoom-in" className="flex-shrink-0" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default App;
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/main";
import LoadingScreen from "./components/LoadingScreen";
import BackToTopButton from "./components/BackToTopButton"; // NOVO: Importa o botão

const normalizeId = (str: string) =>
  str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleScroll = useCallback((item: string) => {
    const id = normalizeId(item);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: false });
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div key="loader" exit={{ opacity: 0, transition: { duration: 0.8 } }}>
          <LoadingScreen />
        </motion.div>
      ) : (
        <motion.div
          key="main-app"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.8 } }}
          className="flex min-h-screen flex-col bg-gradient-to-b from-[#9e6d4e] to-[#c28a5c]"
        >
          <Header handleScroll={handleScroll} />
          <div className="h-[68px] md:h-[100px]" />
          <Main />
          <Footer handleScroll={handleScroll} className="flex-shrink-0" />
          <BackToTopButton />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default App;
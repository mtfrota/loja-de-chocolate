import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const BackToTopButton = () => {
  // Estado para controlar se o botão está visível ou não
  const [isVisible, setIsVisible] = useState(false);

  // Função para rolar a página suavemente para o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Função para verificar a posição do scroll
    const toggleVisibility = () => {
      // Se o usuário rolou mais de 300px para baixo, mostra o botão
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Adiciona um "escutador" que chama a função acima toda vez que o usuário rola a página
    window.addEventListener("scroll", toggleVisibility);

    // Limpa o "escutador" quando o componente não está mais na tela, para evitar problemas de performance
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 text-[#5a3b27] shadow-lg transition-transform duration-200 hover:scale-110"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          aria-label="Voltar ao topo"
        >
          <FontAwesomeIcon icon={faArrowUp} size="lg" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTopButton;
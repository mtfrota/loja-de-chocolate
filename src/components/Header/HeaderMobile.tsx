import { useState } from "react";
import logo from "../../assets/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons"; // NOVO: Importa o ícone de spinner
import { motion } from "framer-motion";

// O componente SocialLinks não é mais necessário aqui, a lógica ficará toda junta.

const HeaderMobile = () => {
  // MUDANÇA: Um único estado para saber qual botão foi clicado ('order', 'insta', ou 'whats')
  const [clickedButton, setClickedButton] = useState<string | null>(null);

  // MUDANÇA: Uma única função para todos os cliques, que recebe o nome do botão
  const handleClick = (buttonName: string) => {
    setClickedButton(buttonName);
  };

  return (
    <motion.header
      className="fixed top-0 left-0 w-full bg-[#3d2b1f]/90 backdrop-blur-md shadow-md z-50 md:hidden"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex flex-col items-center py-4">
        <img
          src={logo}
          alt="Logo Chocoaçu"
          className="w-28 object-contain mb-2 drop-shadow-lg"
        />

        <motion.a
          href="https://link-para-encomenda.com" // Futuramente, o link da sua página de encomenda
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleClick("order")} // MUDANÇA
          className="px-6 py-2 rounded-full bg-[#5e0b15] text-white font-semibold shadow-md hover:bg-[#3d2b1f] transition-colors duration-200"
          aria-label="Experimente agora"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* MUDANÇA: Lógica condicional para o texto */}
          {clickedButton === "order" ? "Abrindo..." : "Encomende já 📦"}
        </motion.a>

        {/* MUDANÇA: Links sociais movidos para cá com a nova lógica */}
        <div className="flex justify-center gap-6 pt-4 text-white">
          <a
            href="https://www.instagram.com/chocoacu_chocolatecia/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            onClick={() => handleClick("insta")}
          >
            {/* MUDANÇA: Lógica condicional para o ícone */}
            {clickedButton === "insta" ? (
              <FontAwesomeIcon icon={faSpinner} size="lg" spin />
            ) : (
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            )}
          </a>
          <a
            href="https://wa.me/5585997981063"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            onClick={() => handleClick("whats")}
          >
            {/* MUDANÇA: Lógica condicional para o ícone */}
            {clickedButton === "whats" ? (
              <FontAwesomeIcon icon={faSpinner} size="lg" spin />
            ) : (
              <FontAwesomeIcon icon={faWhatsapp} size="lg" />
            )}
          </a>
        </div>
      </div>
    </motion.header>
  );
};

export default HeaderMobile;
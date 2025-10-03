import { useState } from "react";
import logo from "../../assets/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faSpinner, faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const HeaderMobile = () => {
  const [clickedButton, setClickedButton] = useState<string | null>(null);

  const handleClick = (buttonName: string) => {
    setClickedButton(buttonName);
    setTimeout(() => {
      setClickedButton(null);
    }, 1200);
  };

  return (
    <motion.header
      className="fixed top-0 left-0 w-full bg-[#3d2b1f]/90 backdrop-blur-md shadow-md z-50 md:hidden border-b border-white/10"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex items-center justify-between px-4 py-2"> {/* Diminuí um pouco o padding vertical */}
        {/* Logo na Esquerda */}
        <a href="#" aria-label="Página inicial" className="w-24">
          <img
            src={logo}
            alt="Logo Chocoaçu"
            className="object-contain drop-shadow-lg"
          />
        </a>

        {/* Ações na Direita */}
        <div className="flex items-center gap-4"> {/* Ajustei o espaçamento */}
          
          {/* NOVO: Botão "Encomendar" estilizado */}
          <motion.a
            href="https://link-para-encomenda.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleClick("order")}
            className="flex items-center gap-2 rounded-full bg-yellow-400 px-4 py-2 text-sm font-bold text-[#5a3b27] shadow-lg"
            // Animação pulsante reutilizada do Hero
            animate={{
              boxShadow: ["0px 0px 8px rgba(253, 224, 71, 0.5)", "0px 0px 16px rgba(253, 224, 71, 1)", "0px 0px 8px rgba(253, 224, 71, 0.5)"]
            }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {clickedButton === 'order' ? (
              <FontAwesomeIcon icon={faSpinner} spin />
            ) : (
              <>
                <span>Encomendar</span>
                <FontAwesomeIcon icon={faBoxOpen} />
              </>
            )}
          </motion.a>

          {/* Ícones sociais com cores */}
          <a
            href="https://www.instagram.com/chocoacu_chocolatecia/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            onClick={() => handleClick("insta")}
            // NOVO: Cor do Instagram com efeito de hover
            className="text-[#E1306C] transition-transform duration-200 hover:scale-110"
          >
            {clickedButton === "insta" ? (
              <FontAwesomeIcon icon={faSpinner} size="xl" spin className="text-white" />
            ) : (
              <FontAwesomeIcon icon={faInstagram} size="xl" />
            )}
          </a>
          <a
            href="https://wa.me/5585997981063"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            onClick={() => handleClick("whats")}
            // NOVO: Cor do WhatsApp com efeito de hover
            className="text-[#25D366] transition-transform duration-200 hover:scale-110"
          >
            {clickedButton === "whats" ? (
              <FontAwesomeIcon icon={faSpinner} size="xl" spin className="text-white" />
            ) : (
              <FontAwesomeIcon icon={faWhatsapp} size="xl" />
            )}
          </a>
        </div>
      </div>
    </motion.header>
  );
};

export default HeaderMobile;
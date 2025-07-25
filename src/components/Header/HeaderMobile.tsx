import { motion } from "framer-motion";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faTruck, faUser } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

const menuItems = [
  { name: "Quem somos?", icon: faUser },
  { name: "Produtos", icon: faBox },
  { name: "Encomende já", icon: faTruck },
];

const normalizeId = (str: string) =>
  str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-");

const SocialLinks = () => (
  <div className="flex gap-4 justify-center pt-2">
    <a
      href="https://www.instagram.com/chocoacu_chocolatecia/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#E1306C] hover:text-[#E1306C] transition-colors duration-300"
      aria-label="Instagram"
    >
      <FontAwesomeIcon icon={faInstagram} size="lg" />
    </a>
    <a
      href="https://wa.me/5585997981063"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#25D366] hover:text-[#25D366] transition-colors duration-300"
      aria-label="WhatsApp"
    >
      <FontAwesomeIcon icon={faWhatsapp} size="lg" />
    </a>
  </div>
);

const HeaderMobile = ({ handleScroll }: { handleScroll: (id: string) => void }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const buttonClasses = "flex items-center gap-2 px-4 py-2 rounded font-medium bg-[#5e0b15] text-white hover:bg-[#3d2b1f] transition duration-200";

  const renderMenuItems = () =>
    menuItems.map(({ name, icon }) => (
      <motion.button
        key={name}
        onClick={() => {
          handleScroll(name); // Corrigido: cada botão chama sua seção
          setMenuOpen(false);
        }}
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        className={buttonClasses}
        role="link"
        aria-label={`Ir para ${name}`}
      >
        <FontAwesomeIcon icon={icon} /> {name}
      </motion.button>
    ));

  return (
    <div className="relative md:hidden">
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="p-2 w-10 h-10 flex items-center justify-center text-white rounded-md bg-[#5e0b15] hover:bg-[#3d2b1f] transition focus:outline-none focus:ring-2"
        aria-label="Abrir menu"
        aria-expanded={menuOpen}
        aria-haspopup="true"
        >
  <FontAwesomeIcon icon={faBars} size="lg" />
</button>


      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="flex flex-col bg-[#3d2b1f]/90 backdrop-blur-md shadow-md px-4 pb-4 space-y-3 mt-2"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {renderMenuItems()}
            <SocialLinks />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeaderMobile;
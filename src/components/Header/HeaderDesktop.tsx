import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faTruck, faUser } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

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
  <div className="flex items-center gap-5">
    <a
      href="https://www.instagram.com/chocoacu_chocolatecia/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#E1306C] transition-transform duration-200 hover:scale-110"
      aria-label="Instagram"
    >
      <FontAwesomeIcon icon={faInstagram} size="lg" />
    </a>
    <a
      href="https://wa.me/5585997981063"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#25D366] transition-transform duration-200 hover:scale-110"
      aria-label="WhatsApp"
    >
      <FontAwesomeIcon icon={faWhatsapp} size="lg" />
    </a>
  </div>
);

const HeaderDesktop = ({
  activeSection,
  handleScroll,
  userHasScrolled, // <-- NOVO: Recebe a informação de scroll
}: {
  activeSection: string;
  handleScroll: (id: string) => void;
  userHasScrolled: boolean; // <-- NOVO: Tipagem da nova prop
}) => {
  const buttonClasses = (name: string) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 active:scale-95 ${
      activeSection === normalizeId(name)
        ? "bg-white text-[#3d2b1f] shadow-md"
        : "bg-transparent text-white hover:bg-white/10"
    }`;

  const renderMenuItems = () =>
    menuItems.map(({ name, icon }) => (
      <motion.button
        key={name}
        // CORREÇÃO: Usa o nome do item para gerar o ID de scroll dinamicamente
        onClick={() => handleScroll(normalizeId(name))}
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        className={buttonClasses(name)}
        role="link"
      >
        <FontAwesomeIcon icon={icon} /> {name}
      </motion.button>
    ));

  return (
    // MELHORIA: Adiciona uma transição e uma classe condicional para o efeito de fundo
    <nav
      className={`hidden md:flex items-center gap-6 transition-all duration-300 ${
        userHasScrolled ? "pt-1" : "" // Efeito sutil para ajustar a posição quando a borda aparece
      }`}
      role="navigation"
    >
      <div className="flex items-center gap-4">{renderMenuItems()}</div>
      <div className="h-6 w-px bg-white/20" /> {/* Linha vertical separadora */}
      <SocialLinks />
    </nav>
  );
};

export default HeaderDesktop;
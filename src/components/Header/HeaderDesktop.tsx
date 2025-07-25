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

const HeaderDesktop = ({
  activeSection,
  handleScroll,
}: {
  activeSection: string;
  handleScroll: (id: string) => void;
}) => {
  const buttonClasses = (name: string) =>
    `flex items-center gap-2 px-4 py-2 rounded font-medium transition duration-200 focus:outline-none focus:ring-2 active:scale-95 ${
      activeSection === normalizeId(name)
        ? "bg-white text-[#3d2b1f]"
        : "bg-[#5e0b15] text-white hover:bg-[#3d2b1f]"
    }`;

  const renderMenuItems = () =>
    menuItems.map(({ name, icon }) => (
      <motion.button
        key={name}
        onClick={() => handleScroll("quem-somos")}
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        className={buttonClasses(name)}
        role="link"
      >
        <FontAwesomeIcon icon={icon} /> {name}
      </motion.button>
    ));

  return (
    <nav className="hidden md:flex items-center gap-4" role="navigation">
      {renderMenuItems()}
      <SocialLinks />
    </nav>
  );
};

export default HeaderDesktop;
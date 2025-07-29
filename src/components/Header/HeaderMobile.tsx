import logo from "../../assets/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const SocialLinks = () => (
  <div className="flex gap-4 justify-center pt-2">
    <a
      href="https://www.instagram.com/chocoacu_chocolatecia/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white"
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

const HeaderMobile = () => {
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
          href="https://link-para-encomenda.com"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 rounded-full bg-[#5e0b15] text-white font-semibold shadow-md hover:bg-[#3d2b1f] transition-colors duration-200"
          aria-label="Experimente agora"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Encomende já 📦
        </motion.a>

        <SocialLinks />
      </div>
    </motion.header>
  );
};

export default HeaderMobile;
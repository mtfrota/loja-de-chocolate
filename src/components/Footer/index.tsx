import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

// Lista de links úteis para a navegação
const footerLinks = ["Início", "Produtos", "Quem Somos"];

const Footer = ({ className, handleScroll }) => {
  return (
    <footer className={`bg-[#41160d] m-4 rounded-lg shadow-sm ${className}`}>
      <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col md:flex-row gap-6 items-center justify-between">
        
        {/* Lado Esquerdo: Links de Navegação */}
        <ul className="flex items-center gap-4 sm:gap-6 text-sm font-medium text-white">
          {footerLinks.map((item) => (
            <li key={item}>
              <button
                onClick={() => handleScroll(item)}
                className="hover:underline hover:text-gray-300 transition-colors duration-300"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        {/* Centro: Direitos Autorais */}
        <span className="text-white text-sm text-center order-last md:order-none">
          © {new Date().getFullYear()} Chocoaçu™. Todos os direitos reservados.
        </span>

        {/* Lado Direito: Ícones Sociais */}
        <div className="flex items-center gap-5">
          <a href="https://www.instagram.com/chocoacu_chocolatecia/" target="_blank" rel="noopener noreferrer" className="text-white transition-transform duration-200 hover:scale-110 hover:text-[#E1306C]" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a href="https://wa.me/5585997981063" target="_blank" rel="noopener noreferrer" className="text-white transition-transform duration-200 hover:scale-110 hover:text-[#25D366]" aria-label="WhatsApp">
            <FontAwesomeIcon icon={faWhatsapp} size="lg" />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faBox, faHouse, faInfo, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import logo from "../../assets/Logo.png";

const menuItems = [
  { name: "Início", icon: faHouse },
  { name: "Quem somos?", icon: faInfo },
  { name: "Produtos", icon: faBox },
  { name: "Encomende já", icon: faTruck },
];

const normalizeId = (str: string) =>
  str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-");

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [userHasScrolled, setUserHasScrolled] = useState(false);

  const handleScroll = useCallback((item: string) => {
    const id = normalizeId(item);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  // Ativa ScrollSpy somente após o usuário rolar
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) {
        setUserHasScrolled(true);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!userHasScrolled) return;

    const sectionIds = menuItems.map(({ name }) => normalizeId(name));
    const observer = new IntersectionObserver(
      (entries) => {
        for (let entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [userHasScrolled]);

  const buttonClasses = (name: string) =>
    `flex items-center gap-2 px-4 py-2 rounded font-medium transition duration-200 focus:outline-none focus:ring-2 active:scale-95 ${
      activeSection === normalizeId(name)
        ? "bg-white text-[#3d2b1f]"
        : "bg-[#5e0b15] text-white hover:bg-[#3d2b1f]"
    }`;

  return (
    <motion.header
      className="fixed top-0 left-0 w-full bg-[#3d2b1f]/90 backdrop-blur-md shadow-md z-50"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3">
        <motion.img
          src={logo}
          alt="Logo Chocoaçu"
          className="w-32 object-contain cursor-pointer"
          whileHover={{ scale: 1.1 }}
        />

        {/* Menu desktop */}
        <nav className="hidden md:flex items-center gap-4">
          {menuItems.map(({ name, icon }) => (
            <motion.button
              key={name}
              onClick={() => handleScroll(name)}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              className={buttonClasses(name)}
            >
              <FontAwesomeIcon icon={icon} /> {name}
            </motion.button>
          ))}
<a
  href="https://www.instagram.com/chocoacu_chocolatecia/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-[#E1306C] hover:text-[#E1306C] transition-colors duration-300"
>
  <FontAwesomeIcon icon={faInstagram} size="lg" />
</a>

<a
  href="https://wa.me/5585997981063"
  target="_blank"
  rel="noopener noreferrer"
  className="text-[#25D366] hover:text-[#25D366] transition-colors duration-300"
>
  <FontAwesomeIcon icon={faWhatsapp} size="lg" />
</a>

        </nav>

        {/* Botão mobile */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-2xl text-white">
          ☰
        </button>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden flex flex-col bg-[#3d2b1f]/90 backdrop-blur-md shadow-md px-4 pb-4 space-y-3"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {menuItems.map(({ name, icon }) => (
              <button
                key={name}
                className={buttonClasses(name)}
                onClick={() => {
                  handleScroll(name);
                  setMenuOpen(false);
                }}
              >
                <FontAwesomeIcon icon={icon} /> {name}
              </button>
            ))}

            <div className="flex gap-4 justify-center pt-2">
              <a href="https://www.instagram.com/chocoacu_chocolatecia/" target="_blank" className="text-[#E1306C] hover:text-[#E1306C] transition-colors duration-300">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a href="#" className="hover:text-green-400">
                <FontAwesomeIcon icon={faWhatsapp} size="lg" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
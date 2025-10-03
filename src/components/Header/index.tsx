import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";
import logo from "../../assets/Logo.png";

// NOVO: Define o tipo das props que o Header vai receber
type HeaderProps = {
  handleScroll: (sectionId: string) => void;
};

// MUDANÇA: Aplica o tipo às props
const Header = ({ handleScroll }: HeaderProps) => {
  const [activeSection, setActiveSection] = useState("");
  const [userHasScrolled, setUserHasScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) setUserHasScrolled(true);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!userHasScrolled) return;
    const sectionIds = ["quem-somos", "produtos"];
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

  return (
    <motion.header
      className="fixed top-0 left-0 w-full bg-[#3d2b1f]/90 backdrop-blur-md shadow-md z-50"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3">
        <a href="#" onClick={() => handleScroll("inicio")}>
          <motion.img src={logo} alt="Logo Chocoaçu" className="w-32 object-contain cursor-pointer hidden md:block" whileHover={{ scale: 1.1 }} />
        </a>
        <HeaderDesktop
          activeSection={activeSection}
          handleScroll={handleScroll}
          userHasScrolled={userHasScrolled}
        />
        <HeaderMobile handleScroll={handleScroll} />
      </div>
    </motion.header>
  );
};

export default Header;
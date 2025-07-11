const Footer = ({ className }: { className?: string }) => {
  return (
    <footer className={`bg-[#41160d] rounded-lg shadow-sm m-4 ${className}`}>
      <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Direitos autorais */}
        <span className="text-white text-sm text-center md:text-left">
          © {new Date().getFullYear()}{" "}
          <a
            href="https://www.instagram.com/chocoacu_chocolatecia/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-gray-300 transition-colors duration-300 font-semibold"
          >
            Chocoaçu™
          </a>
          . Todos os direitos reservados. | Feito com amor 💝
        </span>

        {/* Links do rodapé */}
        <ul className="flex flex-col sm:flex-row items-center gap-4 text-sm font-medium">
          {["Sobre", "Política de Privacidade", "Licenciamento", "Contato"].map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className="hover:underline hover:text-gray-300 transition-colors duration-300 text-white"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
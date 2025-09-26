import logo from "../../assets/Logo.png";

const LoadingScreen = () => {
  return (
    // Container principal que ocupa a tela inteira
    <div className="fixed inset-0 z-[100] flex h-screen w-screen items-center justify-center bg-[#3d2b1f]">
      <div className="text-center">
        {/* Usamos a sua logo com uma animação de pulsação do Tailwind */}
        <img
          src={logo}
          alt="Logo Chocoaçu"
          className="mx-auto w-48 animate-pulse object-contain drop-shadow-lg"
        />
        <p className="mt-4 text-lg font-medium text-white/80">
          Carregando delícias...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
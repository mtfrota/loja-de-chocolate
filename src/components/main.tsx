import Index from "./Hero/index";
import Sobre from "../components/Sobre/sobre";
import Produtos from "./Produtos/produtos";


const Main = ({ className }: { className?: string }) => {
  return (
    <main className={`flex-grow p-6 flex flex-col min-h-screen bg-gradient-to-b from-[#9e6d4e] to-[#c28a5c] text-[#3d2b1f] ${className} animate-slideDown`}>
      <Index />
      <Sobre />
      <Produtos />
    </main>
  );
};

export default Main;
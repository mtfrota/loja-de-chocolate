import Index from "./Hero"; 
import Sobre from "./Sobre/sobre";
import Produtos from "./Produtos";

const Main = ({ className }: { className?: string }) => {
  return (
    <main className={`flex-grow flex flex-col min-h-screen text-[#3d2b1f] ${className} animate-slideDown`}>
      <div className="px-4 md:px-6">
        <Index />
        <Sobre />
      </div>
      <Produtos />
    </main>
  );
};

export default Main;
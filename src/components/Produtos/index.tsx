import { motion } from "framer-motion";
import imagem1 from "/src/assets/produtos/01.png";
import imagem2 from "/src/assets/produtos/02.png";
import imagem3 from "/src/assets/produtos/03.png";
import imagem4 from "/src/assets/produtos/04.png";
import ProdutosDesktop from "./ProdutosDesktop";
import ProdutosMobile from "./ProdutosMobile";


const produtos = [
  {
    nome: "Chocolatudo",
    descricao: "Trufa de chocolate artesanal, preparada com chocolate nobre, textura cremosa e sabor intenso.",
    imagem: imagem1,
    detalhes: "Ingredientes: Doce de leite, cobertura fracionada meio amargo, chocolate em pó 50%.",
  },
  {
    nome: "Bombom de Cupuaçu",
    descricao: "Trufa artesanal de cupuaçu, com recheio cremoso e levemente ácido da fruta amazônica.",
    imagem: imagem2,
    detalhes: "Ingredientes: Cobertura fracionada meio amargo, doce de leite, polpa de cupuaçu, açúcar.",
  },
  {
    nome: "Nutelissimo",
    descricao: "Trufa artesanal de Nutella, com recheio cremoso e envolvente, coberta por uma camada delicada de chocolate",
    imagem: imagem3,
    detalhes: "Ingredientes: Doce de leite, chocolate cobertura meio amargo, Nutella, chocolate em pó 50%.",
  },
  {
    nome: "Bombom de Maracujito",
    descricao: "Trufa artesanal de maracujá, com recheio cremoso.",
    imagem: imagem4,
    detalhes: "Ingredientes: Doce de leite, chocolate cobertura meio amargo, geleia de maracujá.",
  },
];

const ProdutosSection = () => {
  return (
    <section id="produtos" className="py-16 bg-[#9e6d4e] overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          className="text-4xl font-bold tracking-wide text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Descubra Nossos Sabores! 😋
        </motion.h1>
        <motion.p
          className="mt-4 text-lg font-light text-white/80 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Nossa cozinha está sempre inovando para trazer novos sabores que vão te surpreender.
        </motion.p>
      </div>

      {/* Lógica para decidir qual componente mostrar e passar a lista de produtos */}
      <div className="hidden md:block">
        <ProdutosDesktop produtos={produtos} />
      </div>
      <div className="block md:hidden">
        <ProdutosMobile produtos={produtos} />
      </div>
    </section>
  );
};

export default ProdutosSection;
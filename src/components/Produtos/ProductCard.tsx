import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

// Exportamos o tipo para que outros arquivos possam usá-lo
export type Produto = {
  nome: string;
  descricao: string;
  imagem: string;
  detalhes: string;
};

// Define as props que o nosso cartão vai receber
type ProductCardProps = {
  produto: Produto;
};

const ProductCard = ({ produto }: ProductCardProps) => {
  return (
    <motion.div
      className="relative flex-shrink-0 w-[80%] sm:w-[45%] lg:w-[30%] rounded-lg shadow-lg overflow-hidden snap-center"
      whileHover={{ y: -8 }} // Efeito de levantar o card no hover
      transition={{ duration: 0.3 }}
    >
      {/* Imagem com overlay de detalhes no hover */}
      <div className="relative">
        <img
          src={produto.imagem}
          alt={`Imagem do produto ${produto.nome}`}
          className="w-full h-56 object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-lg font-bold text-yellow-300">Ingredientes:</h3>
          <p className="text-white">{produto.detalhes}</p>
        </div>
      </div>

      {/* Conteúdo de texto do card */}
      <div className="p-5 bg-[#41160d] text-white">
        <h3 className="text-2xl font-bold">{produto.nome}</h3>
        <p className="mt-2 text-white/80 h-30 overflow-hidden">{produto.descricao}</p>
        <a 
          href="#" // Link
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2 bg-yellow-400 text-[#5a3b27] font-bold rounded-lg hover:bg-yellow-300 transition-colors duration-200"
        >
          <FontAwesomeIcon icon={faShoppingCart} />
          Adicionar
        </a>
      </div>
    </motion.div>
  );
};

export default ProductCard;
"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import imagem1 from "/src/assets/produtos/imagem1.png";
import imagem2 from "/src/assets/produtos/imagem2.png";



const produtos = [
  {
    nome: "Chocolatudo",
    descricao:
      "Feito artesanalmente com paixão e dedicação. Uma combinação perfeita de doce de leite e chocolate em pó 50% amargo – puro sabor, sem excessos, apenas a essência do verdadeiro chocolate!",
    imagem: imagem1,
    detalhes: "Ingredientes: Doce de leite, chocolate 50% cacau, manteiga de cacau.",
  },
  {
    nome: "Bombom de Cupuaçu",
    descricao:
      "Uma explosão tropical! Cupuaçu envolto no melhor chocolate artesanal, trazendo equilíbrio entre o azedinho da fruta e o doce irresistível do chocolate.",
    imagem: imagem2,
    detalhes: "Ingredientes: Polpa de cupuaçu, chocolate artesanal, açúcar orgânico.",
  },
];

const ProdutosCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % produtos.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col items-center text-center py-12 bg-gradient-to-r from-[#7f4a21] to-[#c28a5c] text-white rounded-lg shadow-md">
      <motion.h1
        className="text-4xl font-bold tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Descubra nossos sabores! 😋
      </motion.h1>
      <motion.p
        className="mt-4 text-lg font-light"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        No momento temos esses, ainda estamos inovando para novos sabores
      </motion.p>

      {/* Carrossel de produtos */}
      <div id="controls-carousel" className="relative w-full mt-6 overflow-hidden flex items-center justify-center">
        <div className="relative w-full max-w-[85%] mx-auto min-h-[450px] md:min-h-[500px] lg:min-h-[550px] rounded-lg grid place-items-center">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="relative w-full flex flex-col items-center justify-center text-center"
            aria-hidden="true"
          >
            {/* Imagem com efeito de zoom e hover com detalhes */}
            <motion.div className="relative w-[90%] h-auto md:w-[600px] md:h-[350px] lg:w-[700px] lg:h-[400px]">
              <motion.img
                loading="lazy"
                src={produtos[activeIndex].imagem}
                className="w-full h-full object-cover rounded-lg shadow-md"
                alt={`Imagem do produto ${produtos[activeIndex].nome}`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
              <motion.div
                className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg"
              >
                <p className="text-white text-lg p-4">{produtos[activeIndex].detalhes}</p>
              </motion.div>
            </motion.div>

            <motion.h2
              className="mt-4 text-2xl font-bold"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {produtos[activeIndex].nome}
            </motion.h2>
            <motion.p
              className="mt-2 text-lg font-light w-full max-w-2xl break-words whitespace-normal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {produtos[activeIndex].descricao}
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Dots de navegação */}
      <div className="flex justify-center mt-6 gap-3">
        {produtos.map((_, index) => (
          <motion.button
            key={index}
            className={`h-4 w-4 rounded-full ${activeIndex === index ? "bg-white" : "bg-gray-500"}`}
            onClick={() => setActiveIndex(index)}
            whileHover={{ scale: 1.3 }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </section>
  );
};

export default ProdutosCarousel;
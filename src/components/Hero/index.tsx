import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import chocolate_artesanal from "../Hero/carrossel/chocolate_artesanal.png";
import desperte_seus_sentidos from "../Hero/carrossel/desperte_seus_sentidos.png";
import sabores_irresistiveis from "../Hero/carrossel/sabores_irresistiveis.png";

const imagens = [chocolate_artesanal, desperte_seus_sentidos, sabores_irresistiveis];

const Hero = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % imagens.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        // MUDANÇA: Estrutura principal da seção
        <section id="inicio" className="flex flex-col md:flex-row bg-[#c28a5c] text-white rounded-3xl shadow-2xl overflow-hidden my-4 min-h-[80vh]">
            
            {/* Coluna 1: Conteúdo de Texto (à esquerda no desktop) */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center p-8 md:p-12 order-2 md:order-1">
                <div className="max-w-md">
                    <motion.h1
                        className="text-4xl lg:text-5xl font-extrabold tracking-tight drop-shadow-lg"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Desperte seus sentidos com o <span className="text-yellow-300">sabor do chocolate artesanal</span>
                    </motion.h1>

                    <motion.p
                        className="mt-6 text-lg font-light text-white/90"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Feito com paixão e ingredientes premium, cada mordida é uma explosão de sabor e carinho.
                    </motion.p>

                    <motion.button
                        className="mt-8 px-8 py-4 bg-yellow-300 text-[#5a3b27] font-bold text-lg rounded-xl shadow-lg hover:bg-yellow-400 transition-transform duration-300 hover:scale-105 focus:outline-none"
                         // Removida a animação pulsante para um visual mais limpo, mas pode ser adicionada de volta se quiser
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        🍫 Experimente Agora
                    </motion.button>
                </div>
            </div>

            {/* Coluna 2: Carrossel de Imagens (à direita no desktop) */}
            <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-full order-1 md:order-2">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={activeIndex}
                        src={imagens[activeIndex]}
                        className="absolute w-full h-full object-cover"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        alt="Imagem do Hero"
                    />
                </AnimatePresence>

                {/* Dots de navegação */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                    {imagens.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`h-3 w-3 rounded-full transition-colors duration-300 ${activeIndex === index ? 'bg-white' : 'bg-white/50 hover:bg-white'}`}
                            aria-label={`Ir para o slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
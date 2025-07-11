import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import chocolate_artesanal from "../Hero/carrossel/chocolate_artesanal.png";
import desperte_seus_sentidos from "../Hero/carrossel/desperte_seus_sentidos.png";
import sabores_irresistiveis from "../Hero/carrossel/sabores_irresistiveis.png";

// Array centralizado para facilitar a manutenção
const imagens = [chocolate_artesanal, desperte_seus_sentidos, sabores_irresistiveis];

const Hero = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % imagens.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative flex items-center justify-center text-center py-20 md:py-50 bg-gradient-to-r from-[#c28a5c] to-[#9e6d4e] text-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Background com transição */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.img
                        src={imagens[activeIndex]}
                        className="absolute w-full h-full object-cover"
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 0.7, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 8, ease: [0.42, 0, 0.58, 1] }} // Curva de suavização Bezier
                        alt="Imagem do Hero"
                    />
                </AnimatePresence>

                
                {/* Overlay escuro para contraste */}
                <div className="absolute inset-0 bg-black opacity-10 backdrop-blur-sm"></div>
            </div>

            {/* Conteúdo */}
            <div className="relative z-10 max-w-3xl mx-auto px-6">
                <motion.h1
                    className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-2xl"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Desperte seus sentidos com o <span className="text-yellow-300">sabor do chocolate artesanal</span>
                </motion.h1>

                <motion.p
                    className="mt-6 text-lg md:text-xl font-light drop-shadow-lg text-white/90"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    Feito com paixão e ingredientes premium, cada mordida é uma explosão de sabor e carinho.
                </motion.p>

                <motion.button
                    className="mt-8 px-8 py-4 bg-yellow-300 text-[#5a3b27] font-bold text-lg rounded-xl shadow-lg hover:bg-yellow-400 transition-all duration-300 focus:outline-none"
                    initial={{ opacity: 1, scale: 1 }} // Garante que o botão não desapareça
                    animate={{ 
                        boxShadow: ["0px 0px 8px rgba(255, 204, 128, 0.5)", "0px 0px 16px rgba(255, 204, 128, 1)", "0px 0px 8px rgba(255, 204, 128, 0.5)"]
                    }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    🍫 Experimente Agora
                </motion.button>

            </div>
        </section>
    );
};

export default Hero;
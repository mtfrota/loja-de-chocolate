import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import cartoon1 from "../../assets/claudia/cartoon1.png";
import cartoon2 from "../../assets/claudia/cartoon2.png";

const Sobre = () => {
  return (
    <section
      id="quem-somos"
      className="my-12 overflow-hidden"
      aria-label="Seção sobre a história da CHOCOAÇU_CHOCOLATE CIA"
    >
      {/* Container principal com o novo layout em colunas para telas grandes (lg) */}
      <div className="flex flex-col lg:flex-row bg-gradient-to-r from-[#c28a5c] to-[#9e6d4e] rounded-lg shadow-lg">
        
        {/* COLUNA 1: IMAGENS (à esquerda no desktop) */}
        <div className="lg:w-1/2 flex items-center justify-center p-8">
          <div className="relative flex items-center">
            <motion.img
              loading="lazy"
              className="rounded-full w-50 h-50 object-cover shadow-lg border-5 border-white/30 z-10"
              src={cartoon1}
              alt="Ilustração de Claudia, a fundadora"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.05, rotate: -5, zIndex: 20 }}
            />
            <motion.img
              loading="lazy"
              className="rounded-full w-40 h-40 object-cover shadow-lg border-6 border-white/30 -ml-16"
              src={cartoon2}
              alt="Ilustração dos chocolates Chocoaçu"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05, rotate: 5, zIndex: 20 }}
            />
          </div>
        </div>

        {/* COLUNA 2: TEXTO (à direita no desktop) */}
        <div className="lg:w-1/2 p-8 md:p-12 text-white">
          <motion.h2
            className="text-4xl font-extrabold text-[#3d2b1f] drop-shadow-md mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Nossa Doce Jornada
          </motion.h2>

          <motion.div
            className="space-y-4 text-white/90 leading-relaxed text-justify"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {/* NOVO: Letra Capitular no primeiro parágrafo */}
            <p className="first-letter:text-6xl first-letter:font-bold first-letter:text-yellow-300 first-letter:float-left first-letter:mr-3 first-letter:-mt-1">
              Sou Claudia, uma mulher apaixonada, casada há 37 anos com o amor da minha vida. Nossa trajetória é marcada por desafios, conquistas e, acima de tudo, por um amor que só cresce com o tempo. Nossas duas filhas são nosso maior presente e inspiração diária.
            </p>
            <p>
              Em 2005, recebemos a oportunidade de administrar uma fábrica de bombons artesanais. Expandimos para pães de mel e conquistamos grandes mercados. Em 2010, um revés financeiro nos levou a encerrar o negócio e tivemos que recomeçar. Mas a paixão pelo chocolate nunca nos abandonou.
            </p>
            <p>
              Agora, em 2025, renasço com a <span className="font-semibold text-yellow-300">Chocoaçu</span>. Cada pedaço de chocolate carrega dedicação e carinho, e cada receita artesanal é feita com os melhores ingredientes.
            </p>
            
            {/* NOVO: Bloco de destaque para o Typewriter */}
            <div className="bg-black/20 rounded-lg p-4 mt-6 italic text-center">
              <Typewriter
                options={{ loop: false, autoStart: true }}
                onInit={(typewriter) => {
                  typewriter
                    .changeDelay(20)
                    .typeString("Mas os que esperam no Senhor renovam as suas forças...")
                    .pauseFor(500)
                    .typeString(" voam alto como águias, correm e não ficam exaustos, andam e não se cansam.")
                    .pauseFor(800)
                    .typeString("<br/>– Isaías 40:31")
                    .start();
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
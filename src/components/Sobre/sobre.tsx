import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import cartoon1 from "../../assets/claudia/cartoon1.png";
import cartoon2 from "../../assets/claudia/cartoon2.png";

const Sobre = () => {
  return (
    <section
      id="quem-somos"
      className="relative my-12 p-8 bg-gradient-to-r from-[#c28a5c] to-[#9e6d4e] rounded-lg shadow-lg overflow-hidden"
      aria-label="Seção sobre a história da CHOCOAÇU_CHOCOLATE CIA"
    >
      {/* Efeito de fundo pulsante */}
      <motion.div
        className="absolute inset-0 bg-white/5 rounded-lg"
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 5, repeat: Infinity }}
        aria-hidden="true"
      />

      {/* Título com animação corrigida */}
      <motion.h2
        className="text-4xl font-extrabold text-[#3d2b1f] text-center drop-shadow-md"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: [0.8, 1, 0.8] }} // Corrigido: opacity máximo = 1
        transition={{ duration: 2, repeat: Infinity }}
      >
        Quem Somos
      </motion.h2>

      {/* Texto narrativo */}
      <motion.div
        className="mt-6 max-w-3xl mx-auto text-white text-lg leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <p>
          Sou Claudia, uma mulher apaixonada, casada há 37 anos com o amor da minha vida. Nossa trajetória é marcada
          por desafios, conquistas e, acima de tudo, por um amor que só cresce com o tempo. Nossas duas filhas são nosso maior presente e inspiração diária.
        </p>

        <p className="mt-6">
          Em 2005, recebemos a oportunidade de administrar uma fábrica de bombons artesanais. Expandimos para pães de mel e conquistamos grandes mercados. Em 2010, um revés financeiro nos levou a encerrar o negócio — e tivemos que recomeçar. Mas a paixão pelo chocolate nunca nos abandonou.
        </p>

        <p className="mt-6">
          Agora, em 2025, renasço com a <span className="font-semibold">CHOCOAÇU_CHOCOLATE CIA</span>. Cada pedaço de chocolate carrega dedicação e carinho, e cada receita artesanal é feita com os melhores ingredientes, garantindo um sabor autêntico e irresistível.
        </p>

        <p className="mt-6">
          Acredito que todo desafio traz uma oportunidade de recomeço. E, nesta nova fase, quero compartilhar com vocês o prazer de criar algo doce e especial. Vamos juntos nessa jornada!
        </p>

        <div className="text-white text-lg font-bold flex justify-center items-center mt-6">
          <Typewriter
            options={{
              loop: false,
              autoStart: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .changeDelay(15)
                .typeString("Mas os que esperam no Senhor renovam as suas forças; voam alto como águias, correm e não ficam exaustos, andam e não se cansam. – Isaías 40:31")
                .pauseFor(800)
                .start();
            }}
          />
        </div>
      </motion.div>

      {/* Imagens ilustrativas com ajustes de escala */}
      <div className="flex justify-center mt-8 gap-8">
        <motion.img
          loading="lazy"
          className="rounded-full w-44 h-44 object-cover shadow-lg"
          src={cartoon1}
          alt="Chocolate artesanal da CHOCOAÇU_CHOCOLATE CIA"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          whileHover={{ scale: 1.2, rotate: 6 }} // Ajustado para evitar distorção
        />
        <motion.img
          loading="lazy"
          className="rounded-full w-44 h-44 object-cover shadow-lg"
          src={cartoon2}
          alt="Chocolate artesanal da CHOCOAÇU_CHOCOLATE CIA"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          whileHover={{ scale: 1.2, rotate: -6 }}
        />
      </div>
    </section>
  );
};

export default Sobre;
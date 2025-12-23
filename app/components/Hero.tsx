import DownloadCV from './DownloadCV';

const Hero = () => {
  return (
    <section id="about" className="w-full min-h-[95vh] flex flex-col justify-center items-center text-center px-4 pt-24 pb-12">
      
      {/* Titre Principal */}
      <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight animate-fade-in-up">
        Victor <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Wybon</span>
      </h1>
      
      <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light max-w-2xl">
        Étudiant en BUT Informatique - 3ème année
      </p>

      {/* Texte de présentation */}
      <div className="max-w-3xl mx-auto text-gray-400 leading-relaxed text-lg mb-10 space-y-6">
        <p>
          Étudiant à l'IUT de Lens, je suis passionné par l'informatique depuis mon plus jeune âge, 
          que ce soit côté <span className="text-orange-500 font-medium">logiciel</span> ou <span className="text-orange-500 font-medium">matériel</span> ! 
          Je vous invite à découvrir mes projets personnels et scolaires.
          <br/><br/>
          <span className="text-orange-500 font-medium">Actuellement à la recherche d'un stage pour Mars 2026 !</span>
          <br/>
          N'hésitez pas à me contacter pour toute demande d'information.
        </p>
      </div>

      {/* Boutons d'action */}
      <div className="flex flex-wrap justify-center gap-4 mb-16 items-center">
        <a href="#contact" className="px-8 py-3 bg-orange-600 text-white font-bold rounded hover:bg-orange-700 transition-all shadow-lg shadow-orange-900/20 transform hover:scale-105">
          Me Contacter
        </a>
        <a href="#projects" className="px-8 py-3 border border-gray-700 text-white font-medium rounded hover:border-orange-500 transition-all hover:bg-neutral-900">
          Voir mes projets
        </a>
        
        {/* Bouton Télécharger CV */}
        <DownloadCV />
      </div>

      {/* Section "Qui suis-je ?" */}
      <div className="max-w-4xl mx-auto border-t border-neutral-800 pt-10 mt-4">
        <h2 className="text-2xl font-bold text-white mb-4">Qui suis-je ?</h2>
        <p className="text-gray-500 italic leading-relaxed">
          "Passionné par l'informatique, les jeux vidéo, l'astrologie, la minéralogie, le badminton, le rugby, les Lego, la science-fiction, et bien d'autres domaines encore, j'aime explorer des univers variés et riches !"
        </p>
      </div>

    </section>
  );
};

export default Hero;

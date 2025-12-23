import Image from 'next/image';

const projects = [
  {
    title: "Marathon Web",
    subtitle: "36 heures - PHP Laravel",
    desc: "Création d'un site complet en collaboration avec des étudiants MMI (équipe de 8). Développement, suivi du cahier des charges. Thème choisi : le voyage galactique.",
    tags: ["PHP", "Laravel", "Git", "Travail d'équipe"],
    image: "/marat.png"
  },
  {
    title: "Logiciels & Jeux",
    subtitle: "Projets Universitaires",
    desc: "Développement en Java et Angular. Conception de logiciels de gestion et de jeux vidéo (ex: Bomberman).",
    tags: ["Java", "Angular", "Game Dev"],
    image: "/bomberman.png"
  },
  {
    title: "Infra & Système",
    subtitle: "Projets Personnels",
    desc: "Serveurs personnels, Docker, Reverse Proxy, déploiement d'applications, serveurs de jeux, hébergement web, etc.",
    tags: ["Docker", "Linux", "Python", "Flask", "x86", "ARM"],
    image: "/lc.jpg"
  },
  {
    title: "Logiciels Web",
    subtitle: "Projets Personnels",
    desc: "Développement d'un logiciel de gestion de collections personnelles de minéraux.",
    tags: ["Python", "Flask", "SQLite"],
    image: "/gems.png"
  },
  {
    title: "GMAO - ADTI",
    subtitle: "Stage 2025 (10 semaines)",
    desc: "Dév. logiciel, optimisation UX/UI et tests unitaires. Technologies : C# .NET, Angular, Python.",
    tags: ["C#", ".NET", "Angular", "Python", "UX/UI", "Tests"],
    image: "/optima.png"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="w-full py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Mes <span className="text-orange-500">Projets</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:border-orange-500/50 transition-all hover:-translate-y-2 group shadow-lg flex flex-col">
              
              {/* Image du projet */}
              <div className="relative w-full h-40 bg-neutral-800 overflow-hidden shrink-0">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent opacity-90"></div>
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-orange-500 transition-colors">{project.title}</h3>
                <p className="text-[10px] text-orange-400 mb-3 uppercase tracking-wide font-semibold">{project.subtitle}</p>
                <p className="text-gray-400 text-xs mb-4 leading-relaxed flex-grow">{project.desc}</p>
                
                <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[9px] uppercase font-bold bg-neutral-950 text-gray-400 px-2 py-1 rounded border border-neutral-800">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

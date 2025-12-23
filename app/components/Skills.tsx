const skills = [
  { category: "Développement d'application", items: ["Java", "Python", "C#", "PHP", "TypeScript", "Kotlin"] },
  { category: "Développement Web", items: ["Angular", "React", "Next.js", "Laravel", "Flask", "Tailwind"] },
  { category: "Système & Outils", items: ["Docker", "Podman", "Nomad", "Git", "Traefik (reverse proxy)", "Bash","CI/CD"] },
  { category: "Base de donnée", items: ["Postgres SQL", "SQL", "NoSQL", "JDBC", "MongoDB", "CassandraDB","NEO4J", "Spark"] },
  { category: "Soft Skills", items: ["Autonomie", "Rigueur", "Travail d'équipe", "Anglais B2"] }
];

const Skills = () => {
  return (
    <section id="skills" className="w-full py-24 bg-neutral-900/30 px-4 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Compétences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-neutral-950 p-8 rounded-xl border-t-4 border-orange-600 shadow-xl hover:bg-neutral-900 transition-colors">
              <h3 className="text-xl font-bold text-white mb-6">{skillGroup.category}</h3>
              <ul className="space-y-3">
                {skillGroup.items.map(item => (
                  <li key={item} className="flex items-center text-gray-400">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

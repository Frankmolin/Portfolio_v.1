import getRandomPastelColor from "../utils/randColor";


export default function Skills() {
  const skillsData = [
    { name: 'HTML', level: 'Intermedio' },
    { name: 'CSS', level: 'Intermedio' },
    { name: 'JavaScript', level: 'Avanzado' },
    { name: 'React', level: 'Intermedio' },
    { name: 'Node.js', level: 'Intermedio' },
    { name: 'SQL', level: 'Intermedio' },
    { name: 'Python', level: 'Básico' },
    { name: 'Java', level: 'Básico' },
    { name: 'Tailwind', level: 'Intermedio' },
    { name: 'Bootstrap', level: 'Básico' },
    { name: 'Git', level: 'Básico' }
  ];
  

  return (
    <div id="skills" className="md:col-span-2 bg-light dark:bg-dark p-8">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-dark dark:text-light">Habilidades</h2>
        <div className="flex flex-wrap gap-4">
          {skillsData.map((skill) => (
            <div key={skill.name} style={{backgroundColor:getRandomPastelColor()}} className='p-4 rounded shadow'>
              <h3 className="text-lg font-bold text-dark ">{skill.name}</h3>
              <p className="text-gray-600 ">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


import React, { useEffect, useState } from 'react';
import getRandomPastelColor from '../utils/randColor';

interface Project {
  id: number;
  name: string;
  description: string;
  url: string;
  language: string;
  homepage: string;
}

const GitHubProjects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/Frankmolin/repos')
      .then((response) => response.json())
      .then((data) => {
        const mappedProjects: Project[] = data.map((repo: any) => ({
          id: repo.id,
          name: repo.name,
          description: repo.description,
          url: repo.html_url,
          language: repo.language,
          homepage: repo.homepage,
        }));
        setProjects(mappedProjects);
      })
      .catch((error) => {
        console.log('Error fetching GitHub projects:', error);
      });
  }, []);


  return (
    <div id='portfolio' className="md:col-span-3 p-8 bg-light dark:bg-dark">
      <h1 className="text-3xl font-bold mb-4 text-dark dark:text-light">Mis Proyectos en GitHub</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-4">
        {projects.map((project) => {
      if(project.name!="Frankmolin" && project.name!="Portfolio_v.1"){
          const randCol=getRandomPastelColor()
          return (
            <div key={project.id} className="p-4 bg-white rounded shadow dark:bg-secondary">
              <h2 className="text-xl font-bold mb-2">{project.name}</h2>
              <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
              <p className="text-dark dark:text-light mt-2">Lenguaje: <span style={{ color: randCol }}>{project.language}</span></p>
              <div className="text-dark mt-4 flex flex-col gap-2 sm:flex-row">
                {project.homepage && (
                  <a
                    href={project.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ backgroundColor:randCol }}
                    className="inline-block text-center sm:w-max px-4 py-2  rounded filter hover:brightness-90 dark:hover:brightness-125 transition-all duration-300"
                  >
                    Visitar Sitio Web
                  </a>
                )}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ backgroundColor: randCol }}
                  className="inline-block text-center sm:w-max px-4 py-2  rounded filter hover:brightness-90 dark:hover:brightness-125 transition-all duration-300"
                >
                  Ver en GitHub
                </a>
              </div>
            </div>
          )}
        })}
      </div>
    </div>
  );
};

export default GitHubProjects;

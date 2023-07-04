import React, { useContext } from "react"
import { LanguageContext } from "../contexts/LanguageContext.jsx"

import "../styles/components/dark-mode/projects.sass"
import "../styles/components/light-mode/projects.sass"

import data from "../data/data.json"
import { ThemeContext } from "../contexts/ColorModeContext.jsx"

const ProjectsContainer = () => {
  const { language } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext)

  return (
    <section className={`projects-container ${theme}`}>
      <h2>{language === 'english' ? data['projects-title-PT'] : data['projects-title-EN']}</h2>
      <p>{language === 'english' ? data['projects-p-PT'] : data['projects-p-EN']}</p>
    </section>
  )
}

export default ProjectsContainer;


// const Projects = () => {
  //   const [repositories, setRepositories] = useState([]);
  
//   useEffect(() => {
  //     fetch("https://api.github.com/users/Victorhtf/repos")
//       .then((response) => response.json())
//       .then((data) => setRepositories(data));
//   }, []);

//   return (
//     <section className={`projects-container ${theme}`}>
//       <h2>{language === "english" ? data["projects-title-PT"] : data["projects-title-EN"]}</h2>
//       <p>{language === "english" ? data["projects-p-PT"] : data["projects-p-EN"]}</p>
//       .contain
//       <div>
//         <ul>
//           {repositories.map((repository) => (
//             <li key={repository.id}>
//               <h3>{repository.name}</h3>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// }

// export default ProjectsContainer

// const Projects = () => {
//   const { theme } = useContext(ThemeContext);

//   return (
//     <div className={`projects-card ${theme}`}>
//       <h2>Projects</h2>
//       <div className="projects-container-grid">
//         <div className="blue"></div>
//         <div className="red"></div>
//         <div className="yellow"></div>
//         <div className="green"></div>
//         <h3 className="title">Título</h3>
//         <p className="description">Descrição</p>
//         <div className="stacks">Stacks</div>/
//       </div>
//     </div>
//   )
// }

// export default Projects

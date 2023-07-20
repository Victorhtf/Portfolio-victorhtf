import React, { useContext } from "react"
import { LanguageContext } from "../contexts/LanguageContext.jsx"

import "../styles/components/dark-mode/projects.sass"
import "../styles/components/light-mode/projects.sass"

import data from "../data/data.json"
import { ThemeContext } from "../contexts/ColorModeContext.jsx"
import Repos from "./Repos.jsx"

const ProjectsContainer = () => {
  const { language } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext)

  return (
    <section className={`projects-container ${theme}`}>
      <h2>{language === 'english' ? data['projects-title-PT'] : data['projects-title-EN']}</h2>
      <p>{language === 'english' ? data['projects-p-PT'] : data['projects-p-EN']}</p>
      <Repos/>
    </section>
  )
}

export default ProjectsContainer;
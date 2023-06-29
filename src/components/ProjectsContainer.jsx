import React, { useContext } from "react"
import { LanguageContext } from "../contexts/LanguageContext.jsx"

import "../styles/components/projectscontainer.sass"

import data from "../data/data.json"

const ProjectsContainer = () => {
  const { language } = useContext(LanguageContext);

  return (
    <section className="projects-container">
      <h2>{language === 'english' ? data['projects-title-PT'] : data['projects-title-EN']}</h2>
      <p>{language === 'english' ? data['projects-p-PT'] : data['projects-p-EN']}</p>
    </section>
  )
}

export default ProjectsContainer;
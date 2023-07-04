import { useContext } from "react"
import { LanguageContext } from  "../contexts/LanguageContext.jsx"
import { ThemeContext } from "../contexts/ColorModeContext.jsx"

import data from "../data/data.json"

import "../styles/components/light-mode/aboutcontainer.sass"
import "../styles/components/dark-mode/aboutcontainer.sass"


const AboutContainer = () => {
  const { language } = useContext(LanguageContext)
  const { theme } = useContext(ThemeContext)
  return (
    <section className={`about-container ${theme}`}>
        <h2>{language === 'english' ? data['about-title-PT'] : data['about-title-EN']}</h2>
        <p>{language === 'english' ? data['about-p1-PT'] : data['about-p1-EN']}</p>
        <p>{language === 'english' ? data['about-p2-PT'] : data['about-p2-EN']}</p>
        <p>{language === 'english' ? data['about-p3-PT'] : data['about-p3-EN']}</p>
        <p>{language === 'english' ? data['about-p4-PT'] : data['about-p4-EN']}</p>
    </section>

  )
}

export default AboutContainer
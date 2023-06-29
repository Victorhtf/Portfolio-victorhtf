import { useContext } from "react"
import { LanguageContext } from  "../contexts/LanguageContext.jsx"
import data from "../data/data.json"

import "../styles/components/aboutcontainer.sass"
import "../styles/components/language.sass"

const LanguageProvider = useContext //Rever

const AboutContainer = () => {
  const { language } = useContext(LanguageContext)
  return (
    <section className="about-container">
        <h2>{language === 'english' ? data['about-title-PT'] : data['about-title-EN']}</h2>
        <p>{language === 'english' ? data['about-p1-PT'] : data['about-p1-EN']}</p>
        <p>{language === 'english' ? data['about-p2-PT'] : data['about-p2-EN']}</p>
        <p>{language === 'english' ? data['about-p3-PT'] : data['about-p3-EN']}</p>
        <p>{language === 'english' ? data['about-p4-PT'] : data['about-p4-EN']}</p>
    </section>

  )
}

export default AboutContainer
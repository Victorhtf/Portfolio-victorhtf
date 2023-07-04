import { useContext } from "react";
import SocialNetworks from "./SocialNetworks";
import InformationContainer from "./InformationContainer";
import { LanguageContext } from "../contexts/LanguageContext";
import { ThemeContext } from "../contexts/ColorModeContext";

import data from "../data/data.json";
import Photo from "../img/photo.jpg";

import resumePT from "../resources/resumePT.pdf";
import resumeEN from "../resources/resumeEN.pdf";


import "../styles/components/light-mode/sidebar.sass"
import "../styles/components/dark-mode/sidebar.sass"


const Sidebar = () => {
  const { language } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext)
  const resumeLink = language === 'english' ? resumePT : resumeEN;

  return ( 
    <aside className={`sidebar ${theme}`}> 
      <img src={Photo} alt="Victor Formisano" />
      <p className="title">{language === 'english' ? data['sidebar-ocupation-PT'] : data['sidebar-ocupation-EN']}</p>
      <SocialNetworks />
      <InformationContainer />
      <a href={resumeLink} className='btn'>{language === 'english' ? data['sidebar-resume-PT'] : data['sidebar-resume-EN']}</a>
    </aside>
  );
};

export default Sidebar;

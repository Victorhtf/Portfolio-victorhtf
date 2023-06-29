import { useContext } from "react";
import SocialNetworks from "./SocialNetworks";
import InformationContainer from "./InformationContainer";
import { LanguageContext } from "../contexts/LanguageContext";
import data from "../data/data.json"

import Photo from "../img/photo.jpg";

import "../styles/components/sidebar.sass"

const Sidebar = () => {
  const { language } = useContext(LanguageContext)
  return ( 
    <aside id="sidebar">
      <img src={Photo} alt="Victor Formisano"></img>
      <p className="title">{language === 'english' ? data['sidebar-ocupation-PT'] : data['sidebar-ocupation-EN']}</p>
      <SocialNetworks/>
      <InformationContainer/>
      <a href="../resources/resume.pdf" className='btn'>{language === 'english' ? data['sidebar-resume-PT'] : data['sidebar-ocupation-EN']}</a>
  </aside>

  );
}

export default Sidebar;
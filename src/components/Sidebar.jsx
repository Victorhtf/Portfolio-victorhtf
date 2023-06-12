import SocialNetworks from "./SocialNetworks";
import InformationContainer from "./InformationContainer";

import Photo from "../img/photo.jpg";

import "../styles/components/sidebar.sass"

const Sidebar = () => {
  return ( 
    <aside id="sidebar">
      <img src={Photo} alt="Victor Formisano"></img>
      <p className="title">Fullstack developer</p>
      <SocialNetworks/>
      <InformationContainer/>
      <a href="../resources/resume.pdf" className='btn'>Download resume</a>
  </aside>

  );
}

export default Sidebar;
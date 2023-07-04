import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';

import { useContext } from 'react';
import { ThemeContext } from '../contexts/ColorModeContext';

import "../styles/components/dark-mode/socialnetworks.sass"
import "../styles/components/light-mode/socialnetworks.sass"

const socialNetworks = [
  { name: "linkedin", url:"https://www.linkedin.com/in/victor-formisano/", icon: <FaLinkedinIn/> },
  { name: "github", url:"https://github.com/Victorhtf", icon: <FaGithub/> },
  { name: "instagram", url:"https://www.instagram.com/victorhtf/", icon: <FaInstagram/> },
];

const SocialNetworks = () => {
  const{ theme } = useContext(ThemeContext)
  return ( 
    <section className={`social-networks ${theme}`}>
      {socialNetworks.map((network) => (
        <a href={network.url} className='social-btn' id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  ); 
};

export default SocialNetworks;
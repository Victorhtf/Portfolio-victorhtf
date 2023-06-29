import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';

import "../styles/components/socialnetworks.sass"

const socialNetworks = [
  { name: "linkedin", url:"https://www.linkedin.com/in/victor-formisano/", icon: <FaLinkedinIn/> },
  { name: "github", url:"https://github.com/Victorhtf", icon: <FaGithub/> },
  { name: "instagram", url:"https://www.instagram.com/victorhtf/", icon: <FaInstagram/> },
];

const SocialNetworks = () => {
  return ( 
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href={network.url} className='social-btn' id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  ); 
};

export default SocialNetworks;
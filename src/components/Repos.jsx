import { useState, useEffect, useContext } from 'react';

import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3, FaSass, FaGithub } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io'
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiVercel, } from 'react-icons/si'

import { ThemeContext } from "../contexts/ColorModeContext.jsx";

import FoodHub from '../img/FoodHub.png';
import Portfolio from '../img/Portfolio.png';
import MusicPot from '../img/MusicPot.png'
import CoupleFinances from '../img/CoupleFinances.png'
import MeetMatch from '../img/MeetMatch.png'


import '../styles/components/light-mode/repos.sass';
import '../styles/components/dark-mode/repos.sass';

const Repos = () => {
  const { theme } = useContext(ThemeContext);

  const [repositories, setRepositories] = useState([]);

  const repoInfos = [
    {
      name: 'FoodHub',
      stacks: ['Javascript','React', 'Node','SASS'],
      image: FoodHub,
    },
    {
      name: 'Portfolio-victorhtf',
      stacks: [ 'Javascript','React','SASS'],
      image: Portfolio,
    },
    {
      name: 'MeetMatch',
      stacks: ['Javascript','React', 'Node','SASS'],
      image: MeetMatch,
    },
    {
      name: 'musicpot',
      stacks: ['React', 'Node','SASS'],
      image: MusicPot,
    },
    {
      name: 'CoupleFinances',
      stacks: ['Typescript','Next', 'Node','Tailwind'],
      image: CoupleFinances,
    },
  ];

  const stacksIcons = {
    React: FaReact,
    Typescript: SiTypescript,
    Tailwind: SiTailwindcss,
    Javascript: IoLogoJavascript,
    Node: FaNodeJs,
    Python: FaPython,
    HTML: FaHtml5,
    CSS: FaCss3,
    SASS: FaSass,
    Next: SiNextdotjs,
  };

  const excludeRepositories = ['IMDb-Movies-', 'Calculadora', 'victorhtf'];

  useEffect(() => {
    fetch('https://api.github.com/users/victorhtf/repos')
      .then((res) => res.json())
      .then((data) => {
        const filteredRepositories = data.filter(
          (repository) => !excludeRepositories.includes(repository.name)
        );
        setRepositories(filteredRepositories);
      });
  }, []);

  return (
    <div className={`grid-container ${theme}`}>
      {repositories.map((repository) => {
        const projectInfo = repoInfos.find((info) => info.name === repository.name);
        if (projectInfo) {
          const { name, stacks, image } = projectInfo;
          const IconComponents = stacks.map((stack) => {
            const Icon = stacksIcons[stack];
            return <Icon key={stack} className="icon" />;
          });

          return (
            <div className="grid-card" key={repository.id}>
              <div className="title-container">
                <h1 className='repo-title'>{name}</h1>
                <div className='balls'>
                  <div className='ball1'></div>
                  <div className='ball2'></div>
                  <div className='ball3'></div>
                </div>
              </div>
              <p className="repo-description">{repository.description}</p>
              <div className="stacks-container">
              {IconComponents}
              </div>
              <img src={image} className="repo-thumbnail"/>
              <div className="buttons">
                <a href='#' className='link'>
                  <SiVercel className="icon" />
                  <span className="text">Deploy</span>
                </a>
                <a href={repository.html_url} className='link'>
                  <FaGithub className="icon" />
                  <span className="text">GitHub</span>
                </a>
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default Repos;

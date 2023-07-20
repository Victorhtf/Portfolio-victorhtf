import { useState, useEffect, useContext } from 'react'
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3 } from 'react-icons/fa';
import { ThemeContext } from "../contexts/ColorModeContext.jsx"

import FoodHub from '../img/FoodHubweb.png'


import '../styles/components/light-mode/repos.sass'
import '../styles/components/dark-mode/repos.sass'

const Repos = () => {
  const { theme } = useContext(ThemeContext)
  

    const [repositories, setRepositories] = useState([]);
    
    
    const repoInfos = [
      {
      name: 'FoodHub',
      stacks: ['React', 'Node'],
      image: FoodHub
      }
    ]
    
  

    const stacksIcons = {
      React: FaReact,
      Node: FaNodeJs,
      Python: FaPython,
      HTML: FaHtml5,
      CSS: FaCss3,
    };

    const excludeRepositories = ['IMDb-Movies-','Calculadora', 'victorhtf'];

    useEffect(() => {
            fetch('https://api.github.com/users/victorhtf/repos')
              .then(res => res.json())
              .then(data => {
                const filteredRepositories = data.filter(repository => !excludeRepositories.includes(repository.name))
                setRepositories(filteredRepositories)
              })
        }, [])
  return (
    <div className={`grid-container ${theme}`}>
      {/* {repositories.stacks.map(stack => {
        const Icon = stacksIcon[stack];
        return (
          <Icon key={stack} className="icon" />
        )
      })} */}
          {repositories.map(repository => {
              return (
                <div className='grid-card' key='blank'>
                  <h1 className="repo-title" key={repository.id}>{repository.name}</h1>
                  <p className='repo-description'>{repository.description}</p>
                  <img src={repoInfos.image} className='repo-thumbnail'/>
                </div>
              )
          })}
    </div>
  )
}

export default Repos
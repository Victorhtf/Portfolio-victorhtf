import React, { useContext } from 'react'
import Icon from './Icon'
import ColorMode from './ColorMode'
import LanguageSwitch from './LanguageSwitch'

import { ThemeContext } from '../contexts/ColorModeContext'

import "../styles/components/dark-mode/header.sass"
import "../styles/components/light-mode/header.sass"

const Header = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`header-container ${theme}`}> 
        <div className="left-items">
          <Icon/>
          <h1> Victor Formisano </h1>
        </div>
        <div className="right-items">
          <a href="https://linktr.ee/victorhtf" className='linktree'>Linktree</a>
          <div className="toggle-language"></div>   
          <ColorMode/>
          <LanguageSwitch/>
        </div>
    </div>
  )
}

export default Header

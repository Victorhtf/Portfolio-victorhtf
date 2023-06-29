import React from 'react'

import Icon from './Icon'
import ColorMode from './ColorMode'

import "../styles/components/header.sass"
import LanguageSwitch from './LanguageSwitch'

const Header = () => {
  return (
    <div className='header-container'> 
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

import React from 'react'

import "../styles/components/header.sass"
import Icon from './Icon'
import Language from './Language'

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
          <Language/>
        </div>
    </div>
  )
}

export default Header

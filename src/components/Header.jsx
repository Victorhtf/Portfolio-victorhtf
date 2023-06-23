import React from 'react'

import "../styles/components/header.sass"
import Icon from './Icon'
import Language from './Language'

const Header = () => {
  return (
    <div className='header-container'> 
        <Icon/>
        <h1> Victor Formisano </h1>
        <a href="https://linktr.ee/victorhtf" className='linktree'>Linktree</a>
        <div className="toggle-language"></div>
        <Language/>
    </div>
  )
}

export default Header

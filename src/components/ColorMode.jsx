import React, { useContext } from 'react'
import { MdDarkMode } from 'react-icons/md'
import { BsFillLightbulbFill } from 'react-icons/bs'

import { ThemeContext } from '../contexts/ColorModeContext'

import "../styles/components/dark-mode/colormode.sass"
import "../styles/components/light-mode/colormode.sass"


const ColorMode = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <div className={`color-mode ${theme}`}>
      <span className='light'>
        <BsFillLightbulbFill/>
      </span>
      <input type='checkbox' checked={theme === 'dark'} onChange={toggleTheme} className='switch'></input>
      <span className='dark'>
        <MdDarkMode/>
      </span>
    </div>
  )
}

export default ColorMode
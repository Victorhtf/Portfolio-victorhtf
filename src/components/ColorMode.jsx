import React from 'react'
import { MdDarkMode } from 'react-icons/md'
import { BsFillLightbulbFill } from 'react-icons/bs'

import "../styles/components/colormode.sass"

const ColorMode = () => {
  return (
    <div className='color-mode'>
      <span className='light'>
        <BsFillLightbulbFill/>
      </span>
      <input type='checkbox' className='switch'></input>
      <span className='dark'>
        <MdDarkMode color/>
      </span>
    </div>
  )
}

export default ColorMode
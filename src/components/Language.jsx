import React from 'react'

import "../styles/language.sass"

const Language = () => {
  return (
    <div className="language">
        <span className='en'>🇺🇸</span>
        <input type='checkbox' className='switch'></input>
        <span className='pt'>🇧🇷</span>
    </div>
  )
}

export default Language
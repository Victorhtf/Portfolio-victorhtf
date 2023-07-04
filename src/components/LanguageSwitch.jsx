import React, { useContext } from 'react'
import { LanguageContext } from "../contexts/LanguageContext"
import { ThemeContext } from '../contexts/ColorModeContext'

import "../styles/components/dark-mode/language.sass"
import "../styles/components/light-mode/language.sass"

function LanguageSwitch () {
    const { language, toggleLanguage } = useContext(LanguageContext)
    const { theme } = useContext(ThemeContext)
    return (
        <div>
            <div className={`language ${theme}`}>
                <span className={`en ${theme}`}>🇺🇸</span>
                <input type='checkbox' checked={language === 'english'} onChange={toggleLanguage} className='switch'></input>
                <span className={`pt ${theme}`}>🇧🇷</span>
            </div>
        </div>
      )
    }

export default LanguageSwitch
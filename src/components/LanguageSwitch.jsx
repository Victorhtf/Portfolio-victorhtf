import React, { useContext } from 'react'
import { LanguageContext } from "../contexts/LanguageContext"


function LanguageSwitch () {
    const { language, toggleLanguage } = useContext(LanguageContext)

    return (
        <div>
            <div className="language">
                <span className='en'>🇺🇸</span>
                <input type='checkbox' checked={language === 'english'} onChange={toggleLanguage} className='switch'></input>
                <span className='pt'>🇧🇷</span>
            </div>
        </div>
      )
    }

export default LanguageSwitch


// import React, {useState} from "react"

// function LanguageSwitch () {
//     const [isChecked, setIsChecked] = useState(0)

//     return (
//         <div>
//             <div className="language">
//                 <span className='en'>🇺🇸</span>
//                 <input type='checkbox' checked={!isChecked} onChange={() => setIsChecked(!isChecked)} className='switch'></input>
//                 <span className='pt'>🇧🇷</span>
//             </div>
//         </div>
//       )
//     }

// export default LanguageSwitch




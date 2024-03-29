import { useContext } from 'react';
import { AiFillPhone, AiOutlineMail , AiFillEnvironment } from 'react-icons/ai';
import { LanguageContext } from '../contexts/LanguageContext';
import { ThemeContext } from "../contexts/ColorModeContext.jsx"

import data from "../data/data.json"

import "../styles/components/dark-mode/informationalcontainer.sass"
import "../styles/components/light-mode/informationalcontainer.sass"

const InformationContainer = () => {
    const { theme } = useContext(ThemeContext)
    const { language } = useContext(LanguageContext);
  return (
    <section className={`information ${theme}`}>
        <div className='info-card'>
            <AiFillPhone id="phone-icon"/>
            <div>
                <h3>{language === 'english' ? data['info-phone-title-PT'] : data['info-phone-title-EN']}</h3>
                <p> +55 16 98813 3031</p>
            </div>
        </div>
        <div className='info-card'>
            <AiOutlineMail id="email-icon"/>
            <div>
                <h3>E-mail</h3>
                <p>victorformisano@gmail.com</p>
            </div>
        </div>
        <div className='info-card'>
            <AiFillEnvironment id="pin-icon"/>
            <div>
                <h3>{language === 'english' ? data['info-location-title-PT'] : data['info-location-title-EN']}</h3>
                <p>{language === 'english' ? data['info-location-p-PT'] : data['info-location-p-EN']}</p>
            </div>
        </div>
    </section>
  );
}

export default InformationContainer;
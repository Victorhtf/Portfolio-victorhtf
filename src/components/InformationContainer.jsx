import { AiFillPhone, AiOutlineMail , AiFillEnvironment } from 'react-icons/ai';
import data from "../data/data.json"

import "../styles/components/informationalcontainer.sass";
import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const InformationContainer = () => {
    const { language } = useContext(LanguageContext)
  return (
    <section id="information">
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
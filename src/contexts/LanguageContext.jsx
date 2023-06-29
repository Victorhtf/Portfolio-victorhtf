import React, { createContext, useState } from "react";

export const LanguageContext = createContext()

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState('english')

    const toggleLanguage = () => {
        setLanguage(language === 'english' ? 'portuguese' : 'english')
    }
    
    return (
        <LanguageContext.Provider value={{language, toggleLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}




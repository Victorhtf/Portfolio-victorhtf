import Sidebar from './components/Sidebar.jsx'
import MainContent from "./components/MainContent.jsx"
import Header from './components/Header.jsx';

import { useContext } from 'react';
import { ThemeContext } from './contexts/ColorModeContext.jsx';

import "./styles/components/dark-mode/app.sass"
import "./styles/components/light-mode/app.sass"

function App() {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`portfolio ${theme}`}>
      <div className="header">
        <Header/>
      </div>
      <div className="central-container">
        <Sidebar/>
        <MainContent/>
      </div>
    </div>
  )
}

export default App;



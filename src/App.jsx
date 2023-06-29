import Sidebar from './components/Sidebar.jsx'
import MainContent from "./components/MainContent.jsx"

import "./styles/components/app.sass"
import Header from './components/Header.jsx';
import { LanguageProvider } from "./contexts/LanguageContext.jsx";

function App() {
  return (
    <LanguageProvider>
      <div id="portfolio">
        <div className="header">
          <Header/>
        </div>
        <div id="central-container">
          <Sidebar/>
          <MainContent/>
        </div>
      </div>
    </LanguageProvider>
  )
}

export default App;



import Sidebar from './components/Sidebar.jsx'
import MainContent from "./components/MainContent.jsx"

import "./styles/components/app.sass"
import Header from './components/Header.jsx';

function App() {
  return (
    <div id="portfolio">
      <div className="header">
        <Header/>
      </div>
      <div id="central-container">
        <Sidebar/>
        <MainContent/>
      </div>
    </div>
  )
}

export default App;



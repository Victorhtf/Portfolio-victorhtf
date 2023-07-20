import AboutContainer from "./AboutContainer.jsx"
import Projects from "./Projects.jsx"
import StacksContainer from "./StacksContainer.jsx"

import { useContext } from "react"
import { ThemeContext } from '../contexts/ColorModeContext'

import "../styles/components/light-mode/maincontent.sass"
import "../styles/components/dark-mode/maincontent.sass"
import Repos from "./Repos.jsx"

const MainContent = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <main className={`main-content ${theme}`}>
      <AboutContainer/>
      <Projects/>
      <StacksContainer/>
      <Repos/>
    </main>
  )
}

export default MainContent
import "../styles/components/maincontent.sass"
import AboutContainer from "./AboutContainer.jsx"
import ProjectsContainer from "./ProjectsContainer.jsx"
import StacksContainer from "./StacksContainer.jsx"

const MainContent = () => {
  return (
    <main id="main-content">
      <AboutContainer/>
      <ProjectsContainer/>
      <StacksContainer/>
    </main>

  )
}

export default MainContent
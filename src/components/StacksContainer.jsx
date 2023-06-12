import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiReact,
  DiSass,
  DiMysql,
} from "react-icons/di";

import "../styles/components/stackscontainer.sass";

const mystacks = [
  { id: "html", name: "HTML5", description: "I have worked with HTML", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", description: "I have worked with CSS3", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", description: "I have worked with Javascript", icon: <DiJsBadge /> },
  { id: "node", name: "Node.js", description: "I have worked with Node", icon: <DiNodejsSmall /> },
  { id: "react", name: "React", description: "I have worked with React", icon: <DiReact /> },
  { id: "sass", name: "SASS", description: "I have worked with SASS", icon: <DiSass /> },
  { id: "mysql", name: "MySQL", description: "I have worked with MySQL", icon: <DiMysql /> },

]

const StacksContainer = () => {
  return ( 
    <section className="stacks-container">
      <h2>Stacks</h2>
      <div className="stacks-grid">
        {mystacks.map((stack) => (
          <div className="stacks-card" id={stack.id} key={stack.id}>
            {stack.icon}
            <div className="stacks-info">
              <h3>{stack.name}</h3>
              <p>{stack.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StacksContainer;

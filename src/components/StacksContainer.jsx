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
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "sass", name: "SASS", icon: <DiSass /> },
  { id: "mysql", name: "MySQL", icon: <DiMysql /> },

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
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, praesentium dicta nisi molestiae tempora voluptas?</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StacksContainer;

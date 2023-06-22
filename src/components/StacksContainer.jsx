import { SiNextdotjs } from "react-icons/si"
import { 
  DiJsBadge,
  DiNodejsSmall,
  DiReact,
  DiSass,
  DiMysql,
} from "react-icons/di";

import "../styles/components/stackscontainer.sass";

const mystacks = [
  { id: "js", name: "JavaScript", description: "Basic level", icon: <DiJsBadge /> },
  { id: "node", name: "Node.js", description: "Basic level", icon: <DiNodejsSmall /> },
  { id: "react", name: "React.js", description: "Intermediate level", icon: <DiReact /> },
  { id: "sass", name: "SASS", description: "Intermediate level", icon: <DiSass /> },
  { id: "next", name: "Next.js", description: "Basic level", icon: <SiNextdotjs /> },
  { id: "mysql", name: "MySQL", description: "Intermediate level", icon: <DiMysql /> },
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
  
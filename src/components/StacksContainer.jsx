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
  { id: "js", name: "JavaScript", description: "Implementing advanced front-end functionalities. Ability to work with modern JavaScript frameworks and contribute to reusable code libraries.", icon: <DiJsBadge /> },
  { id: "node", name: "Node.js", description: "Experience in building robust, scalable, and secure server-side applications using Node.js. Skilled at implementing RESTful APIs with Express.js and integrating with various databases.", icon: <DiNodejsSmall /> },
  { id: "react", name: "React.js", description: "Skilled at building dynamic, responsive websites using React.js. Proficient in component-based architecture, hooks, state management, and the overall React ecosystem.", icon: <DiReact /> },
  { id: "sass", name: "SASS", description: "Developing dynamic and interactive user interfaces. Ability to create reusable components and work effectively with React state management and related tools.", icon: <DiSass /> },
  { id: "next", name: "Next.js", description: "Knowledge of Next.js for building modern and efficient web applications. Ability to optimize applications for speed and scalability, and experience with Vercel for continuous deployment.", icon: <SiNextdotjs /> },
  { id: "mysql", name: "MySQL", description: "Managing relational databases. Experience in writing efficient SQL queries, performance optimization, and integrating back-end data into web applications.", icon: <DiMysql /> },
]

const StacksContainer = () => {
  return ( 
    <section className="stacks-container">
      <h2>Stacks</h2>
      <div className="stacks-grid">
        {mystacks.map((stack) => (
          <div className="stacks-card" id={stack.id} key={stack.id}>
            <div className="stacks-info">
              <div className="ticon">
                <h3>{stack.name}</h3>
                {stack.icon}
              </div>
              <p>{stack.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StacksContainer;
  
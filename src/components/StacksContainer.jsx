import { SiNextdotjs } from "react-icons/si"
import { 
  DiJsBadge, DiNodejsSmall, DiReact, DiSass, DiMysql, DiPython} from "react-icons/di";

import { LanguageContext } from "../contexts/LanguageContext";
import { useContext } from "react";
import data from "../data/data.json"

import "../styles/components/stackscontainer.sass";

const StacksContainer = () => {
  const { language } = useContext(LanguageContext);
  
  const mystacks = [
    { id: "js", name: "JavaScript", description: language === 'english' ? data['stacks-description-js-PT'] : data['stacks-description-js-EN'], icon: <DiJsBadge /> },
    { id: "node", name: "Node.js", description: language === 'english' ? data['stacks-description-node-PT'] : data['stacks-description-node-EN'], icon: <DiNodejsSmall /> },
    { id: "react", name: "React.js", description: language === 'english' ? data['stacks-description-react-PT'] : data['stacks-description-react-EN'], icon: <DiReact /> },
    { id: "sass", name: "SASS", description: language === 'english' ? data['stacks-description-sass-PT'] : data['stacks-description-sass-EN'], icon: <DiSass /> },
    { id: "next", name: "Next.js", description: language === 'english' ? data['stacks-description-next-PT'] : data['stacks-description-next-EN'], icon: <SiNextdotjs /> },
    { id: "mysql", name: "MySQL", description: language === 'english' ? data['stacks-description-mysql-PT'] : data['stacks-description-mysql-EN'], icon: <DiMysql /> },
    { id: "python", name: "Python", description: language === 'english' ? data['stacks-description-python-PT'] : data['stacks-description-python-EN'], icon: <DiPython /> },
  ];

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
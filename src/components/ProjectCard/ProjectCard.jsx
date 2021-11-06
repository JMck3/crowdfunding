// import React from "react";
// import { Link } from "react-router-dom";
// import "./ProjectCard.css";

// function ProjectCard(props) {
//   const { projectData } = props;
//   return (
//     <div className="maincontainer">
//       <div className="thecard">
//         <div className="thefront">
//           <Link to={`/project/${projectData.id}`}>
//             <img alt="projectData" src={projectData.image} />
//           </Link>
//         </div>
//         <div className="maincontainer">
//           <div className="thecard">
//             <div className="theback">
//               onClick{" "}
//               <Link to={`/project/${projectData.id}`}>
//                 <h3>{projectData.title}</h3>
//                 <p>{projectData.description}</p>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProjectCard;

import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

const ProjectCard = (props) => {
  const { projectData } = props;
  return (
    <div className="project-card">
      <Link to={`/project/${projectData.id}`}>
        <img alt="projectData" src={projectData.image} />
        <h3>{projectData.title}</h3>
      </Link>
    </div>
  );
};

export default ProjectCard;

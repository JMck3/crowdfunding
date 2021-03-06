// import React, { useState, useEffect } from "react";
// import ProjectCard from "../components/ProjectCard/ProjectCard";

// function HomePage() {
//     const [projectList, setProjectList] = useState([]);

//     // console.log(process.env)

//     useEffect(() => {
//         fetch(`${process.env.REACT_APP_API_URL}projects`)
//         .then((results) => {
//             // console.log(results)
//             return results.json();
//         })
//         .then((data) => {
//             // console.log(data)
//             setProjectList(data);
//         });
//     }, []);

//     return (
//     <div id="project-list">
//     {projectList.map((projectData, key) => {
//     return <ProjectCard key={key} projectData={projectData}/>;
//     })}
//     </div>
//     );
// }

// export default HomePage;

import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";

// These are our components
import ProjectCard from "../components/ProjectCard/ProjectCard";

// export default App;

const HomePage = () => {
  const [projectList, setProjectList] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}projects`)
      .then((results) => {
        if (results.status === 404) {
          history.push("/error");
        }
        return results.json();
      })
      .then((data) => {
        setProjectList(data);
      });
  }, []);

  const [name, setName] = useState("");

  const createProject = async (e) => {
    e.preventDefault();
    const project = {
      title: name,
      dare_description: "Eat 100 Donuts",
      rules: "No cheating",
      goal: 100,
      image:
        "https://img.taste.com.au/woHAgdO6/w720-h480-cfill-q80/taste/2016/11/cinnamon-donuts-15520-1.jpeg",
      is_open: true,
      created_at: new Date(),
      updated_at: new Date(),
      date_for_dare: new Date(),
      for_charity: "Tanda",
      charity_url: "https://my.tanda.co",
    };

    await fetch(`${process.env.REACT_APP_API_URL}projects/`, {
      method: "post",
      headers: {
        Authorization: `Token ${window.localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    });
  };

  const token = window.localStorage.getItem("token");
  return (
    <div>
      {token ? (
        <div>
          <h2> Welcome! You are Logged in!</h2>
        </div>
      ) : null}
      <div id="project-list">
        {projectList.map((project, key) => {
          return (
            <div key={key}>
              <ProjectCard projectData={project} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;

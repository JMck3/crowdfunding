import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard/ProjectCard";

function HomePage() {
    const [projectList, setProjectList] = useState([]);

    // console.log(process.env)

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects`)
        .then((results) => {
            // console.log(results)
            return results.json();
        })
        .then((data) => {
            // console.log(data)
            setProjectList(data);
        });
    }, []); 

    return (
    <div id="project-list">
    {projectList.map((projectData, key) => {
    return <ProjectCard key={key} projectData={projectData}/>;
    })}
    </div>
    );
}

export default HomePage;
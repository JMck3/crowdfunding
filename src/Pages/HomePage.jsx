import React, { useState, useEffect } from "react";
import { allProjects } from "../data.js";
import ProjectCard from "../components/ProjectCard/ProjectCard";

function HomePage() {
    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
        setProjectList(allProjects);
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
import React from "react";
import { allProjects } from "../data.js";
import ProjectCard from "../components/ProjectCard/ProjectCard";

function HomePage() {
    return (
    <div id="project-list">
    {allProjects.map((projectData, key) => {
    return <ProjectCard key={key} projectData={projectData}/>;
    })}
    </div>
    );
}

export default HomePage;
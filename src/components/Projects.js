// create a projects page for a developer

import React from "react";
import projectList from "../assets/projects.js";

export default function Projects() {
    return (
        <section id="projects">
        <h2>Projects</h2>
        <div>
            {projectList.map((project) => (
            <div key={project.name}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <p>
                <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub
                </a>
                {project.deployed && (
                    <a href={project.deployed} target="_blank" rel="noreferrer">
                    Deployed
                    </a>
                )}
                </p>
            </div>
            ))}
        </div>
        </section>
    );
    }
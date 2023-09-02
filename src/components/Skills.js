// create a skills page for a developer
// use icons for each language or skill the developer has

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHtml5,
    faCss3Alt,
    faJsSquare,
    faReact,
    faNodeJs,
    faGitAlt,
    faGithub,
    faBootstrap,
    faNpm,
    faYarn,
    faSass,
    faPython,
    faJs
} from "@fortawesome/free-brands-svg-icons";

export default function Skills() {
    return (
        <section id="skills">
            <h2>Skills</h2>
            <div>
                <FontAwesomeIcon icon={faHtml5} size="3x" />
                <FontAwesomeIcon icon={faCss3Alt} size="3x" />
                <FontAwesomeIcon icon={faJsSquare} size="3x" />
                <FontAwesomeIcon icon={faReact} size="3x" />
                <FontAwesomeIcon icon={faNodeJs} size="3x" />
                <FontAwesomeIcon icon={faGitAlt} size="3x" />
                <FontAwesomeIcon icon={faGithub} size="3x" />
                <FontAwesomeIcon icon={faBootstrap} size="3x" />
                <FontAwesomeIcon icon={faNpm} size="3x" />
                <FontAwesomeIcon icon={faYarn} size="3x" />
                <FontAwesomeIcon icon={faSass} size="3x" />
                <FontAwesomeIcon icon={faPython} size="3x" />
                <FontAwesomeIcon icon={faJs} size="3x" />
            </div>
        </section>
    );
}
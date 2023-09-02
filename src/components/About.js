// create a basic about page for a developer
// import React
// import the image of the developer
// import the resume of the developer
// export a function called About

import React from "react";
import resume from "../assets/resume.pdf";
import profilePic from "../assets/profile-pic.png";

export default function About() {
    return (
        <section id="about">
        <h2>About Me</h2>
        <img width="50px" src={profilePic} alt="profile" />
        <p>
            I am a full stack developer with a background in education and
            non-profits. I am passionate about creating applications that are
            accessible to all users. I am currently working on a project that
            provides a platform for students to share their work with their
            community.
        </p>
        <a href={resume} target="_blank" rel="noreferrer">
            Resume
        </a>
        </section>
    );
    }
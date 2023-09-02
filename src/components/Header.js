// create a responsive header that hamburgers after 350px

import React from "react";
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link as ScrollLink } from 'react-scroll';

export default function Header() {
  const isMobile = useMediaQuery({ query: "(max-width: 350px)" });
  // return a navbar that is hamburger on mobile and lists all links to sections
  // make it scroll to the section when clicked
  return (
    <header>
      <h1>Developer Portfolio</h1>
      {isMobile ? (
        <FontAwesomeIcon icon={faBars} size="2x" />
      ) : (
        <nav>
            <ul>
                <li>
                    <ScrollLink to="about" smooth={true} duration={500}>
                        About
                    </ScrollLink>
                </li>
                <li>
                    <ScrollLink to="projects" smooth={true} duration={500}>
                        Projects
                    </ScrollLink>
                </li>
                <li>
                    <ScrollLink to="skills" smooth={true} duration={500}>
                        Skills
                    </ScrollLink>
                </li>
                <li>
                    <ScrollLink to="contact" smooth={true} duration={500}>
                        Contact
                    </ScrollLink>
                </li>
            </ul>
        </nav>
      )}
    </header>
  );
}

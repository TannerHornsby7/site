// create a contact me page for a developer
// include a contact form

import React from "react";

export default function Contact() {
    return (
        <section id="contact">
            <h2>Contact Me</h2>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" id="message" rows="5" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}
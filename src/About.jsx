
import { useState } from "react";

function About() {
    const [showMore, setShowMore] = useState(false);

    return (
        <section id="about" className="content-section">
            <p className="section-label">GET TO KNOW ME</p>

            <h2>About Me</h2>

            <p>
                I am a software developer with experience building
                mobile applications, web applications, and enterprise
                systems.
            </p>

            <p>
                I work with Flutter, React, and ASP.NET Core, and I am
                currently pursuing an MSc in Software Engineering.
            </p>

            {showMore && (
                <p>
                    I enjoy learning new technologies and developing
                    practical solutions to real-world problems.
                </p>
            )}

            <button
                className="show-more-button"
                onClick={() => setShowMore(!showMore)}
            >
                {showMore ? "Show Less" : "Show More"}
            </button>
        </section>
    );
}

export default About;

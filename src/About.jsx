
import { useState } from "react";

function About() {
    const [showMore, setShowMore] = useState(false);

    return (
        <section id="about" className="content-section">
            <p className="section-label">GET TO KNOW ME</p>

            <h2>About Me</h2>

            <div className="about-content">
                <div className="about-text">
                    <p>
                        With experience in software development and enterprise systems, my work spans web applications, mobile solutions, and business software. My technical background includes React, Flutter, and ASP.NET Core, with an interest in building scalable, maintainable, and user-friendly applications.
                    </p>

                    {/* <p>
                        I work with Flutter, React, and ASP.NET Core, and I am
                        currently pursuing an MSc in Software Engineering.
                    </p> */}

                    {showMore && (
                        <p>
                            Driven by curiosity and continuous improvement, I enjoy tackling technical challenges, translating requirements into effective solutions, and expanding my skills to keep pace with evolving technologies. Alongside my professional work, I am pursuing an MSc in Software Engineering to deepen my knowledge and strengthen my software engineering expertise.
                        </p>
                    )}

                    <button
                        className="show-more-button"
                        onClick={() => setShowMore(!showMore)}
                    >
                        {showMore ? "Show Less" : "Show More"}
                    </button>
                </div>
            </div>
        </section>
    );
}

export default About;

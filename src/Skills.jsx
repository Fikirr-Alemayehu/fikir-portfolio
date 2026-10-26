
const skills = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Flutter",
    "Dart",
    "C#",
    "ASP.NET Core",
    "SQL",
    "REST APIs",
    "Git",
    "GitHub"
];

function Skills() {
    return (
        <section id="skills" className="content-section">
            <p className="section-label">WHAT I WORK WITH</p>

            <h2>My Skills</h2>

            <div className="skills-grid">
                {skills.map((skill) => (
                    <div className="skill-item" key={skill}>
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;

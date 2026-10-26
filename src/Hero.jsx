function Hero() {
    return (
        <section id="home" className="hero">
            <p className="hero-greeting">Hello, I'm</p>
            <h1>Fikir Alemayehu</h1>
            <h2>Software Developer</h2>
            <p className="hero-description">
                I build web and mobile applications
                using React, Flutter, and ASP.NET Core.
                I'm also pursuing my MSc in Software Engineering.
            </p>
            <div className="hero-buttons">
                <a
                    href="https://www.linkedin.com/in/fikir-alemayehud"
                    className="hero-button"
                    target="_blank"
                    rel="noreferrer"
                >
                    Contact me
                </a>

                <a
                    className="cv-button"
                    href="/Fikir_Alemayehu_CV.pdf"
                    download
                >
                    Download My CV
                </a>
            </div>

        </section>
    )
}
export default Hero;
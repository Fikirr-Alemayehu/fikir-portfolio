function Hero() {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <div className="hero-text">
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
                </div>
                <div className="hero-image">
                    <div className="profile-image-container">
                        <img
                            src="/src/assets/profile.jpg"
                            alt="Fikir Alemayehu"
                            className="profile-image"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.parentElement.style.background = 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)';
                                e.target.parentElement.innerHTML = '<div class="profile-placeholder">FA</div>';
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero;
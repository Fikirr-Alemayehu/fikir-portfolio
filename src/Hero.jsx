import { useState, useEffect } from "react";
import { useMagnetic } from "./useMagnetic";
import profileImage from "./assets/profile.png";

function Hero() {
    const [typedText, setTypedText] = useState("");
    const fullText = "Software Developer";
    const button1 = useMagnetic();
    const button2 = useMagnetic();

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index < fullText.length) {
                setTypedText(fullText.slice(0, index + 1));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 100);

        return () => clearInterval(timer);
    }, []);

    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <p className="hero-greeting">Hello, I'm</p>
                    <h1>Fikir Alemayehu</h1>
                    <h2>{typedText}<span className="cursor">|</span></h2>
                    <p className="hero-description">
                        Software Developer building modern web and mobile applications with React, Flutter, and ASP.NET Core. Currently pursuing an MSc in Software Engineering, with a focus on creating practical, user-centered software solutions.                    </p>
                    <div className="hero-buttons">
                        <a
                            ref={button1.ref}
                            style={button1.style}
                            href="https://www.linkedin.com/in/fikir-alemayehud"
                            className="hero-button magnetic-button"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Contact me
                        </a>

                        <a
                            ref={button2.ref}
                            style={button2.style}
                            className="cv-button magnetic-button"
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
                            src={profileImage}
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
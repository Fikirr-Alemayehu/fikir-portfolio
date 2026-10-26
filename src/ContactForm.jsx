
import { useState } from "react";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const [errorMessage, setErrorMessage] = useState("");

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value,
        });

        setSubmitted(false);
    }


    async function handleSubmit(event) {
        event.preventDefault();
        setSubmitted(false);
        setErrorMessage("");

        try {
            const response = await fetch(
                "https://formspree.io/f/mnpjzybb",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            const result = await response.json();

            if (response.ok) {
                setSubmitted(true);
                setFormData({
                    name: "",
                    email: "",
                    message: "",
                });
            } else {
                console.error("Formspree error:", result);

                setErrorMessage(
                    result.errors
                        ?.map((error) => error.message)
                        .join(", ") ||
                    "The service rejected the submission."
                );
            }
        } catch (error) {
            console.error("Network error:", error);

            setErrorMessage(
                "Could not connect. Check your internet and try again."
            );
        }
    }


    return (
        <section id="contact" className="content-section">
            <p className="section-label">LET'S CONNECT</p>
            <h2>Contact Me</h2>

            <form className="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Your Name</label>
                <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                />

                <label htmlFor="email">Your Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                />

                <label htmlFor="message">Your Message</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Write your message"
                />

                <button type="submit">Submit Message</button>
            </form>

            {submitted && (
                <p className="form-success">
                    Thank you! Your message was sent successfully.
                </p>
            )}

            {errorMessage && (
                <p className="form-error">
                    {errorMessage}
                </p>
            )}
        </section>
    );
}

export default ContactForm;

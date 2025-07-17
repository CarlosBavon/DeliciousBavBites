import '../components/contact.css'
import React, { useState } from "react";

function Contact () {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert("Message sent! We'll get back to you soon.")
        setFormData({ name: "", email: "", message: ""})
    }

    return (
        <div className='contact-page'>
            <h1>Contact Us</h1>
            <p>We’d love to hear from you! Reach out for feedback, questions, or just to say hi.</p>

            <form className='contact-form' onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type='text' name='name' required value={formData.name} onChange={handleChange}></input>
                </label>

                <label>
                    Email:
                    <input type="email" name="email" required value={formData.email} onChange={handleChange} />
                </label>

                <label>
                    Message:
                    <textarea name="message" required value={formData.message} onChange={handleChange} />
                </label>

                <button type='submit'>Send Message</button>
            </form>

            <div className="contact-info">
                <h2>Restaurant Info</h2>
                <p>📍 33 Bite Street, Foodville</p>
                <p>📞 +254 799 657 824</p>
                <p>📧 deliciousbavbites@gmail.com</p>
            </div>

        </div>
    )
}

export default Contact
import React, { useState } from "react";
import "../components/reservation.css";

function Reservation () {
    const [formData, setFormData] = useState({
        name: "",
        date: "",
        time: "",
        guests: 1,
        contact: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert("Reservation submitted! We'll contact you shortly.")
        setFormData({ name: "", date: "", time: "", guests: 1, contact: ""})
    }

    return (
        <div className="reservation-page">
            <h1>Reserve a Table</h1>
            <p>Book your spot today and enjoy an unforgettable meal with us.</p>
            <form className="reservation-form" onSubmit={handleSubmit}>
                <label>
                    Full Name:
                    <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Date:
                    <input
                        type="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Time:
                    <input
                        type="time"
                        name="time"
                        required
                        value={formData.time}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Number of Guests:
                    <input
                        type="number"
                        name="guests"
                        min="1"
                        required
                        value={formData.guests}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Contact Info (Phone or Email):
                    <input
                        type="text"
                        name="contact"
                        required
                        value={formData.contact}
                        onChange={handleChange}
                    />
                </label>

                <button type="submit">Book Now</button>

            </form>
        </div>
    )
}

export default Reservation
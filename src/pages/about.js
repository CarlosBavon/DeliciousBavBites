import '../components/about.css'
import React, { useEffect, useState } from "react";
import AboutChef from '../assets/about-chef.jpg'

function About () {
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState({ text: "", author: "" });

    useEffect(() => {
        fetch("/reviews.json")
        .then((res) => res.json())
        .then((data) => setReviews(data))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        setReviews([...reviews, newReview]);
        setNewReview({ text: "", author: "" });
    };

    return (
        <div className='about-page'>
            <div className='about-hero'>
                <h1>About Us</h1>
                <p>At Delicious Bav Bites, every meal is a memory.</p>
            </div>

            <section className='about-section'>
                <div className='about-text'>
                    <h2>Our Story</h2>
                    <p>
                        Born from a passion for bold flavors and authentic dishes,
                        Delicious Bav Bites is your go-to spot for handcrafted meals made
                        with love. We believe in fresh ingredients, warm service, and
                        unforgettable taste.
                    </p>

                    <h2>Our Values</h2>
                    <ul>
                        <li>🍴 Fresh, locally-sourced ingredients</li>
                        <li>⏱ Fast & friendly service</li>
                        <li>❤️ Food that brings people together</li>
                    </ul>
                </div>

                <div className='about-image'>
                    <img src={AboutChef} alt='Our Chef'/>
                </div>
                
            </section>

            <section className="testimonials">
                <h2>What Our Customers Say</h2>
                <div className="testimonial-cards">
                    {reviews.map((review, index) => (
                    <div className="testimonial" key={index}>
                        <p>"{review.text}"</p>
                        <span>— {review.author}.</span>
                    </div>
                    ))}
                </div>
            </section>

            <section className="submit-review">
                <h2>Leave a Review</h2>
                <form onSubmit={handleSubmit} className="review-form">
                    <textarea
                        value={newReview.text}
                        onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                        placeholder="Write your review..."
                        required
                    />
                    <input
                        type="text"
                        value={newReview.author}
                        onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
                        placeholder="Your name"
                        required
                    />
                    <button type="submit">Submit</button>
                </form>
            </section>

        </div> 
    )
}

export default About
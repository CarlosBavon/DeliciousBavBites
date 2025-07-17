import '../components/home.css'

function Home () {
    return (
        <div className="home-page">
            <section className="hero">
                <div className="hero-content">
                    <h1>Welcome to Delicious Bav Bites</h1>
                    <p>Where every bite is bursting with flavor!</p>
                    <a href="/menu" className="hero-button">Explore Our Menu</a>
                </div>
            </section>

            <section className="features">
                <div className="feature">
                    <h3>🍽️ Fresh Ingredients</h3>
                    <p>Locally sourced produce and top-quality meats every day.</p>
                </div>
                <div className="feature">
                    <h3>⏱️ Quick Service</h3>
                    <p>Get your food fast without sacrificing quality or taste.</p>
                </div>
                <div className="feature">
                    <h3>👨‍🍳 Passionate Chefs</h3>
                    <p>Crafted with love by culinary experts who care.</p>
                </div>
            </section>
        </div>
    )
}

export default Home
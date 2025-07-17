import '../components/menu.css'
import SpicyWings from '../assets/spicy-wings.jpg'
import GarlicBread from '../assets/garlic-bread.jpg'
import Burger from '../assets/burger.jpg'
import GrilledChicken from '../assets/grilled-chicken.jpg'
import LavaCake from '../assets/lava-cake.jpg'
import IceCream from '../assets/ice-cream.jpg'
import { useState } from 'react'

function Menu ({ addToCart }) {
    const [quantities, setQuantities] = useState({})

    const handleChange = (itemName, amount) => {
        setQuantities((prev) => ({
            ...prev,
            [itemName]: (prev[itemName] || 0) + amount
        }))
    }

    const menuItems = [
        {
            category: "Starters",
            items: [
                {
                    name: "Spicy Wings",
                    price: 600,
                    desc: "Crispy wings with tangy sauce.",
                    image: SpicyWings
                },
                {
                    name: "Garlic Bread",
                    price: 400,
                    desc: "Toasted bread with herbed garlic butter.",
                    image: GarlicBread
                }
            ]
        },
        {
            category: "Main Dishes",
            items: [
                {
                    name: "Bav Bites Burger",
                    price: 499,
                    desc: "Beef patty with signature sauce.",
                    image: Burger
                },
                {
                    name: "Grilled Chicken",
                    price: 800,
                    desc: "Served with lemon herb rice.",
                    image: GrilledChicken
                }
            ]
        },
        {
            category: "Desserts",
            items: [
                {
                    name: "Chocolate Lava Cake",
                    price: 500,
                    desc: "Warm cake with molen center.",
                    image: LavaCake
                },
                {
                    name: "Vanilla Ice Cream",
                    price: 300,
                    desc: "Classic scoop of creamy vanilla.",
                    image: IceCream
                }
            ]
        }
    ]
    return (
        <div className='menu-page'>
            <h1>Our Menu</h1>
            {menuItems.map((section, index) => (
                <div className='menu-section' key={index}>
                    <h2>{section.category}</h2>
                    <ul>
                        {section.items.map((item, idx) => (
                            <li key={idx} className='li'>
                                <div className='menu-item'>
                                    <div className="menu-item-content">
                                        <img src={item.image} alt={item.name} className="menu-image" />
                                        <div>
                                            <strong>{item.name}</strong> <span className="price"><em>KES</em> {item.price}.</span>
                                            <p>{item.desc}</p>
                                            <div className='quantity-controls'>
                                                <button onClick={() => handleChange(item.name, -1)} disabled={(quantities[item.name] || 0) <= 0}>-</button>
                                                <button onClick={() => handleChange(item.name, 1)}>+</button>
                                            </div>
                                            <button className='add-to-cart' onClick={() => addToCart(item)}>Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default Menu
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import '../Home/Home.css'
import Cart from '../Cart/Cart';

const Home = () => {
    const tshirt = useLoaderData()
    const [cart, setCart] = useState([]);

    const handleAddToCart = tshirt => {
        console.log(tshirt)
    }
    return (
        <div className='home-container'>
            <div className='t-shirts-container'>
                {
                    tshirt.map(tshirt => <Tshirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    ></Tshirt>)
                }
            </div>

            <div className="cart-container">
                <Cart></Cart>
            </div>
            </div>
    );
};

export default Home;
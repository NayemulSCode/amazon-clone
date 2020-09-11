import React from 'react';
import "./Home.css"
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img 
                className="home__image" 
                src="https://www.amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Currency_v2_en_US_2x._CB428993290_.jpg" 
                alt=""
            />
            {/* product id, title,price,rating,image */}
            <div className="home__row">
                <Product 
                    id="12"
                    title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses Kindle Edition"
                    rating={5}
                    price={45.55}
                    image="https://www.amazon.com/images/I/51N-u8AsmdL.jpg"
                />
                <Product 
                    id="13"
                    title="Aucma Stand Mixer,6.5-QT 660W 6-Speed Tilt-Head Food Mixer, Kitchen Electric Mixer with Dough Hook, Wire Whip & Beater (6.5QT, Champagne)"
                    rating={5}
                    price={45.55}
                    image="https://www.amazon.com/images/I/61ie0JOVmtL._AC_UY218_.jpg"
                />
            </div>
            <div className="home__row">
                <Product 
                    id="14"
                    title="DSYTOM Compatible for Galaxy Watch Active 2 Band 44mm with Screen Protective Case Cover, 20mm Stainless Steel Strap Replacement for Samsung Galaxy Active2 (44mm,Black)"
                    rating={5}
                    price={45.55}
                    image="https://www.amazon.com/images/I/61D5lwlQYTL._AC_UL320_.jpg"
                />
                <Product 
                    id="15"
                    title="Echo (3rd Gen) - Smart speaker with Alexa - Twilight Blue"
                    rating={5}
                    price={45.55}
                    image="https://www.amazon.com/images/I/610ogi5eeoL._AC_UL320_.jpg"
                />
                <Product 
                    id="16"
                    title="Dragon Touch Notepad K10 Tablet, 10 inch Android Tablet, 2GB RAM 32GB Storage, Quad-Core Processor, 10.1 IPS HD Display, Micro HDMI, Android 9.0 Pie, 5G WiFi, Metal Body Black"
                    rating={5}
                    price={45.55}
                    image="https://www.amazon.com/images/I/71pV+2tCO-L._AC_UY218_.jpg"
                />
            </div>
            <div className="home__row">
                <Product 
                    id="17"
                    title="SAMSUNG QN32Q50RAFXZA Flat 32 QLED 4K 32Q50 Series Smart TV"
                    rating={5}
                    price={45.55}
                    image="https://www.amazon.com/images/I/51NKhnjhpGL._AC_UY218_.jpg"
                />
            </div>
            
        </div>
    );
}

export default Home;

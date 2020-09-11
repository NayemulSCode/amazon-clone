import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{ basket, user }] = useStateValue();
    console.log(basket);
    const login = () =>{
        if(user){
            auth.signOut();
        }
    };
    return <nav className="header">
            {/* logo */}
        <Link to="/">
            <img 
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
            alt=""
            />
        </Link>
         {/* search box */}
        <div className="header__search">
            <input type="text" className="header_searchInput" />
            <SearchIcon className="header__searchIcon" />
        </div>
        
        {/* busket icon with number */}
        <div className="header__nav">
            {/* 1st link */}
            <Link to={!user && "/login"} className="header__link">
                <div onClick={login} className="header__option">
                    <span className="header__optionlineOne">Hello{user?.email}</span>
                    <span className="header__optionlineTwo">{ user? 'Sign Out' : 'Sign in' }</span>
                </div>
            </Link>
            {/* 2nd link */}
            <Link to="/" className="header__link">
                <div className="header__option">
                    <span className="header__optionlineOne">Returns</span>
                    <span className="header__optionlineTwo">& Orders</span>
                </div>
            </Link>
            {/* 3rd link */}
            <Link to="/" className="header__link">
                <div className="header__option">
                    <span className="header__optionlineOne">Your</span>
                    <span className="header__optionlineTwo">Prime</span>
                </div>
            </Link>
            {/* 4th link  basket code start*/}
            <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                    {/* shopping basket icon */}
                    <ShoppingBasketIcon />
                    {/* Number of items in the basket */}
                    <span className="header__optionlineTwo header__basketCount">
                        { basket?.length }
                        </span>
                </div>
            </Link>
            {/* 4th link  basket code end*/}
        </div>
    </nav>
    
}

export default Header

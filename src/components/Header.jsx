import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import "../css/header.css";
import amazonLogo from "../images/amazonLogo.png";
import { NavLink } from 'react-router-dom';
import { useStateValue } from "./StateProvider";
import { auth } from '../firebase';

const Header = () => {
   // eslint-disable-next-line
   const [{ basket, user }, dispatch] = useStateValue();

   const handleAuthentication = () => {
      if (user) {
         auth.signOut();
      }
   }

   return (
      <div className="header">
         <NavLink to="/">
            <img className="header_logo" src={amazonLogo} alt="amazonlogo" />
         </NavLink>

         <div className="header_search">
            <input className="header_searchInput" type="text" />
            <SearchIcon className="header_searchIcon" />
         </div>
         <div className="header_nav">
            <NavLink to={!user && "/login"}>
               <div onClick={handleAuthentication} className="header_option">
                  <span className="header_optionLineOne">Hello {!user ? 'Guest' : user?.email}</span>
                  <span className="header_optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
               </div>
            </NavLink>
            <NavLink to={"/orders"}>
               <div className="header_option">
                  <span className="header_optionLineOne">Returns</span>
                  <span className="header_optionLineTwo">& Orders</span>
               </div>
            </NavLink>
            <div className="header_option">
               <span className="header_optionLineOne">Your</span>
               <span className="header_optionLineTwo">Prime</span>
            </div>
            <NavLink to="/checkout">
               <div className="header_option header_optionBasket">
                  <span className="header_optionLineTwo header_BasketCount">{basket?.length}</span>
                  <ShoppingCartIcon />
                  <span className="header_basketLabel">Cart</span>
               </div>
            </NavLink>

         </div>
      </div>
   )
}

export default Header;

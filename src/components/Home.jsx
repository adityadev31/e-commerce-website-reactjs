import React from 'react';
import banner from "../images/home_banner.jpg";
import "../css/home.css";
import Product from "./Product";
import product1 from "../images/product1.jpg";
import product2 from "../images/product2.jpg";
import product3 from "../images/product3.jpg";
import product4 from "../images/product4.jpg";
import product5 from "../images/product5.jpg";
import product6 from "../images/product6.jpg";

const Home = () => {
   return (
      <div className="home">
         <div className="home_container">
            <img className="home_image" src={banner} alt="banner"/>
            <div className="home_row">
               <Product
               id = "12321341"
               title = "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
               price = {11.96}
               rating = {5}
               image = {product1}
               />
               <Product 
               id = "49538094"
               title = "Kenwood kMix stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
               price = {239.0}
               rating = {4}
               image = {product2}
               />
            </div>
            <div className="home_row">
               <Product 
               id = "4983850"
               title = "Samsung LC49RG90SSUXEN 32' Curved LED Gaming Monitor"
               price = {199.99}
               rating = {3}
               image = {product3}
               />
               <Product 
               id = "23445930"
               title = "Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
               price = {98.99}
               rating = {5}
               image = {product4}
               />
               <Product 
               id = "3254354345"
               title = "New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
               price = {598.99}
               rating = {4}
               image = {product5}
               />
            </div>
            <div className="home_row">
               <Product 
               id = "98829332"
               title = "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 X 1440"
               price = {1094.98}
               rating = {4}
               image = {product6}/>
            </div>
         </div>
      </div>
   )
}

export default Home;

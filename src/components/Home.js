// Home.js

import React from 'react';
import { Link } from "react-router-dom";
import decor from '../styles/home.module.css'; // Import CSS module

const Home = () => {
  return (
    <div>
      <header id='home' className={decor.header}>
        <div className={decor.container}>
          <nav>
            <div className={decor.logo}>
              <img src="apollo-pharmacy-logo.png" alt="MediMent Pharmacy Logo" />
            </div>
            <ul className={decor['nav-links']}>
              <li><Link href="#home">Home</Link></li>
              <li><Link href="#about">About Us</Link></li>
              <li><Link href="#products">Products</Link></li>
              <li><Link href="#health_tips">Health Tips</Link></li>
              <li><Link href="#store_locator">Store Locator</Link></li>
              <li><Link href="#contact_us">Contact Us</Link></li>
            </ul>
            <div>
              <Link to="/login" className={decor['cta-btn']}>Login</Link>
              <Link to="/register" className={decor['cta-btn']}>Register</Link>
            </div>
          </nav>
        </div>  
      </header>
      <hr />
      <section className={decor.hero}>
        <div className={decor.container}>
          <h1>Welcome to MediMent Pharmacy</h1>
          <p>Your trusted partner in health and wellness</p>
          <Link to="/login" className={decor['cta-btn']}>Login Now</Link>
        </div>
      </section>
      <hr />
      <section className={decor['about-section']} id='about'>
        <div className={decor.container}>
          <h2>About Us</h2>
          <p>MediMent Pharmacy is committed to providing high-quality healthcare products and services to our customers. With a focus on innovation and customer satisfaction, we aim to improve the health and well-being of individuals and communities.</p>
          <div className={decor.timeline}>
            <div className={decor['timeline-item']}>
              <span className={decor.year}>2000</span>
              <p>Founded MediMent Pharmacy</p>
            </div>
            <div className={decor['timeline-item']}>
              <span className={decor.year}>2010</span>
              <p>Expanded to multiple locations nationwide</p>
            </div>
            <div className={decor['timeline-item']}>
              <span className={decor.year}>2020</span>
              <p>Introduced online shopping platform</p>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section className={decor['featured-section']} id='products'>
        <div className={decor.container}>
          <h2>Featured Products</h2>
          <div className={decor.products}>
            <div className={decor.product}>
              <img src="product1.jpg" alt="Product 1" />
              <h3>Product 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <span className={decor.price}>$19.99</span>
            </div>
            <div className={decor.product}>
              <img src="product2.jpg" alt="Product 2" />
              <h3>Product 2</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <span className={decor.price}>$29.99</span>
            </div>
            <div className={decor.product}>
              <img src="product3.jpg" alt="Product 3" />
              <h3>Product 3</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <span className={decor.price}>$39.99</span>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section className={decor['blog-section']} id='health_tips'>
        <div className={decor.container}>
          <h2>Health Tips & Articles</h2>
          <div className={decor.articles}>
            <div className={decor.article}>
              <img src="article1.jpg" alt="Article 1" />
              <h3>7 Tips for a Healthy Lifestyle</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed nisi ut enim vestibulum...</p>
              <Link href="#" className={decor['read-more']}>Read More</Link>
            </div>
            <div className={decor.article}>
              <img src="article2.jpg" alt="Article 2" />
              <h3>Benefits of Regular Exercise</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed nisi ut enim vestibulum...</p>
              <Link href="#" className={decor['read-more']}>Read More</Link>
            </div>
            <div className={decor.article}>
              <img src="article3.jpg" alt="Article 3" />
              <h3>Healthy Eating Habits</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed nisi ut enim vestibulum...</p>
              <Link href="#" className={decor['read-more']}>Read More</Link>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section className={decor['store-locator']} id='store_locator'>
        <div className={decor.container}>
          <h2>Find a Store Near You</h2>
          <div className={decor.map}>
            {/* Google Maps or other map service embed code would go here */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99210.60652012693!2d-122.41941555040117!3d37.77492950149049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1610421877327!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
          </div>
        </div>
      </section>
      <hr />
      <section className={decor['contact-section']} id='contact_us'>
        <div className={decor.container}>
          <h2>Contact Us</h2>
          <div className={decor['contact-info']}>
            <div className={decor.info}>
              <h3>Phone</h3>
              <p>+1234567890</p>
            </div>
            <div className={decor.info}>
              <h3>Email</h3>
              <p>info@mediment.com</p>
            </div>
            <div className={decor.info}>
              <h3>Address</h3>
              <p>123 Main Street, City, Country</p>
            </div>
          </div>
          <form className={decor['contact-form']}>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
      <hr />
      <footer className={decor.footer}>
        <div className={decor.container}>
          <div className={decor['footer-links']}>
            <ul>
              <li><Link href="#">Home</Link></li>
              <li><Link href="#">About Us</Link></li>
              <li><Link href="#">Products</Link></li>
              <li><Link href="#">Health Tips</Link></li>
              <li><Link href="#">Store Locator</Link></li>
              <li><Link href="#">Contact Us</Link></li>
            </ul>
          </div>
          <div className={decor['legal-info']}>
            <p>&copy; 2024 MediMent Pharmacy. All rights reserved.</p>
            <p><Link href="#">Privacy Policy</Link> | <Link href="#">Terms of Service</Link></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;

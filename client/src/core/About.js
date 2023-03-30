import React from 'react';
import Layout from '../core/Layout';
import './About.css'

const Home = () => { 
    return ( 
    <Layout title="READR" description='Read more, live more'> 
    <div className="home-container"> 
        <p className="home-paragraph">Welcome to READR, the ultimate online destination for book lovers of all kinds. Whether you’re into romance, mystery, fantasy, sci-fi, or anything in between, we have the perfect book for you. And if you’re not sure what to read next, our smart and friendly recommendations will help you discover new books based on your preferences, mood, and reading history.</p> 
        <p className="home-paragraph">At READR, we believe that reading is more than just a hobby. It’s a way of life. That’s why we offer more than just books. We also have a vibrant community of readers who share their opinions, insights, and questions about the books they love. You can join book clubs, participate in discussions, write reviews, and even chat with your favorite authors.</p> 
        <p className="home-paragraph">But wait, there’s more. As a READR member, you also get access to exclusive deals, discounts, and rewards. You can earn points for every book you buy or read, and redeem them for free books, gift cards, or other goodies. You can also enjoy free shipping on orders over $25, free returns within 30 days, and unlimited reading with our READR Unlimited subscription.</p> 
        <p className="home-paragraph">So what are you waiting for? Join READR today and unleash your inner bookworm. You’ll never run out of books to read again. Happy reading!</p> 
    </div> 
    </Layout> ) };
export default Home

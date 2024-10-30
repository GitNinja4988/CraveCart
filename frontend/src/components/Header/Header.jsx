import React, { useEffect, useState } from 'react';
import './Header.css';

const quotes = [
    "Cravings so good, even your fridge will get jealous! 😄🥳",
    "Feeling hungry? Don’t worry; we deliver happiness on a platter! 🍕💖",
    "CraveCart: The only time you’ll be excited to ‘take out’! 😂🍔",
    "Why wait for a food coma? Dive right in with CraveCart! 🥳🍽️",
    "Warning: Our food may cause spontaneous happy dances! 💃🍣",
    "Pizza: The only love triangle you need in your life! 🍕❤️",
    "Happiness is just a bite away! 🥳🍰",
    "Food is the best friend that never judges! 🍔🤗",
    "Craving satisfaction? We’ve got you covered! 😋🥗",
    "Warning: May cause severe food envy! 🍟👀",
    "Our food is like a hug in a bowl! 🥘🤗",
    "Your taste buds called—they want a CraveCart adventure! 🌮🎉",
    "We take your cravings seriously, and we deliver! 🚚💨",
    "Because life’s too short for boring meals! 🥪😜",
    "Satisfy your cravings and fuel your happiness! 🥳🍔",
    "Dishing out smiles with every order! 😁🍽️",
    "Food: the best excuse to take a break! 🍝🛑",
    "Elevate your cravings to a whole new level! 🌟🍕",
    "When in doubt, order takeout! 😂🍛",
    "Cravings don’t stand a chance against our menu! 💪🍜",
    "Our food is so good, you might just become a regular! 🍩😉",
    "Every order is a party waiting to happen! 🎉🥡",
    "Satisfy your cravings, one bite at a time! 🍔🕺",
    "Bringing the feast to your doorstep! 🚪🍕",
    "Tasty food is a love language we all understand! ❤️🍲",
    "Why settle for ordinary when you can have extraordinary? 🌟🍽️",
    "When your stomach rumbles, we’ve got your back! 🍛💪",
    "Let your cravings run wild—CraveCart is here! 🌮🔥",
    "Good food, good mood—let's eat! 🥳🍜",
    "Join the CraveCart revolution for unbeatable flavor! 🌈🍕",
    "Life is too short for bad food—choose CraveCart! 🍔✌️",
    "Cravings are just a call away! 📞🍕",
    "Your taste buds deserve a treat—indulge today! 🎊🥗",
    "Crave it, love it, eat it! 💖🍽️"
];

const Header = () => {
    const [currentQuote, setCurrentQuote] = useState(quotes[0]);
    const [fadeOut, setFadeOut] = useState(false);
    const quoteChangeInterval = 5000; // Change quote every 8 seconds

    const randomQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    };

    useEffect(() => {
        const quoteInterval = setInterval(() => {
            setFadeOut(true); // Start fade-out effect
            setTimeout(() => {
                setCurrentQuote(randomQuote()); // Set a random quote
                setFadeOut(false); // Start fade-in effect
            }, 500); // Duration of fade-out
        }, quoteChangeInterval);

        return () => clearInterval(quoteInterval); // Cleanup interval on component unmount
    }, []);

    return (
        <div className='header'>
            <div className='header-contents'>
                <h2>
                    <span className={`header-word ${fadeOut ? 'fade-out' : 'fade-in'}`}>
                        {currentQuote}
                    </span>
                </h2>
                <p>
                    Choose from a variety of delicious dishes, ready to satisfy your cravings.
                </p>
            </div>
        </div>
    );
};

export default Header;

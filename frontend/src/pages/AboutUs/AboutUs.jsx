import React, { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll'; // Import Locomotive Scroll
import gsap from 'gsap'; // Import GSAP
import './AboutUs.css'; // Make sure your CSS file path is correct


const AboutUs = () => {
  useEffect(() => {
    // Initialize Locomotive Scroll
    const scroll = new LocomotiveScroll({
      el: document.querySelector('.main'),
      smooth: true,
    });

    // GSAP Animation Timeline
    const tl = gsap.timeline();

    tl.to('.page1', {
      y: '100vh',
      scale: 0.6,
      duration: 0,
    })
      .to('.page1', {
        y: '30vh',
        duration: 1,
        delay: 1,
      })
      .to('.page1', {
        y: '0vh',
        rotate: 360,
        scale: 1,
        duration: 0.7,
      });

    // Clean up Locomotive Scroll on component unmount
    return () => {
      scroll.destroy();
    };
  }, []);

  useEffect(() => {
    // Scrolling text animation for page5
    const container = document.querySelector('.page5');
    const scrollingText = container.querySelector('.scrolling-text');
    const containerWidth = container.offsetWidth;
    const textWidth = scrollingText.scrollWidth;

    const animate = () => {
      let startPos = containerWidth;

      const step = () => {
        startPos -= 1; // Adjust the value to control the speed
        if (startPos <= -textWidth) {
          startPos = containerWidth;
        }
        scrollingText.style.transform = `translateX(${startPos}px)`;
        requestAnimationFrame(step);
      };
      step();
    };

    animate();
  }, []);

  return (
    <div className="main">
      <div className="page1">
        <div className="nav">
          <h5>CarveCart</h5>
          <h2>About Us</h2>
          <i className="ri-menu-3-line"></i>
        </div>
        <div className="elems">
          <div className="elem1">
            <div className="image-div">
              <img
                src="https://t3.ftcdn.net/jpg/02/52/38/80/360_F_252388016_KjPnB9vglSCuUJAumCDNbmMzGdzPAucK.jpg"
                alt="CarveCart"
              />
            </div>
            <h4>
              CARVECART <span>NEW</span>
            </h4>
            <p>
              CarveCart is an innovative food delivery platform, built on the
              powerful MERN stack. Our app streamlines the process of ordering
              from a wide selection of restaurants, with a focus on providing a
              seamless user experience for food lovers everywhere.
            </p>
          </div>
          <div className="elem2">
            <h2>OUR TEAM</h2>
            <h3>
              Arya Joshi & Ananya Chitale
              <br />
              talented developers —
              <br />
              behind CarveCart.
            </h3>
            <h6>Tip! Drag sideways to navigate</h6>
          </div>
          <div className="elem3">
            <div className="image-div">
              <img
                src="https://www.asokart.com/wp-content/uploads/2019/01/6-Nataraja-600x805.jpg"
                alt="Visionaries"
              />
            </div>
            <h4>
              The visionaries behind CarveCart <span>NEW</span>
            </h4>
            <p>
              Arya and Ananya are the sole visionaries behind CarveCart, having
              designed and developed every core feature using cutting-edge
              technologies like React, MongoDB, Express, and Node.js. Their
              combined expertise has shaped the app into a seamless and
              intuitive platform for food delivery.
            </p>
          </div>
        </div>
        <h1>CraveCart.</h1>
      </div>

      <div className="page4">
        <div className="page4-left">
          <img
            src="https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/605c679f33f67d3dd00b04b4_avatar-3.jpeg"
            alt="Founders"
          />
        </div>
        <div className="page4-right">
          <p>
            CRAVECart is here to make your food delivery experience effortless
            and enjoyable. Offering a wide range of dishes from local favorites
            to gourmet meals, we prioritize quality and convenience in every
            order.
            <br />
            Founded by Ananya Chitale and Arya Joshi, CRAVECart is dedicated to
            bringing you exceptional service with just a few clicks. Enjoy
            delicious meals delivered straight to your door!
          </p>
        
        
        </div>
      </div>

      <div className="page5">
        <div className="scrolling-text">
          <h1>
            Let's create something together <span>Email Us</span>
          </h1>
          <h1>
            Let's create something together <span>Email Us</span>
          </h1>
          <h1>
            Let's create something together <span>Email Us</span>
          </h1>
          {/* Duplicate content to ensure continuous scrolling */}
          <h1>
            Let's create something together <span>Email Us</span>
          </h1>
          <h1>
            Let's create something together <span>Email Us</span>
          </h1>
          <h1>
            Let's create something together <span>Email Us</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

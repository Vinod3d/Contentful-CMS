import React from 'react'
import heroImg from './assets/hero.svg'

const Hero = () => {
  return (
    <section className='hero'>
        <div className="hero-center">
            <div className="hero-title">
                <h1>Contentful CMS</h1>
                <p>Code splitting is a technique used in web development to improve the performance and load times of a web application. It involves breaking down your application's JavaScript code into smaller chunks, which can be loaded on demand, as needed. The main goal of code splitting is to avoid loading all the JavaScript code upfront, which can result in slower initial page loads and increased time-to-interactivity. Since only the required code is loaded initially, the application's initial load time is significantly improved. Users can start interacting with the application sooner.</p>
            </div>
            <div className="img-container">
                <img src={heroImg} alt="Woman and the browser" className='img'/>
            </div>
        </div>
    </section>
  )
}

export default Hero

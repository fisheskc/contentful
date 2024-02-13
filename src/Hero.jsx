import React from 'react'

import heroImg from './assets/hero.svg'

const Hero = () => {
  return (
    <section className='hero'>
        <div className="hero-center">
            <div className="hero-title">
                <h1>Contentful CMS</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae eius facere maiores illum similique incidunt fugit iure necessitatibus atque saepe veritatis expedita ducimus aut, eos, quaerat excepturi temporibus quasi consequatur?</p>
            </div>
            <div className="img-cntainer">
                <img src={heroImg} alt="woman and the browser" className='img' />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae eius facere maiores illum similique incidunt fugit iure necessitatibus atque saepe veritatis expedita ducimus aut, eos, quaerat excepturi temporibus quasi consequatur?</p>
            </div>
        </div>
    </section>
  )
}

export default Hero
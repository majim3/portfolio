import React from 'react'
import 'animate.css'
import { useInView } from 'react-intersection-observer' 
import 'bootstrap/dist/css/bootstrap.min.css'
import './ImageComponent.css'

function ImageComponent({ src, title, text }) {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })
  
  return (
    <div  >
      <section ref={ref} className={`element ${inView ? 'animate__animated animate__fadeIn' : 'hidden'} `}>
        <div className='image-container half'>
          <img src={src} alt="image description"/>
        </div>
        <div className='text-container half'>
          <div >
            <h1 >{title}</h1>
            <p>{text}</p>
          </div>
        </div>
      </section>
    </div>

  )
}

export default ImageComponent


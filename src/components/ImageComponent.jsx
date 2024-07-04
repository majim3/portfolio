import React from 'react'
import 'animate.css'


function ImageComponent({ src, title, text }) {
  
  return (
    <div className='fullscreen'>
      <section className='animate__animated animate__fadeInLeftBig'>
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


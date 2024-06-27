import React from 'react'
import testimg from '../assets/testpic.jpg'
import 'animate.css'


function ImageComponent() {
  
  return (
    <section className='animate__animated animate__fadeInLeftBig'>
        <div className='image-container'>
          <img src={testimg} alt="image description"/>
        </div>
        <div className='text-container'>
          <h1>Great project</h1>
          <p>This is a project description</p>
        </div>
      </section>

  )
}

export default ImageComponent


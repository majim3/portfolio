import React from 'react'
import testimg from '../assets/testpic.jpg'
import 'animate.css'


function ImageComponent() {
  
  const img = 'https://media.istockphoto.com/photos/test-picture-id996396804?k=20&m=996396804&s=170667a&w=0&h=huj1Gbf6hCATkhOX8EIXekv9eBWZS8DT-RfSh2sIm-0='
  return (
    <div className='fullscreen'>
      <section className='animate__animated animate__fadeInLeftBig'>
        <div className='image-container half'>
          <img src={testimg} alt="image description"/>
        </div>
        <div className='text-container half'>
          <div >
            <h1 >Great project</h1>
            <p>This is a project description</p>
          </div>
        </div>
      </section>
    </div>

  )
}

export default ImageComponent


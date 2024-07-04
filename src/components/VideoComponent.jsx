import '../App.css'

function VideoComponent({src}) {

  return (

    <div>
      <section>
        <video className='video-container' autoPlay muted loop>
          <source src={src} type="video/mp4" /> 
          Your browser does not support the video tag
        </video>
      </section>
    </div>

  )
}

export default VideoComponent

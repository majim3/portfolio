import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Col, Row } from 'react-bootstrap'
import './App.css'
import 'animate.css'
import Image from './components/ImageComponent'
import Image2 from './components/ImageComponent2'
import Video from './components/VideoComponent'
import fashionfinderMain from './assets/Fashionfinder/fahsionfinder-main.png'
import fashionfinderTest from './assets/Fashionfinder/fashionfinder_test.png'
import fashionfinder from './assets/Fashionfinder/Fashionfinder.png'
import fashionfinderScan from './assets/Fashionfinder/fashionfinder_scan.png'

import firstevView from './assets/EVcharger/firstview.png'
import secondevView from './assets/EVcharger/secondview.png'
import thirdevView from './assets/EVcharger/thirdview.png'
import forthevView from './assets/EVcharger/forthview.png'
import video1 from './assets/EVcharger/evcharger.mp4'
import video2 from './assets/Fashionfinder/fashionfinder.mp4'
import Navbar from './components/Navbar.jsx'
import FirstScreenText from './components/firstscreentext.jsx'
import Contact from './components/contactscreen.jsx'
import { Container } from 'react-bootstrap'
import ResumeComp from './components/ResumeComp.jsx'

function App() {

  const [progress, setProgress] = useState(90);


  return (
    <>

      <Navbar />
        <Col >
          <Col name="HomeSection" className="pt-sm-5 pb-sm-5 mb-3  d-flex justify-content-center align-items-center ImageSection vh-100-xl" >
            <FirstScreenText />
          </Col>
          <Col name="ResumeSection" className='pt-4 mb-3 ImageSection '>
            <ResumeComp now={progress} />
          </Col>
          <Col name="KuvaSection">
            <Col className='ImageSection pt-5 justify-content-center align-items-center ' >
              <Image src={fashionfinderMain} src2={fashionfinderTest} src3={fashionfinder} src4={fashionfinderScan} Contributors={"Fashion Finder is a cloathing search application is made by 4 students as a school project for Metropolia School of Applied sciences. Fashion Finder is a application that is used to find cloathing with masking system call segment anything for users."}
                title={"Fashion Finder"} text={"Python Backend, React Frontend, Segment-Anything, Chatgpt/Bard"} ShadowBoxText1={"The application's main screen"} ShadowBoxTitle1={"Fashion Finder"}
                ShadowBoxText2={"The link for Clothing Results takes you to Zalando."} ShadowBoxTitle2={"Result"}
                ShadowBoxText3={"scan screen: From this area, you can Mask the clothing."} ShadowBoxTitle3={"Masking"} />
            </Col>
            <Col className="pt-5 pb-5">
              <Video src={video2} title={"Fashion Finder"} text={"Fashion Finder demo video"} />
            </Col>
            <Col className='ImageSection pt-5  justify-content-center align-items-center d-flex' >
              <Image2 src3={secondevView} src4={thirdevView}
                title={"EVChargeGX"} text={"Swift, Map api for the locations of the EV chargers"} Contributors={"EVChargeGX is a IOS application is made by 4 students as a school project for Metropolia School of Applied sciences. EvChargeGX is a application that is used to find electric vechile charging station near the user. The application is available in English and Finnish."}
                ShadowBoxText2={"MapView that is implemented using mapkit. The markers on the map are charging stations. The searchbar can be used using keyboard or voice and it can be used to check chargers in different parts of the world."} ShadowBoxTitle2={"Main View"}
                ShadowBoxText3={"In the sheet we can check informations about the station. Also there is button that can be used to navigate to the station using IOS maps."} ShadowBoxTitle3={"Sheet"} />
            </Col>
            <Col className="pt-5 pb-5">
              <Video src={video1} title={"EVChargeGX"} text={"EVChargeGX demo video"} />
            </Col>
          </Col>
          <Col name="ContactSection" className="justify-content-center align-items-center d-flex   vh-100-xl contact-section">
            <Contact />
          </Col>
        </Col>
      

    </>
  )
}

export default App

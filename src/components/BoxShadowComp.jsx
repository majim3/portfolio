
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col, Container } from 'react-bootstrap'
import './BoxShadow.css'


function BoxShadowComp({src}) {



    return (
        <Container className=' image-container-Shadow mt-3'>
            <div className="image-container-Shadow">
                <img src={src} alt="image description" className="image-shadow" />
                <div className="Content-Shadow d-flex flex-column justify-content-center align-items-center text-center">
                    <h1>lorem jotain</h1>
                    <p>ipsum papsum hampsun tatsum</p>
                </div>
            </div>
        </Container>
    )
}

export default BoxShadowComp

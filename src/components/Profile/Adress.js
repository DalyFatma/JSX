import React from 'react'
import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import { Container } from 'react-bootstrap';

export default function Adress() {
  return (
    <div>
    <Card.Text>
        <Container>
    <p className='adress'> <h2 className='email' >Adress-Mail:</h2>dali.fatma@gmail.com.</p>
    </Container>
      </Card.Text>
      <div className='d-flex justify-content-evenly'>
        <a href='https://www.facebook.com/profile.php?id=100081175167925&mibextid=ZbWKwL' style={{color:"#4267B2"}}>
            <FontAwesomeIcon icon={faFacebook} size = '2x'/>
        </a>
        <a href='https://github.com/DalyFatma' style={{color:"#171515 "}}>
            <FontAwesomeIcon icon={faGithub} size = '2x'/>
        </a>
        <a href='https://www.linkedin.com/in/fatma-daly-6971a1190/'>
            <FontAwesomeIcon icon={faLinkedin} size = '2x'/>
        </a>
      </div>
    </div>
  )
}

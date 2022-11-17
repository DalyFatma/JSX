import React from 'react'
import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';

export default function FullName() {
  return (
    <div><Card.Body>
    <Card.Title>
        <h1 className='name'>
            Fatma Daly
        </h1>
        <h2 className='title'>
            Web Developper
        </h2>
        </Card.Title> 
  </Card.Body>
  </div>
  )
}

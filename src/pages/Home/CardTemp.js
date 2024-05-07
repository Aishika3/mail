import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
// import "../../pages/Home/CardStyle.css";

const CardTemp = ({ heading, text, img, link}) => {
  return (
    <Card className='card'>
      <Card.Img className='image' variant="top" src={img}/>
      <Card.Body>
        <Card.Title className='title'>
          {heading}
        </Card.Title>
        <Card.Text className='text'>
          {text}
        </Card.Text>
        <Link to={link}><Button className='btn'>Open Template</Button></Link>
      </Card.Body>
    </Card>

  )
}

export default CardTemp

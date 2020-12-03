import React,{useState} from "react";
import {Carousel, Container, Row, Col} from 'react-bootstrap'

function Slides() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return ( 
    <div id="testimonials-carousel" class="carousel slide" > 
      <Container fluid ="lg">
      <Row>
      <Col>
        <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 carousel-item"
            src="https://theurbanhousewife.com/wp-content/uploads/2013/01/More-Fashionable-with-Luxury-Winter-Outfits-for-Mens-and-Women-by-Burberry.jpg"
            alt="trends"
          />
          <Carousel.Caption>
            <h1 className="styles">Winter Collection's</h1>
            <h3 className="styles">Enjoy the new trends.</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 carousel-item"
            src="https://cdn.pixabay.com/photo/2016/03/27/19/57/woman-1284031__340.jpg"
            alt="trends"
            />
          <Carousel.Caption>
            <h1 className="styles">New Seasons</h1>
            <h3 className="styles">Enjoy this cold weather by being warm</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-item"
            src="https://giftstothefuture.com/wp-content/uploads/2018/11/gifts-to-the-future-family-christmas-reunion-1.jpg"
            alt="trends"
          />
          <Carousel.Caption>
            <h1 className="styles">Happy Festive season</h1>
            <h3 className="styles">Stay warm and enjoy with your loved ones.</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </Col>
      </Row>
      </Container>
      </div>   
    );
  }


export default Slides;
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import pix from "../Navlink/Image/luk.jpg"




function Slider() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            style={{
              height: "500px",
              width: "100vw",
              objectFit: "cover"
            }}
            className="d-block w-100"
            src={pix}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 style={{
              color: "black"
            }}>Hon.Saad lukmon olumoh</h3>
            <p style={{
              color: "black"
            }}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{
              height: "500px",
              width: "100vw",
              objectFit: "cover"
            }}
            className="d-block w-100"
            src={pix}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 style={{
              color: "black"
            }}>Hon.Saad lukmon olumoh</h3>
            <p style={{
              color: "black"
            }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{
              height: "500px",
              width: "100vw",
              objectFit: "cover"
            }}
            className="d-block w-100"
            src={pix}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 style={{
              color: "black"
            }}>Hon.Saad lukmon olumoh</h3>
            <p style={{
              color: "black"
            }}>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Slider

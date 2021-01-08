import React from 'react'
import Footer from '../Footer'
import NavBar from "../NavBar"
import SideBar from '../SideBar/SideBar'
import pix from "../Navlink/Image/luk.jpg"
import "../Navlink/About.css"
import Slider from './Slider'
import pix1 from "../Navlink/Image/bio.png"
import pix2 from "../Navlink/Image/edu.png"
import pix3 from "../Navlink/Image/awards.png"
import pix4 from "../Navlink/Image/works.png"



function About() {


  const [isOpen, setIsOpen] = React.useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (

    <div>
      <div style={{ marginTop: "80px" }}>
        <NavBar toggle={toggle} />
        <SideBar isOpen={isOpen} toggle={toggle} />
      </div>

      <div>
        <div className="BackDiv">
          <Slider />
        </div>
        <div className="Boxdiv">
          <div className="Box1">
            <center>
              <img
                style={{
                  height: "50px",
                }}
                src={pix1} alt="name.png" />
              <p> MARITAL STATUS: MARRIED <br />
 DATE OF BIRTH: 19TH OCT. 1966<br />
PLACE OF BIRTH: LAGOS <br />
STATE OF ORIGIN: KWARA STATE <br /></p>
            </center>
          </div>
          <div className="Box2">
            <center>
              <img
                style={{
                  height: "50px",
                }}
                src={pix2} alt="name.png" />

              <p>
                primary and secondary school <br />
ARMY CHILDREN SCHOOL APAPA 1972-1979 <br />
GOVERNMENT SECONDARY SCHOOOL BALLAH ILORIN 1979-1984
</p>
            </center>
          </div>
          <div className="Box3">
            <center>
              <img
                style={{
                  height: "50px",
                }}
                src={pix3} alt="name.png" />

              <p>
                tetiary institution<br />
KWARA STATE COLLEGE OF TECHNOLOGY ILORIN KWARA 1985-1987<br />
UNIVERSITY OF LAGOS AKOKA YABA LAGOS 1987-1990<br />
UNIVERSITY OF LAGOS AKOKA YABA LAGOS 2009-2010<br />
UNIVERSITY OF LAGOS AKOKA YABA LAGOS 2013-2014
</p>
            </center>

          </div>
          <div className="Box4">
            <center>
              <img
                style={{
                  height: "50px",
                }}
                src={pix4}
                alt="name.png" />

              <p>
                QUALIFICATIONS OBTAINED WITH DATES
                i. MASTERS OF SCIENCE FINANACE MSC FINANCE 2014
                ii. MASTER IN BANKING and FINANCE 2010
                iii. BACHELOR OF SCIENCE FINANACE AND BANKING BSC(FINANCE) 1990
            </p>
            </center>
          </div>
        </div>
        <div className="Boxdiv1">


          <div className="Box5">
            <center>
              <img
                style={{
                  height: "50px",
                }}
                src={pix1}
                alt="m.jpg" />
              <p>
                QUALIFICATIONS OBTAINED WITH DATES
                i. MASTERS OF SCIENCE FINANACE MSC FINANCE 2014
                ii. MASTER IN BANKING and FINANCE 2010
                iii. BACHELOR OF SCIENCE FINANACE AND BANKING BSC(FINANCE) 1990
              </p>
            </center>      </div>

          <div className="Box6">
            <center>
              <img
                style={{
                  height: "50px",
                }}
                src={pix2} alt="p.jpg" />
              <p>
                CONSTITUENCY: AJEROMI- IFELODUN 1
              </p>
            </center>
          </div>

          <div className="Box7">
            <center>
              <img
                style={{
                  height: "50px",
                }}
                src={pix3}
                alt="b.jpg" />
              <p>
                CHAIRMAN, COMMITTEE ON PUBLIC PRIVATE PARTNERSHIP
              </p>

            </center>          </div>

          <div className="Box8">
            <center>
              <img
                style={{
                  height: "50px",
                }}
                src={pix4}
                alt="a.jpg" />
              <p>others</p>
            </center>
          </div>



        </div>

      </div>

      <Footer />
    </div>
  )
}

export default About

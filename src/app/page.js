import React from 'react';
import Image from 'next/image';
import { Icon } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Example social media icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Example social media icons
// import GoogleFontLoader from 'react-google-font-loader';
const Page = () => {
  return (
    <div>
      <div id="nav">
        <Image width={150} height={150} src="/iiclogo.png" alt="" />
        <a href="./index.html"></a>
        <h4>Home</h4>
        <a href="./Innotech.html">
          <h4>Innotech ventures</h4>
        </a>
        <a href="./innovationcouncil.html">
          <h4>Innovation's council</h4>
        </a>
        <a href="./guidelines.html">
          <h4>Guidelines</h4>
        </a>
        <a href="./contactpage.html">
          <h4>Contact us</h4>
        </a>
      </div>
      <div id="cursor"></div>
      <div id="cursor-blur"></div>

     
      <div id="main">
        <div id="page1">
          <Image src="/clglogo.png" width ={200} height={200} style={{ marginTop: '50px' }} />
          <h1>INSTITUTE'S INNOVATION <br/> CELL</h1>
          <h2>INDIAN INSTITUTE OF INFORMATION TECHNOLOGY ALLAHABAD</h2>

          <div id="arrow">
            <i className="ri-arrow-down-line"></i>
          </div>
        </div>
        <div id="page2">
          <div id="scroller">
            <div id="scroller-in" style={{ marginTop: '120px' }}>
              <h4>INDIAN INSTITUTE OF INFORMATION</h4>
              <h4>TECHNOLOGY ALLAHABAD'S</h4>
              <h4>INNOVATION</h4>
              <h4>CELL</h4>
              <h4> </h4>
            </div>
            <div id="scroller-in">
              <h4>INDIAN INSTITUTE OF INFORMATION</h4>
              <h4>TECHNOLOGY ALLAHABAD'S</h4>
              <h4>INNOVATION</h4>
              <h4>CELL</h4>
            </div>
          </div>
          <div id="about-us">
            <img
              src="https://img.freepik.com/premium-vector/hand-teamwork-low-poly-wireframe-blue-dark-background-people-friendship-support-success_252172-22.jpg?w=1060"
              alt=""
            />
            <div id="about-us-in">
              <h3>INTRODUCTION</h3>
              <p>
                The Ministry of Human Resource Development in 2019 released the National Innovation and Startup Policy 2019 for students and faculty of Higher Education Institutions (HEIs). The Policy is in line with the focus of the Central Government on entrepreneurial projects.
              </p>
              <button className="read-more-button">Read more </button>
            </div>
            <img
              src="https://img.freepik.com/free-vector/polygonal-wireframe-business-strategy-composition-with-glittering-images-human-hand-incandescent-lamp-with-text_1284-32265.jpg?w=826&t=st=1696635356~exp=1696635956~hmac=4b483cfd0206d216ff74561a9900194a4559e96f534379404fe250e671dfe39b"
              alt=""
            />
          </div>
          <div id="cards-container">
            <div className="card" id="card1">
              <div className="overlay">
                <h4>Smart Indian <br /> Hackathon</h4>
                <p>Coming soon...</p>
              </div>
            </div>
            <div className="card" id="card2">
              <div className="overlay">
                <h4>IPR</h4>
                <p>Coming soon...</p>
              </div>
            </div>
            <div className="card" id="card3">
              <div className="overlay">
                <h4>EVENT</h4>
                <p>Coming soon...</p>
              </div>
            </div>
          </div>
        </div>
        <div id="page3">
          <p>
            "Innovation is the art of turning today's dreams into tomorrow's reality, and entrepreneurship is the vessel that carries those dreams forward."
          </p>
          <img
            id="colon1"
            src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-left.svg"
            alt=""
          />
          <img
            id="colon2"
            src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-right.svg"
            alt=""
          />
        </div>
      </div> 


    

  





      
    </div>
  );
};

export default Page;

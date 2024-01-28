import React from 'react'
import "./style.scss" 

function AboutUs() {
  return (
    <div className='containerAbout'>
        <div className="about">
            <div className="img">
                <img src="https://preview.colorlib.com/theme/selling/images/about_1.jpg" alt="" />
                <div className="textAbout">
                    <h1>Trusted Merchant</h1>
                    <p>FOR 50 YEARS</p>
                </div>
            </div>
            <div className="aboutUs">
                <p>MERCHANT COMPANY</p>
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur <br />adipisicing elit. Qui fuga ipsa, repellat <br />blanditiis nihil, consectetur. Consequuntur eum <br />inventore, rem maxime, nisi excepturi ipsam <br />libero ratione adipisci alias eius vero vel!</p>
                <button>LEARN MORE</button>
            </div>
        </div>

    </div>
  )
}

export default AboutUs
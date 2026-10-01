import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocalPostOffice } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";



import React from 'react'

const HomeFotter = () => {
  return (
    <>

    <div className="footer">

              <div className="footerbox1">
                  <img className='fotter-img'
                   src='fotter-img.png'
                   alt="coffee"
                  />
              </div>


                <div className="footerbox2">
                    <h3 className='link-heding'>QUICK LINKS</h3>
                      <a className='links-link' href='/'>Home</a>
                        <a className='links-link' href='/About'>About</a>
                        <a className='links-link' href='/Location'>Location</a>
                       <a className='links-link' href='/Login'>Login</a>
                </div>



              <div className="footerbox3">

                 <h3 className='contect-heding'>CONTACT US </h3>
                 <a className="location-link" href='https://www.google.com/maps/place/Vastral,+Ahmedabad,+Gujarat+382418'><CiLocationOn />  Vastral Ahmedabad, Gujarat </a>
                <span className='location-link'>  <FaPhoneAlt /> +91 8320160474  </span>
              <span className='location-link'>  <MdLocalPostOffice />  patelprince83201@gmaile.com </span>
                <p className='footer-opaningtime'>  <IoMdTime /> Mon - Sun:8.00AM-12.00PM</p>
              </div>  


              <div className="footerbox4">

                 <h3 className='contect-heding'> FOLLOW US  </h3>

                 <div className="follow-link">
                 <p className='followimg'><FaInstagram /> </p>
                 <p className='followimg'> <FaFacebook /></p>
                    <p className='followimg'><FaLinkedin /></p>
                  <p className='followimg'><FaWhatsapp /></p>
                 </div>

                 <div className="update-heding">
                  <h3 className='updateheding'> STAY CONNECTED</h3>
                  <p>Get updates about new coffee,<br/>
                      offers & special collection </p>
                 </div>

              </div>
            </div>

            <div className="last-footter">
                    <h6 className="lastheding-fotter">2026 Coffee Stories.All Rights Reserved.</h6>
              </div>

    </>
  )
}

export default HomeFotter



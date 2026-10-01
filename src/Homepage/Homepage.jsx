import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom';

import HomeFotter from './HomeFotter';


const Homepage = () => {


 
  return (

                                             
    <div>
          <div className="coffce-poster">
            <img
            src="/coffee-poster.png"    
             alt="Coffee solve everything"
          />
          </div>

         <div className="semi-coffce-picters">
            <img
            src="/coffee.jpg"    
             alt="Coffee solve everything"
          />

                 <div className='text-sammry'> 
           <h1>Our Coffee, Your Story</h1><hr/>
           <p>At Coffee Stries,We bellive every cup of coffee<br/>
              bring people together.our beans are carefully <br/>
              select and brewed to perfecton. 
          </p>
          </div>

          </div>


                <div className="bestselareheding">
                  <h3>BEST SELLER COFFEE'S</h3>
                </div>


                                            {/* //section=2 */}

            

          <div className="maltiimages-price">

          
                <div className='box'>
                 <img
                      className="mini1"                      //badha ma sem j class avse
                      src="mini-image1.webp"
                       alt="coffee stories"
                     />
                  <h4>Cappuccino</h4>
                  <h6 className='mini-extrainfo'>smooth and balanced</h6>
                  <h4 className='price'>₹179</h4>
                 
                </div>


                <div  className='box'>
                  <img 
                  className='mini1'
                  src='mini-img2.jpg'
                  alt="coffee stories"
                  />
                  <h4>Cold Coffee</h4>
                  <h6 className='mini-extrainfo'>chiled and refreshing </h6>
                  <h4 className='price'>₹199</h4>
                </div>

                <div  className='box'>
                  <img 
                  className='mini1'
                  src='mini-img3.jpg'
                  alt="coffee stories"
                  />
                  <h4>Americano Espresso</h4>
                  <h6 className='mini-extrainfo'>Bold and strong</h6>
                  <h4 className='price'>₹139</h4>
                </div>


                    <div  className='box'>
                  <img 
                  className='mini1'
                  src='mini-img4.jpg  '
                  alt="coffee stories"
                  />
                  <h4>Mocha</h4>
                  <h6 className='mini-extrainfo'>Rich and Delicious</h6>
                  <h4 className='price'>₹169</h4>
                </div> 
         </div>


                                              {/* //section=3 */}
                                              

         <div className='waychooseus'>

             <div className="choose-componentsone">

              <img className='waychoose-img'
              src="waychooseimgs.jpg"
              alt="coffee stories "
              />
             </div>
             
                          <div className="choose-componentstwo">
                             <h2 className='waychoose-heding'>Way Choose Us</h2>
                             <span className='waychoose-text'>☕ Freshly Brewed</span>
                            <span className='waychoose-text'>🌱 Premium Beans</span>
                           <span className='waychoose-text'>❤️ Made With Passion</span>
                      <span className='waychoose-text'>✨ Cozy Atmosphere</span>


                          </div>
                   
            </div>


                                       {/* //section=3 = footer */}


                         <HomeFotter/>
            


         

    </div>
  ) 
}

export default Homepage


import React from 'react'

const Aboutfront = () => {
  return (
    <div>
       
       <div className="aboutimg">
        <img 
        className='big-about'
        src="Aboutbigimg.png"
        alt='coffe stories'
        ></img>

       </div>



       <div className="colites">
          <h3 className='About-heding'> ABOUT US</h3>
        <h5 className='colites-heding'>

We believe coffee is more than just a drink.<br/>
It is a moment to relax, connect and enjoy.<br/>

Our coffee is made from carefully selected beans<br/>
and prepared with passion to give you a rich<br/>
and memorable experience.<br/>

☕ Freshly Roasted Beans<br/>
🌱 Quality Ingredients<br/>
❤️ Made With Passion

<br/>
[ Explore Our Coffee ]
        </h5>
             
       </div>


      <div className="mine-img-colites">
          <div className="box-colites">
            <img 
            className='colitesimg'
            src="colites-img.jpg" 
            alt='coffee'
            ></img>
            
            <div className="colites-info">
               <h4>☕ Fresh Beans</h4> 
              <h5>Freshly selected & roasted beans</h5> 
               
            </div>


           </div>  

              <div className="box-colites">
                               
                             <img 
                               className='colitesimg'
                               src="colites-img2.jpg" 
                              alt='coffee'
                              ></img>
            
                            <div className="colites-info">
                      <h4>🌱 Quality</h4> 
                      <h5>Carefully chosen ingredients</h5> 
               
               </div>       
                          
          </div>
                            
                            
                            
             <div className="box-colites">

                 
                               
                             <img 
                               className='colitesimg'
                               src="colites-img3.jpg" 
                              alt='coffee'
                              ></img>
            
                            <div className="colites-info">
                      <h4>❤️ Passion</h4> 
                      <h5>Coffee made with love & <br/> Coffee Make Love </h5> 
               
               </div>     
                    
             </div>


      </div>




    </div>

    
  )
}

export default Aboutfront

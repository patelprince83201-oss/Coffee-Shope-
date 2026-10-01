import React, { useState } from 'react'

const LoginForm = () => {

    const [name,setName]= useState ("");
        const [gmaile,setGmaile]= useState ("");
        const [pass,setPass]= useState ("");

        const [error,Seterror]=useState('');

        const hendalfrom = (e)=>{
               e.preventDefault();
            

               if(!name || !pass || !gmaile ){
                  Seterror('Please fill all fields ')
                  return;
               }
                  console.log('from submited')
              
               setGmaile('')
               setName('')
               setPass('')
        }

      return (
    <div>
        <div className='main-login-heding'>
            
            <h1 className='loginheding'>Coffee Stories</h1>
            <p className='subheding'>Weelcome to Coffee Word</p>

        </div>

        <div className='outerloginbox'>
        
            
            <form   className="innerlogin-from"
            onSubmit={hendalfrom}
             >

           <input
                 type="text"
                 value={name}
                  placeholder="Enter Your Name"
                className="name-input"

                onChange={(e)=>{
                    setName(e.target.value)
                }}

            />

             <input
                 type="text"
                 value={gmaile}
                  placeholder="Enter Your Gmile"
                className="name-input"  

                onChange={(e)=>{
                    setGmaile(e.target.value)
                }}
            />

            <input
                 type="password"
                 value={pass}
                  placeholder="Enter Your Password"
                className="name-input"  

                onChange={(e)=>{
                    setPass(e.target.value)
                }}
            />  

            <button   className='submitbtn' type="submit">Submit</button>
            <p className='notfiledata'>{error}</p>

            </form>

            


         </div>
    
    </div>
  )
}

export default LoginForm

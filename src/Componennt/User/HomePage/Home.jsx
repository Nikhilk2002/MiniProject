import React from 'react'
import './Home.css'
import frameglass2 from './frameglass2.jpg';



function Home() {
  return (
    <div className='main'>
      <div className="aditem">
      <div className="adHead">
      <h1>Choose The best</h1>
       <h3>For your eyes and Face</h3>

      </div>

      <div className="adGlass">
      
      <img src={frameglass2} alt="Glass" className='glassPhoto'/>
      

      </div>
      </div>
      <div className="contentIem">
     
      </div>

    </div>
  )
}

export default Home
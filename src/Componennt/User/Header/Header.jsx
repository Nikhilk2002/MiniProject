import React from 'react'
import './Header.css'
function Header() {
  return (
    <div className='Header'>
        <div className="firstHead">
          <h3>Shoping Mall</h3>
        </div>
        <div className="secondHead">
          <ul className='listHeader'> 
            <li className='homeItem'>Home</li>
            <li className='productItem'>Product</li>
          </ul>
        </div>
    </div>
  )
}

export default Header
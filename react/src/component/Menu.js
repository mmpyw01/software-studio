import React from 'react'
import './Menu.css'
import { menuItems } from '../data'
import Button from './Button'

function Menu() {
  return (
    <div className="d-flex flex-column mb-3">
      {menuItems.map((item) => (
        <div className="Bbody">
        <div><img src={item.img} alt="food" className='foodpic'/></div>
            
            <div>
                <h2>{item.cat}</h2>
                <h5>{item.name}</h5>
                <p>{item.desc}</p>
            </div>
                <Button/>
        </div>
                ))}
    </div>
  )
}

export default Menu;

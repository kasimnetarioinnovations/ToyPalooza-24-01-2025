import React from 'react'
import './Shopbyage_card.css'

const Shopbyage_card = ({txt, txt_color}) => {
  return (
    <div className="shopagecard">
        <div  style={{color:txt_color, fontFamily: "Matemasie"}}>{txt}</div>
    </div>
  )
}

export default Shopbyage_card

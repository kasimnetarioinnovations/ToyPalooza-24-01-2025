import React from 'react'
import '../QuantityCart/QuantityCart.css'
import Flower from '../CheckOut/CheckOutImages/flower.png'
import { AiOutlineDelete } from 'react-icons/ai'

const QuantityCart = () => {
    return (
        <div>
            <div className="checkoutcart">
                <div className="d-flex checkoutcartdiv" style={{ gap: '20px' }}>
                    {/* 1st img */}
                    <span style={{ display: 'flex', backgroundColor: '#ffff', padding: '10px', height: '70px', marginRight: '5px' }}><img src={Flower} alt="flower" className="checkoutcart-image" /></span>
                    {/* skip hop */}
                    <div className="d-flex flex-column" style={{ gap: '20px' }} >
                        <span className="skiphoppara">Skip Hop Little Kid Backpack Butterfly 3Y+, MultiColour</span>
                        <div className='multicolorproductdiv'>
                            <p className="multicolorp d-flex" style={{ gap: '10px' }}>MultiColour <span className="qtyp">₹200</span></p>
                            <p className="multicolorp d-flex" style={{ gap: '55px' }}>QTY <span className="qtyp">1</span></p>
                        </div>
                    </div>
                </div>
                <div className="d-flex cartquantity" style={{ gap: '20px', alignItems: 'center' }}>
                    <span className="pluscart">+</span>
                    <span className="minuscart">-</span>
                    <span className="deletecart"><AiOutlineDelete /></span>
                </div>
            </div>

        </div>
    )
}

export default QuantityCart


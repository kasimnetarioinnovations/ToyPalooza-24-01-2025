import React from 'react'
import '../Categories/Categories.css'
import Copy from '../../Assets/Image/copy.png'
import Clip from '../../Assets/Image/clip.png'
import Bag from '../../Assets/Image/bag.png'
import Purse from '../../Assets/Image/purse.png'
import Truck from '../../Assets/Image/truck.png'

const Categories = () => {
  return (
    <div className='section-padding categories'>
          <div className="row align-items-center">
              <div className="categories-area">
                  <h1 className='categories-heading'>Categories</h1>
                  <div className="d-flex categoriescard-space">
                    {/* 1st card */}
                      <div className='categories-card'>
                        <div className='copy-div'>
                        <img src={Copy} alt="copy" className='categories-img' />
                        </div>
                          <div class="overlay" style={{color:'#295eac', fontSize:'12px', fontWeight:'500'}}>Stationary</div>
                      </div>
                       {/* 2nd card */}
                       <div className='categories-card '>
                       <div className='copy-div'>
                          <img src={Clip} alt="copy" className='categories-img' />
                          </div>
                          <div class="overlay" style={{color:'#295eac', fontSize:'12px', fontWeight:'500'}}>Hair Accessories</div>
                      </div>
                      {/* 3rd card */}
                      <div className='categories-card school'>
                         <div className='copy-div'>
                          <img src={Bag} alt="copy" className='categories-img' />
                          </div>
                          <div class="overlay" style={{color:'#295eac', fontSize:'12px', fontWeight:'500'}}>School bags</div>
                      </div>
                      {/* 4th card */}
                      <div className='categories-card school'>
                          <div className='copy-div'>
                          <img src={Purse} alt="copy" className='categories-img' />
                          </div>
                          <div class="overlay" style={{color:'#295eac', fontSize:'12px', fontWeight:'500'}}>Carry bags</div>
                      </div>
                      {/* 5th card */}
                      <div className='categories-card school'>
                          <div className='copy-div'>
                          <img src={Truck} alt="copy" className='categories-img  hover-zoom' />
                          </div>
                          <div class="overlay" style={{color:'#295eac', fontSize:'12px', fontWeight:'500'}}>Toys</div>
                    </div>
                  </div>
            </div>
      </div>
    </div>
  )
}

export default Categories

import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import './Hero.css'


function Hero() {
  return (
    <div className='hero'>
      <div className='content'>
        <h1>Find the Perfect Home</h1>
        <p className='search-text'>Search the largest selection of luxury condominiums and single family homes currently available.</p>
        <form action="" className='search'>
          <div>
            <input type="text" placeholder='Enter City, Zip Code or Keyword' />
            <div className='radio'>
              <input type="radio" checked />
              <label>Buy</label>
              <input type="radio" />
              <label>Rent</label>
              <button type='submit'><AiOutlineSearch className='icon' /></button>
            </div>
          </div>
        </form>
      </div>
    
    </div>
  )
}

export default Hero

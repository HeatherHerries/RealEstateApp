import React from 'react'

import Best1 from '../../Assets/best1.jpg'
import Best2 from '../../Assets/best2.jpg'
import Best3 from '../../Assets/best3.jpg'

import './Best.css'

const Best = () => {
    return (
        <div className='best'>
            <h1>Find Best Rated Properties</h1>
            <div>
                <p><span className='bold'>All</span></p>
                <p>Commercial</p>
                <p>Residential</p>
                <p>Agricultural</p>
            </div>
            <div className='container'>
                <img src={Best1} alt='' />
                <img src={Best2} alt='' />
                <img src={Best3} alt='' />
            </div>
            <button className='btn'>View All</button>
        </div>
    )
}

export default Best
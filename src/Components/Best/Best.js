import React from 'react'

import RE6 from '../../Assets/re6.jpg'
import RE12 from '../../Assets/re12.jpg'
import RE14 from '../../Assets/re14.jpg'

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
                <img src={RE6} alt='' />
                <img src={RE12} alt='' />
                <img src={RE14} alt='' />
            </div>
            <button className='btn'>View All</button>
        </div>
    )
}

export default Best

import React from 'react'
import './Featured.css'
import Home1 from '../../Assets/home1.jpg'
import Home1Master from '../../Assets/home1-master.jpg'
import Home1Bedroom from '../../Assets/home1-bedroom.jpg'
import Home1Bathroom from '../../Assets/home1-bathroom.jpg'
import Home1Kitchen from '../../Assets/home1-kitchen.jpg'

import Home2 from '../../Assets/home2.jpg'
import Home2Master from '../../Assets/home2-master.jpg'
import Home2LR from '../../Assets/home2-lr.jpg'
import Home2Kitchen from '../../Assets/home2-kitchen.jpg'
import Home2Bathroom from '../../Assets/home2-bathroom.jpg'

const Featured = () => {
    return (
        <div className='featured'>
            <h1 className='featured-text'>Top Featured Listings</h1>
            <p className='featured-text'>Selected listings by City, State, & Zip based on views.</p>
            <div className='container'>
                <img className='span-3 image-grid-row-2' src={Home1} alt='' />
                <img src={Home1Master} alt='' />
                <img src={Home1Bedroom} alt='' />
                <img src={Home1Bathroom} alt='' />
                <img src={Home1Kitchen} alt='' />
                <div className='span-3 img-details'>
                    <div className='top'>
                        <h2>123 French Quarter St. New Orleans, LA</h2>
                        <p>House for Sale</p>
                        <p className='price'>$677,999</p>
                    </div>
                    <div className='info-grid'>
                        <div>
                            <div className='info'>
                                <p className='bold'>Bedrooms:</p><p>7</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>Bathrooms:</p><p>6</p>
                            </div>
                        </div>
                        <div>
                            <div className='info'>
                                <p className='bold'>Square Feet:</p><p>8,438</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>Est Payment:</p><p>$4,797/mo</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='span-2 right-img-details'>
                    <p>A lovely french style home in the comfort of the city with a full-size pool. Spacious and luxurious bedrooms located in Louisiana. Including media room, workout facility, and built-in sauna. </p>
                    <button className='btn'>View Listing</button>
                </div>
            </div>

        {/* Section section */}
        <div className='container'>
                <img className='order-2' src={Home2Master} alt='' />
                <img className='order-3' src={Home2LR} alt='' />

                <img className='span-3 image-grid-row-2 order-1' src={Home2} alt='' />


                <img className='order-4' src={Home2Kitchen} alt='' />
                <img className='order-5' src={Home2Bathroom} alt='' />

                <div className='span-2 right-img-details order-7'>
                    <p>A beautiful country style home on plenty of land. Open concept and the feel of the country located in Texas. Fully operational smart home with tons of extra storage. </p>
                    <button className='btn'>View Listing</button>
                </div>


                <div className='span-3 img-details order-6'>
                    <div className='top'>
                        <h2>456 Lone Star St. Dallas, TX</h2>
                        <p>House for Sale</p>
                        <p className='price'>$788,000</p>
                    </div>
                    <div className='info-grid'>
                        <div>
                            <div className='info'>
                                <p className='bold'>Bedrooms:</p><p>5</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>Bathrooms:</p><p>7</p>
                            </div>
                        </div>
                        <div>
                            <div className='info'>
                                <p className='bold'>Square Feet:</p><p>8,138</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>Est Payment:</p><p>$4,397/mo</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Featured
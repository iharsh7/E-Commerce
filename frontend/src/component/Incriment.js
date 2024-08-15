import React from 'react'
import './Increment.css'
import CountUp from 'react-countup';
import { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
const Incriment = () => {
    const [dataa,setDataa] = useState(false);
  return (
    <div className="div">
    <ScrollTrigger onEnter={()=>{setDataa(true)}} onExit={()=>{setDataa(false)}}>

    <div className='incri1'>
        <div className="incridiv1">
            <h1 className='counter-numbers' data-number="1000">
           {dataa && <CountUp
            start={0}
            end={1000}
            duration={1.5}>
            </CountUp>}+
                
                </h1>
            <p>Total Visit</p>
        </div>
        <div className="incridiv1">
            <h1 className='counter-numbers' data-number="600">
            {dataa && <CountUp
            start={0}
            end={600}
            duration={1.5}>
            </CountUp>}+
            </h1>
            <p>Total Orders</p>
        </div>
        <div className="incridiv1">
            <h1 className='counter-numbers' data-number="500">
            {dataa && <CountUp
            start={0}
            end={500}
            duration={1.5}>
            </CountUp>}+
            </h1>
            <p>Happy Coustmers</p>
        </div>
        <div className="incridiv1">
            <h1 className='counter-numbers' data-number="400">
           {dataa && <CountUp
            start={0}
            end={400}
            duration={1.5}>
            </CountUp>}+
            </h1>
            <p>People's Love</p>
        </div>
    </div>
        </ScrollTrigger>
    </div>
  )
}

export default Incriment
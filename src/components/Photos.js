import React from 'react';
import Single from './Single'
const alpha = require('../images/alpha.jpeg');
const java = require('../images/java.jpeg');
const neutral = require('../images/neutral.jpeg');
const rewasa = require('../images/rewasa.jpeg');
const rise = require('../images/rise.jpeg');
const vaibhu = require('../images/vaibhu.jpg');


const Photos = () => {
  return (
    <>
      <div className="container">
        <h5 className='photoHeading'> A bunch of photos of me!</h5>
        <div className="photos">



          <div className="firstRow">
            <Single id="alpha" ibtn="alpha" photo={alpha} description="Water feels like home to me." />
            <Single id="neutral" ibtn="neutral" photo={neutral} description="Sometimes i look decent." />
            <Single id="rise" ibtn=" rise" photo={rise} description="Anything for the fresh air." />
          </div>
          <div className="secondRow">
            <Single id="vaibhu" ibtn="vaibhu " photo={vaibhu} description="Best-friends through thick and thin." />
            <Single id="java" ibtn="java " photo={java} description="Two wheels brings true smile." />
            <Single id="rewasa" ibtn="rewasa " photo={rewasa} description="This one is from my 18th birthday." />
          </div>


        </div>
      </div>

    </>
  )
}

export default Photos
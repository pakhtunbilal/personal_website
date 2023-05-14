import React from 'react'

const Single = (props) => {
    
    return (
        <div><span className='PhotoBox'>
            <h5 className="iBox">{props.description}</h5> 
            <img src={props.photo} alt="photos" className='alpha' id={props.id} /> 
        </span></div>
    )
}

export default Single
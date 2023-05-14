import React from 'react'

const Project = (props) => {
  return (
    <div className="col-md-6 project" >
        <a href={props.link} target="_blank" style={{textDecoration:"none"}}>
              <div className="card mb-3 bg-dark text-white">
                <img src={props.photo} className="card-img-top" alt="..." />
                  <div className="card-body" >
                    <h5 className="card-title" >{props.heading} </h5>
                    <p className="card-text">{props.about}</p>
                    <p className="card-text">{props.year}</p>
                  </div>
              </div>
              </a>
            </div>
  )
}

export default Project
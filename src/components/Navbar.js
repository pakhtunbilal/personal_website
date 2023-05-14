import React from 'react';
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';


const Navbar = () => {

  const navigate = useNavigate()
  const handleClick=(e) =>{
    if(e.target.id === "work"){
      document.getElementById(e.target.id).classList.add("highlight")
      document.getElementById("about").classList.remove("highlight")
      navigate('/')
    }else if(e.target.id === "about"){
      document.getElementById(e.target.id).classList.add("highlight")
      document.getElementById("work").classList.remove("highlight")
      navigate('/about')
    }else if(e.target.id === "workLi"){
      document.getElementById("work").classList.add("highlight")
      document.getElementById("about").classList.remove("highlight")
      navigate('/')
    }else if(e.target.id === "aboutLi"){
      document.getElementById("about").classList.add("highlight")
      document.getElementById("work").classList.remove("highlight")
      navigate('/about')
    }
  }

  return (
    <>
      <div className="container ">
        <div className="navContainer">
          <nav className='customNav' onClick={handleClick}>
            <span className='NavSpan  highlight' id='work' > <Link to="/" className='li' id='workLi'>Work </Link></span>
            <span className='NavSpan' id='about'> <Link to="/about" className='li' id='aboutLi' >About </Link></span>
          </nav>

        </div>

      </div>


    </>
  )
}

export default Navbar
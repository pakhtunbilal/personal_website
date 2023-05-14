import React from 'react';
import Project from './Project';

const personal = require('../images/personal.png');
const todolist = require('../images/todolist.png');
const secrets = require('../images/secrets.png');
const iNotebook = require('../images/iNotebook.png')

const Home = () => {

 const  personalLink = "https://pakhtunbilal.github.io/about-me/";
 const  todolistLink = "https://vast-red-badger-tux.cyclic.app/";
 const  secretsLink = "https://salmon-abalone-kit.cyclic.app/";
 const  iNotebookLink = "https://645cad38550a24754c488bd7--luminous-kitten-6fb777.netlify.app/";

  return (
    <>
      <div className="container">
        <div className="h1 workMainHeading">
         <span className='redHighlight'>Bilal Pathan</span> designs products & systems to empower human agency.
        </div>
        <div className="div projectHeading">
          <h5>My personal Projects</h5>
        </div>
        <div className="div">
          <div className="row">
            <Project link={personalLink} photo={personal} heading="Personal Website" about="This is my first personal website. This is a static website I created using just HTML and CSS. This website is hosted
on gitpages. This website is primarily focused on the user interface." year="2022" />
            <Project link={todolistLink} photo={todolist} heading="Todolist" about="Todolist is a full-stack project that allows the user to list the work and remove the completed work by checking the checkbox.
The user can create a different list by putting /listname in the URL." year="2022" />
            <Project link={secretsLink} photo={secrets} heading="Secrets" about="Secrets is a full-stack project that allows users to share secrets anonymously. Data is stored anonymously, and user information is
secured using Google authentication and encryption." year="2022" />
            <Project link={iNotebookLink} photo={iNotebook} heading="iNotebook" about="iNotebook is a MERN-stack project that allows users to add, update and delete note. A user cannot access another users note, and user information is
secured using encryption." year="2023" />

          </div>
        </div>
      </div>
    </>
  )
}

export default Home
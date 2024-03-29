import React from 'react';
import Project from './Project';

const personal = require('../images/personal.png');
// const todolist = require('../images/todolist.png');
const secrets = require('../images/secrets.png');
const iNotebook = require('../images/iNotebook.png');
const eCommerceDesktop = require('../images/eCommerceDesktop.png');
const dailyJournal = require('../images/dailyJournal.png');
const promptopia = require('../images/Promptopia.png')
const vaibhavi = require('../images/vaibhavi.png')
const cosmetics = require('../images/cosmetics.png')

const Home = () => {

  const personalLink = "https://pakhtunbilal.github.io/about-me/";
  // const todolistLink = "https://vast-red-badger-tux.cyclic.app/";
  const secretsLink = "https://salmon-abalone-kit.cyclic.app/";
  const iNotebookLink = "https://645cad38550a24754c488bd7--luminous-kitten-6fb777.netlify.app/";
  const ECommerceDesktopLink = "https://main--harmonious-donut-f50c7d.netlify.app/signup";
  const DailyJournalLink = "https://daily-journal-uq28.onrender.com";
  const promptopiaLink = "https://mellifluous-naiad-aea2ce.netlify.app/"
  const vaibhaviLink = "https://main--cute-kataifi-46a5ce.netlify.app/";
  const cosmeticsLink = "https://main--luminous-smakager-9c35eb.netlify.app/";

  return (
    <>
      <div className="container">
        <div className="h1 workMainHeading">
          <span className='redHighlight'>Bilal Pathan</span> designs products & systems to empower human agency.
        </div>
        <div className="div projectHeading">
          <h5 className='photoHeading'>My personal Projects</h5>
        </div>
        <div className="div">
          <div className="row">
            <Project link={vaibhaviLink} photo={vaibhavi} heading="Vaibhavi-Sharma" about="Vaibhavi Sharma, A React.js web application is a portfolia and personal website of a skilled Digital Markter who is capable of creating and mainting strong
presence of you and your business, Reach her out if you thinking about Digital Marketing." year="2023"></Project>
            <Project link={cosmeticsLink} photo={cosmetics} heading="Block-Savvy" about="Block-Savvy, A React.js web application is a dummy homepage  design for the e-commerce application. Many react components are used to inhance the show of the products,
like sliders, before and after, animations etc." year="2023"></Project>
            <Project link={promptopiaLink} photo={promptopia} heading="Promptopia" about="Promptopia, A Full Stack Next.js web application is an open-source AI prompting tool for modern world to discover, create and share creative prompts after
logging in using Google authentication" year="2023"></Project>
            <Project link={ECommerceDesktopLink} photo={eCommerceDesktop} heading="E-Commerce-Desktop" about="E-Commerce-Desktop is a MERN Stack project which allows user to list products with name,
price, compony etc. User can perform CRUD operations on their listed products.
" year="2023"></Project>
            <Project link={DailyJournalLink} photo={dailyJournal} heading="Daily-Journal" about="Daily-Journal is full stack web application created using node.js, express.js, MongoDB, EJS. It
allows users to write about anything they want to express. It is hosted on world wide web using
render.com" year="2023"></Project>
            <Project link={secretsLink} photo={secrets} heading="Secrets" about="Secrets is a full-stack project that allows users to share secrets anonymously. Data is stored anonymously, and user information is
secured using Google authentication and encryption." year="2022" />
            <Project link={iNotebookLink} photo={iNotebook} heading="iNotebook" about="iNotebook is a MERN-stack project that allows users to add, update and delete note. A user cannot access another users note, and user information is
secured using encryption." year="2023" />
            {/* <Project link={todolistLink} photo={todolist} heading="Todolist" about="Todolist is a full-stack project that allows the user to list the work and remove the completed work by checking the checkbox.
The user can create a different list by putting /listname in the URL." year="2022" /> */}
            <Project link={personalLink} photo={personal} heading="Personal Website" about="This is my first personal website. This is a static website I created using just HTML and CSS. This website is hosted
on gitpages. This website is primarily focused on the user interface." year="2022" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
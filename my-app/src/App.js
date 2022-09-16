import React from "react";
import holiday from "/Users/edgardoescamilla/challenges/personalportv2/my-app/src/holiday.png";
import instagram from "/Users/edgardoescamilla/challenges/personalportv2/my-app/src/instagram.png";
import Reactmultistep from "/Users/edgardoescamilla/challenges/personalportv2/my-app/src/Reactmultistep.png";
import Tupac from "/Users/edgardoescamilla/challenges/personalportv2/my-app/src/Tupac.png";
import WeDoWebsites from "/Users/edgardoescamilla/challenges/personalportv2/my-app/src/WeDoWebsites.png";
import MyPic from "./MyPic.jpeg";
import Burger from "/Users/edgardoescamilla/challenges/personalportv2/my-app/src/Burger.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div>
      <div className="TopBarHeader">
        <h1>Edgardo Escamilla</h1>
        <div className="moreinfotabs">
          <div>
            <a href="https://www.linkedin.com/in/edgardo-bryan-escamilla/">
              <FontAwesomeIcon className="link" icon={faLinkedin} />
              Linkden
            </a>
          </div>
          <div>
            <a href="https://github.com/EdgardoBryan">
              <FontAwesomeIcon className="link" icon={faGithub} />
              Github
            </a>
          </div>
          <div>Contact</div>
        </div>
      </div>
      <div className="ProfileDescription">
        <div className="bostonpicside">
          <h3 className="bio">
            “We have two lives, and the second begins when we realize we only
            have one” – Confucius.
          </h3>
        </div>
        <div className="second-box">
          <img className="profile-pic" src={MyPic} alt="edpicture"></img>
        </div>
      </div>
      <div className="languageFrameworks">
        <h2>Languages I specialize In</h2>
        <div className="flexboxLanguages">
          <div className="box box1">
            <h2 className="text">HTML 5</h2>
          </div>
          <div className="box box2">
            <h2>CSS</h2>
          </div>
          <div className="box box3">
            <h2>JAVASCRIPT</h2>
          </div>
          <div className="box box4">
            <h2>REACT JS</h2>
          </div>
          <div className="box box5">
            <h2>NODE JS</h2>
          </div>
        </div>
      </div>
      <h2 className="textProjects">Coding Projects</h2>
      <div className="codingProjects">
        <div className="projectboxes pro1">
          <img src={Burger} alt="burgerpic" className="Menu"></img>
          <h3>BURGER MENU PAGE BUILT USING HTML AND CSS</h3>
        </div>
        <div className="projectboxes pro2">
          <img
            src={WeDoWebsites}
            alt="websites"
            className="WebsitesBuilder"
          ></img>
          <h3>FRONT END DESIGN BUILT USING REACT JS HTML AND CSS</h3>
        </div>
        <div className="projectboxes pro3">
          <img src={Tupac} alt="idCard" className="tupac"></img>
          <h3>MOCK PORTFOLLIO CARD BUILT USING HTML CSS AND FONTAWESOME</h3>
        </div>
        <div className="projectboxes pro4">
          <img
            src={Reactmultistep}
            alt="multiPage"
            className="reactmultistep"
          ></img>
          <h3>
            React MultiStep Page built using state to dynamically change pages
            using React Javascript Css and Html{" "}
          </h3>
        </div>
        <div className="projectboxes pro5">
          <img src={instagram} alt="instagram" className="instagram"></img>
          <h3>Instagram clone page built with Html and Css</h3>
        </div>
        <div className="projectboxes pro6">
          <img src={holiday} alt="holiday" className="holiday"></img>
          <h3>
            Full Stack Application with full sign in functionality, able to
            delete edit and create new holidays and with a database to persist
            data
          </h3>
        </div>
      </div>
    </div>
  );
}

export default App;

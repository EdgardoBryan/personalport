import React from "react";
import MyPic from "./MyPic.jpeg";
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
          “We have two lives, and the second begins when we realize we only have one” – Confucius.
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
    </div>
  );
}

export default App;

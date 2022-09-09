import React from "react";
import MyPic from "./MyPic.jpeg"
function App() {
  return (
    <div>
      <div className="TopBarHeader">
        <h1>Edgardo Escamilla</h1>
        <div className="moreinfotabs">
          <div>
            <a href="https://www.linkedin.com/in/edgardo-bryan-escamilla/">
              Linkden
            </a>
          </div>
          <div>
            <a href="https://github.com/EdgardoBryan">Github</a>
          </div>
          <div>Contact</div>
        </div>
      </div>
      <div className="ProfileDescription">
        <div className="leftsidebio">
          <h3>
            Hello My Name is Edgardo Escamilla and I am a highly motivated
            fullstack developer who specializes in javascript using react js
          </h3>
        </div>
        <div className="RightSideImage">
          <img src={MyPic}  alt="edgardo"/>
        </div>
      </div>
    </div>
  );
}

export default App;

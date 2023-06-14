import React from "react";
import amplelogo from "C:/Users/mihir/.vscode/amplewebsite/src/assets/AmpleBig.svg";
import videobg from "C:/Users/mihir/.vscode/amplewebsite/src/assets/SunsetBetterVideo.mp4";
import "C:/Users/mihir/.vscode/amplewebsite/src/index.css";

const Home = () => {
  return (
    <div> 
      <div>
        <video className = "overlay" src={videobg} autoPlay loop muted/>
          <div className = "content"> 

              <img src={amplelogo}></img>
          </div>
        
      </div>
    </div>
  );
};

export default Home;



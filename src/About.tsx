import './Common.css';
import React from "react";

const About: React.FC = () => (
  <div id="wrapper">
    <div id="main">
      <div className="inner">
        <div id="container06" className="container columns full">
          <div className="wrapper">
            <div className="inner">
              <div>
                <h1> PWA</h1>
              </div>
              <div>
                <ul id="links01" className="links">
                  <li className="n01"><a href="/">Home</a></li>
                  <li className="n02"><a href="/about">About</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id="container02" className="container default full">
          <div className="wrapper">
            <div className="inner">
              <h1 id="text01" className="style4">About Us: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam odio quam, tempor non adipiscing nec, aliquet quis arcu.
              </h1>
            </div>
          </div>
        </div>
        <div id="container01" className="container default full">
          <div className="wrapper">
            <div className="inner">
              <h2 id="text02" className="style5">Since 2015, PWA was introduced to cover the gap of separate code base and instead achieved using single code base.</h2>
            </div>
          </div>
        </div>
        <div id="container04" className="container columns full">
          <div className="wrapper">
            <div className="inner">
              <div>
                <p id="text06" className="style2">Project Name</p>
              </div>
              <div>
                <p id="text07" className="style1">2020</p>
              </div>
              <div>
                <p id="text08" className="style3">Fusce id purus dui, a tempus quam. Donec gravida commodo felis vel venenatis.</p>
              </div>
            </div>
          </div>
        </div>
        <div id="container05" className="container columns full">
          <div className="wrapper">
            <div className="inner">
              <div>
                <p id="text09" className="style2">Project Name</p>
              </div>
              <div>
                <p id="text10" className="style1">2021</p>
              </div>
              <div>
                <p id="text11" className="style3">Fusce id purus dui, a tempus quam. Donec gravida commodo felis vel venenatis.</p>
              </div>
            </div>
          </div>
        </div>
        <div id="container03" className="container columns full">
          <div className="wrapper">
            <div className="inner">
              <div>
                <p id="text03" className="style2">Project Name</p>
              </div>
              <div>
                <p id="text04" className="style1">2022</p>
              </div>
              <div>
                <p id="text05" className="style3">Fusce id purus dui, a tempus quam. Donec gravida commodo felis vel venenatis.</p>
              </div>
            </div>
          </div>
        </div>
        <div id="container07" className="container default full">
          <div className="wrapper">
            <div className="inner">
              <p id="text12" className="style6">
              © 2023 mobileLIVE Inc. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
        <div id="embed02">
          <style dangerouslySetInnerHTML={{ __html: "\n                        @font-face {\n                            font-family: CooperBT-Light;\n                            src: url(https://onepagelove.com/wp-content/themes/onepagelove/frontend/fonts/Cooper.woff2);\n                        }\n                    " }} />
        </div>
      </div>
    </div>
  </div>
);

export default About;

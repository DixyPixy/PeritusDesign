import logo from './assets/logo.svg';
import headphoto from './assets/headphoto.jpg';
import laserMaschine from './assets/laser-machine.svg';
import cut from './assets/cut.svg';
import transport from './assets/transport-2.svg';
import stamp from './assets/stamp.svg';
import cup from './assets/cup.svg';
import stampp from './assets/stamppp.jpg';
import table from './assets/table.jpg';
import microsoftLogo from './assets/logos/Microsoft_logo_(2012).svg';
import arrows from './assets/arrows.svg';

import './App.css';


const App = () => {

  return (
    <div className="App">
      <header className="App-header" id ="header">
      <div id="left" class="headdivs">
                    <p>MO -DO: 08:00 - 12:00 und 13:00 - 17:00, FR 08:00 - 13:00 Uhr</p>
              </div>
      <div id="right" class="headdivs">
                    <p>Sie erreichen uns unter: +43(0) 4585/24567 </p>
             </div>
      </header>
      <div id="nav">
                <div id="logo-pic" class="navDivs">
                <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div id="navbar" class="navDivs">
                    <ul>
                        <a href="#"><li>Leistungen</li></a>
                        <a href="#"><li>Bücher</li></a>
                         <a href="#"><li>Über uns</li></a>
                         <a href="#"><li>Referenzen</li></a>
                          <a href="#"><li>Kontakt</li></a>
                    </ul>
                </div>
            
                  <div className="hamburger" onclick="myFunction()" >
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                  </div>
            </div>
    <div id="header-pic">
            <img src={headphoto} alt="logo" />
                               
            <div class="slideshow-container">
    
      </div>
  
    
    </div>
  
<div id="main">

<a href="#"><div><img src={laserMaschine} alt="laser-masicne" /><p>Lasertechnik</p></div></a>
<a href="#"><div><img src={cut} alt="laser-masicne" /><p>Gravurtechnik</p></div></a>
<a href="#"> <div><img src={transport} alt="laser-masicne" /><p>Tampondruck</p></div></a>
<a href="#"> <div><img src={laserMaschine} alt="laser-masicne" /><p>Werbetechnik</p></div></a>
<a href="#"><div><img src={stamp} alt="laser-masicne" /><p>Stempel</p></div></a>
<a href="#"> <div><img src={cup} alt="laser-masicne" /><p>Pokale</p></div></a>

</div>
<div id="sidebar">
                <div>
                <h3>Unser Stampelshop</h3>
                <p>Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Molestias tempore, corrupti 
                    praesentium ad odio ab assumenda minus, v
                    ero doloremque esse aliquam! Sunt ut 
                    voluptas neque ex minus porro autem sequi?</p>
                    <button><a href="#">zum Shop</a></button>
                </div>
            </div>
            <div id="ueberUns">
                <div>
                    <h3>Über uns</h3>
                    <p>Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Molestias tempore, corrupti 
                        praesentium ad odio ab assumenda minus, v
                        ero doloremque esse aliquam! Sunt ut 
                        voluptas neque ex minus porro autem sequi?</p>
                       <button> <a href="#">mehr erfahren</a></button>
                        
            </div>
            <div id="unsereKunden"><h2>Unsere Kunden</h2></div>
        </div>
        <div id="masc-photo-right">
        <img src={stampp} alt="stamp2"/>

        </div>
            <div id="masc-photo-left">
            <img src={table} alt="table"/>
            </div>

            <div className="slider">    
   
   <a href="#"> <div><img src={microsoftLogo} alt="laser-masicne" /></div></a>
   <a href="#"> <div><img src={microsoftLogo} alt="laser-masicne" /></div></a>
   <a href="#"> <div><img src={microsoftLogo} alt="laser-masicne" /></div></a>
   <a href="#"> <div><img src={microsoftLogo} alt="laser-masicne" /></div></a>
   <a href="#"> <div><img src={microsoftLogo} alt="laser-masicne" /></div></a>
   <a href="#"> <div><img src={microsoftLogo} alt="laser-masicne" /></div></a>
   <a href="#"> <div><img src={microsoftLogo} alt="laser-masicne" /></div></a>
     
   </div>
              <div id="footer">
                <div className="footerNav">
                    <ul>
                      <a href="#">  <li>Foobar</li></a>
                       <a href="#"> <li>Über uns</li></a>
                       <a href="#"> <li>Kontakt</li></a>
                      <a href="#">  <li>Impressum</li></a>
                    
                    </ul>
                    <div><a href="#header"><img src={arrows} alt="nach-oben-scroll"/></a>
                        <p>nach oben</p>
                    </div>
                    <p>@Copyright 2016 Peritus Webdesign</p>
                </div>
            </div>      
    </div>
  );
}


export default App;

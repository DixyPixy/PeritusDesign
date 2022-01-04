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
import React from 'react';
import ReactDOM from 'react-dom';
import './stylings/App.scss';


const App = () => {
  
  const quotes = [
    { 
      quote: "I love you the more in that I believe you had liked me for my own sake and for nothing else",
      author: "John Keats"
    },
    { 
      quote: "I have not failed. I've just found 10,000 ways that won't work.",
      author: "Thomas A. Edison"
    },
    { 
      quote: "But man is not made for defeat. A man can be destroyed but not defeated.",
      author: "Ernest Hemingway"
    },
    {
      quote: "The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.",
      author: "Albert Einstein"
    },
    {
      quote: "The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.",
      author: "Jane Austen"
    }  
  ];
    const [quoteData, getQuoteData] = React.useState(quotes);
    const [current, setCurrent] = React.useState(0);
    const [quote, getQuote] = React.useState(quoteData[current])
    
    React.useEffect(
      () => getQuote(quoteData[current]), 
      [current, quote]
    )
    
    const nextQuote = () => {
      current === quoteData.length-1 ?
        setCurrent(0)
      :
        setCurrent(current + 1)
    }
    
    const prevQuote = () => {
      current === 0 ?
        setCurrent(quoteData.length-1)
      :
        setCurrent(current - 1)
    }
    
    const dotPicksQuote = (e) => setCurrent(Number(e.target.id))
    
    console.log(current)

    

    const myFunction = () => {
      const x = document.getElementById("navbar");
      if (x.style.display === "flex") {
        x.style.display = "none";
        
      } else {
        x.style.display = "flex";
      }
    }
  

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
            
                  <div className= "hamburger" onClick={()=> { 
                    myFunction();
                   
                  }} >
                    <div className="bar bar1" ></div>
                    <div className="bar bar2" ></div>
                    <div className="bar bar3" ></div>
                  </div>
            </div>
    <div id="header-pic">
            <img src={headphoto} alt="logo" />
            
            <section>
      <div className="slideshow-container">
        <Slide quote={quote} />
        <Arrows nextQuote={nextQuote}
                prevQuote={prevQuote} />
        <Dots dotQty={quoteData} 
            current={current}
            dotPicksQuote={dotPicksQuote} />
      </div>
      
    </section>  
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
    </div>
  );
}
function Slide({quote}) {
  return (
    <div className="mySlides">
      <q>{quote.quote}</q>
      <p className="author">&mdash;{quote.author}</p>
    </div>
  )
}

function Arrows({nextQuote, prevQuote}) {
  return (
    <>    
      <a onClick={prevQuote} className="prev" id="prev">&#10094;</a>
      <a onClick={nextQuote} className="next" id="next">&#10095;</a>
    </>
  )
}

function Dots({dotQty, current, dotPicksQuote}) {
  return (
    <div className="dot-container">
      {
        dotQty.map((dot, i) => {
          return <span id={i} className={current === i ? "dot active" : "dot"}
                        onClick={dotPicksQuote}></span>
        })
      }
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))

export default App();





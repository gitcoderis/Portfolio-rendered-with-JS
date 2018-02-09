"use strict";

///////// Constructors /////////
function getElemId(id) {
  return document.getElementById(id);
}

function selectElem(element) {
  return document.querySelectorAll(element);
}

function Element() {

  // creates new element with ID in any parent element ID and adds innerHTML
  this.createElem = function(element, parentElement, newElemId, innerHtml='') {
    let elem = document.createElement(element);
    elem.setAttribute("id", newElemId);
    getElemId(parentElement).appendChild(elem);
    getElemId(newElemId).innerHTML = innerHtml;
  };

  this.addStyle = function(Id, styleFromObject) {
    let elem = selectElem(Id);  // gets array of elements
    for(let i = 0; i < elem.length; i++) { // loops elem
      for(let x in styleFromObject) {
        elem[i].style[x] = styleFromObject[x];  //ads style to elements in elem
      }
    }
  };


  this.addElements = function(WhereToAdd, whatToAdd) {
    let dest = selectElem(WhereToAdd);
    for(let i = 0; i < dest.length; i++) {
      for(let x in whatToAdd) {
        dest[i].innerHTML += whatToAdd[x];
      }
    }
  };


}



///////// Page begins /////////


// BODY

//add link rel to document head
(function(fileName){
  let head = document.head,
      link = document.createElement("link");

link.type = "text/css"
link.rel = "stylesheet"
link.href = fileName

head.appendChild(link)

})('https://fonts.googleapis.com/css?family=Titillium+Web');


let pageBody = {
  // html: {
  //   container: { data: "<div class='main_container'></div>" }
  // },
  style: {
    body: { margin: "0 auto", fontFamily: "'Titillium Web', sans-serif" },
    main_container: { maxWidth: "1280px", margin: "0 auto" }
  }
};
//add style to body from pageBody object
for(let x in pageBody.style.body) {
  document.body.style[x] = pageBody.style.body[x];
}

// let page = new Element();
//
// page.addElements('#page', pageBody.html.container);
// page.addStyle('#page', pageBody.style.body);





// NAVBAR
let navData = {
  html: {
    container: {data: "<div class='container'></div>"},
    logo: { data: "<div class='logo_container'><img src='./assets/logo.png' alt='Logo'></div>" },
    links: { data: "<div class='nav_links'><ul><li class='active'>Home</li><li>About</li><li>Work</li><li>Blog</li><li>Contact</li></ul></div>" },
  },
  style: {
    page: {
      width: "100%", height: "60px", backgroundColor: "#87509c", textAlign: "center",
       paddingTop: "45px", color: "white"
    },
    container: {
      maxWidth: "1140px", margin: "0 auto", padding: "0px 20px"
    },
    logo_container: {
      float: "left", height: "70px", marginTop: "10px"
    },
    nav_links: {
      float: "right"
    },
    nav_links_li: {
      display: "inline-block", marginLeft: "45px", cursor: "pointer", fontSize: "16px", textTransform: "uppercase"
    },
    nav_links_active: {
      backgroundColor: "#643a79", padding: "5px 15px", borderRadius: "5px"
    }
  }
};


let nav = new Element();
              //element, parentElement, newElemId, innerHtml=''
nav.createElem('nav', 'page', 'nav');

                //WhereToAdd, whatToAdd
nav.addElements('#nav', navData.html.container);
nav.addElements('.container', navData.html.logo);
nav.addElements('.container', navData.html.links);
nav.addStyle('#nav', navData.style.page);
nav.addStyle('.container', navData.style.container);
nav.addStyle('.logo_container', navData.style.logo_container);
nav.addStyle('.nav_links', navData.style.nav_links);
nav.addStyle('.active', navData.style.nav_links_active);
nav.addStyle('.nav_links > ul > li', navData.style.nav_links_li);


// HERO
let heroData = {
  html: {
    container: {data: "<div class='container'></div>"},
    welcomeMsg: { data: "<h1 class='welcomeMsg'>Hi there! We are the new kids on the block and we build awesome websites and mobile apps.</h1>" },
    cta: { data: "<button>WORK WITH US!</button>" },
  },
  style: {
    page: {
      width: "100%", minHeight: "480px", backgroundColor: "#87509c", textAlign: "center",
      // lineHeight: "60px", paddingTop: "60px", color: "white"
    },
    container: {
      maxWidth: "1198px", margin: "0 20px", textAlign: "center"
    },
    welcomeMsg: {
      margin: "0 auto", padding: "110px 0px 60px 0px", textAlign: "center", clear: "both", color: "white", fontSize: "42px", maxWidth: "900px", lineHeight: "50px"
    },
    cta: {
      marginBottom: "145px", textAlign: "center", color: "white", fontSize: "18px", backgroundColor: "#eb7d4b", padding: "30px 80px", borderRadius: "5px",
      borderStyle: "solid", borderTopWidth: "0px", borderLeftWidth: "0px", borderRightWidth: "0px", borderBottomWidth: "4px", borderBottomColor: "#c86a40"
    },
    nav_links: {
      float: "right"
    },
    nav_links_li: {
      display: "inline-block", marginLeft: "15px", cursor: "pointer"
    }
  }
};

let hero = new Element();
hero.createElem('section', 'page', 'hero');
                //WhereToAdd, whatToAdd
hero.addElements('#hero', heroData.html.container);
hero.addElements('#hero > .container', heroData.html.welcomeMsg);
hero.addElements('#hero', heroData.html.cta);
hero.addStyle('#hero', heroData.style.page);
hero.addStyle('.welcomeMsg', heroData.style.welcomeMsg);
hero.addStyle('button', heroData.style.cta);
// nav.addStyle('.container', heroData.style.container);
// nav.addStyle('.logo_container', heroData.style.logo_container);
// nav.addStyle('.nav_links', heroData.style.nav_links);
// nav.addStyle('.nav_links > ul > li', heroData.style.nav_links_li);

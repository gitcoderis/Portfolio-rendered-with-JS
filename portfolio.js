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
    logo: { data: "<div class='logo_container'><b>Logo</b></div>" },
    links: { data: "<div class='nav_links'><ul><li>Home</li><li>About</li><li>Work</li><li>Blog</li><li>Contact</li></ul></div>" },
  },
  style: {
    page: {
      width: "100%", height: "60px", backgroundColor: "#87509c", textAlign: "center",
      lineHeight: "60px", paddingTop: "60px", color: "white"
    },
    container: {
      maxWidth: "1198px", margin: "0 20px"
    },
    logo_container: {
      float: "left"
    },
    nav_links: {
      float: "right"
    },
    nav_links_li: {
      display: "inline-block", marginLeft: "15px", cursor: "pointer"
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
nav.addStyle('.nav_links > ul > li', navData.style.nav_links_li);


// HERO
let heroData = {
  html: {
    container: {data: "<div class='container'></div>"},
    logo: { data: "<div class='logo_container'><b>Logo</b></div>" },
    links: { data: "<div class='nav_links'><ul><li>Home</li><li>About</li><li>Work</li><li>Blog</li><li>Contact</li></ul></div>" },
  },
  style: {
    page: {
      width: "100%", height: "600px", backgroundColor: "#87509c", textAlign: "center",
      // lineHeight: "60px", paddingTop: "60px", color: "white"
    },
    container: {
      maxWidth: "1198px", margin: "0 20px"
    },
    logo_container: {
      float: "left"
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
nav.addElements('#hero', heroData.html.container);
nav.addElements('.container', heroData.html.logo);
nav.addElements('.container', heroData.html.links);
nav.addStyle('#nav', heroData.style.page);
nav.addStyle('.container', heroData.style.container);
nav.addStyle('.logo_container', heroData.style.logo_container);
nav.addStyle('.nav_links', heroData.style.nav_links);
nav.addStyle('.nav_links > ul > li', heroData.style.nav_links_li);

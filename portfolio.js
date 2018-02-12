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
      maxWidth: "1140px", margin: "0 20px", textAlign: "center"
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


// SERVICES


let servicesData = {
  html: {
    container: {data: "<div class='container'></div>"},
    sectionTitle: { data: "<h1 class='sectionTitle'>SERVICES WE PROVIDE</h1>" },
    hr: {data: "<hr>"},
    subtitle: { data: "<p>We are working with both individuals and businesses from all over the globe to create awesome websites and applications.</p>" },
    servicesDivsContainer: {data: "<div class='servicesContainer'></div>"},
    servicesDivs: {
      branding: "<div><img src='./assets/veliav.png' alt='Flag' /><h3>Branding</h3><p class='mainText'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.</p></div>",
      design: "<div><img src='./assets/piest.png' alt='Flag' /><h3>Design</h3><p class='mainText'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.</p></div>",
      developement: "<div><img src='./assets/raket.png' alt='Flag' /><h3>Developement</h3><p class='mainText'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.</p></div>",
      science: "<div><img src='./assets/gear.png' alt='Flag' /><h3>Rocket Science</h3><p class='mainText'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.</p></div>",
    }
  },
  style: {
    page: {
      width: "100%", minHeight: "480px", backgroundColor: "#17c2a4", textAlign: "center",
      // lineHeight: "60px", paddingTop: "60px", color: "white"
    },
    container: {
      maxWidth: "1140px", textAlign: "center"
    },
    sectionTitle: {
      margin: "0 auto", padding: "90px 0px 0px 0px", textAlign: "center", color: "white", fontSize: "30px", letterSpacing: "2px", maxWidth: "900px"
    },
    hr: {backgroundColor: "black", opacity: "0.5", width: "90px", height: "4px", borderWidth: "0px"},
    subtitle: {
      fontSize: "15px", color: "white", lineHeight: "20px", maxWidth: "600px", margin: "0 auto", paddingTop: "5px", paddingBottom: "80px"
    },
    h3: {
      fontSize: "16px", color: "white", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "5px"
    },
    servicesContainer: {
      paddingBottom: "30px"
    },
    servicesDivs: {
      display: "inline-block", width: "25%", maxWidth: "260px", flaot: "left", padding: "0px 20px"

    },
    servicesImgs: {
      width: "100%"
    }
  }
};

let services = new Element();
services.createElem('section', 'page', 'services');
                //WhereToAdd, whatToAdd
services.addElements('#services', servicesData.html.container);
services.addElements('#services > .container', servicesData.html.sectionTitle);
services.addElements('#services > .container', servicesData.html.hr);
services.addElements('#services > .container', servicesData.html.subtitle);
services.addElements('#services > .container', servicesData.html.servicesDivsContainer);
services.addElements('#services > .container > .servicesContainer', servicesData.html.servicesDivs);
services.addStyle('#services', servicesData.style.page);
services.addStyle('.sectionTitle', servicesData.style.sectionTitle);
services.addStyle('hr', servicesData.style.hr);
services.addStyle('h3', servicesData.style.h3);
services.addStyle('p', servicesData.style.subtitle);
services.addStyle('.servicesContainer', servicesData.style.servicesContainer);
services.addStyle('.servicesContainer > div', servicesData.style.servicesDivs);
services.addStyle('.servicesContainer > div > img', servicesData.style.servicesImgs);


// TEAM


let teamData = {
  html: {
    container: {data: "<div class='container'></div>"},
    sectionTitle: { data: "<h1 class='sectionTitleDark'>MEET OUR BEAUTIFUL TEAM</h1>" },
    hr: {data: "<hr>"},
    subtitle: { data: "<p>We are a small team of designers and developers, who help brands with big ideas.</p>" },
    teamDivsContainer: {data: "<div class='teamContainer'></div>"},
    teamDivs: {
      memb1: "<div><div class='teamMember'></div><h3>ANNE HATHAWAY</h3><h4>CEO / Marketing Guru</h4><p class='mainText'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.</p><a href='#'><div class='icon' href='#'><img src='./assets/mail.png' alt='email' /></div></a><a href='#'><div class='icon' href='#'><img src='./assets/tw.png' alt='twitter' /></div></a><a href='#'><div class='icon' href='#'><img src='./assets/fb.png' alt='fb' /></div></a><a href='#'><div class='icon' href='#'><img src='./assets/in.png' alt='Linkedin' /></div></a></div>",
      memb2: "<div><div class='teamMember'></div><h3>Kate Upton</h3><h4>Creative Director</h4><p class='mainText'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.</p><a href='#'><div class='icon' href='#'><img src='./assets/mail.png' alt='email' /></div></a><a href='#'><div class='icon' href='#'><img src='./assets/tw.png' alt='twitter' /></div></a><a href='#'><div class='icon' href='#'><img src='./assets/in.png' alt='Linkedin' /></div></a></div>",
      memb3: "<div><div class='teamMember'></div><h3>Olivia Wilde</h3><h4>Lead Designer</h4><p class='mainText'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.</p><a href='#'><div class='icon' href='#'><img src='./assets/mail.png' alt='email' /></div></a><a href='#'><div class='icon' href='#'><img src='./assets/tw.png' alt='twitter' /></div></a><a href='#'><div class='icon' href='#'><img src='./assets/fb.png' alt='fb' /></div></a><a href='#'><div class='icon' href='#'><img src='./assets/in.png' alt='Linkedin' /></div></a></div>",
      memb4: "<div><div class='teamMember'></div><h3>Ashley Greene</h3><h4>SEO / Developer</h4><p class='mainText'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.</p><a href='#'><div class='icon' href='#'><img src='./assets/mail.png' alt='email' /></div></a><a href='#'><div class='icon' href='#'><img src='./assets/tw.png' alt='twitter' /></div></a><a href='#'><div class='icon' href='#'><img src='./assets/in.png' alt='Linkedin' /></div></a></div>",
    }
  },
  style: {
    page: {
      width: "100%", minHeight: "480px", backgroundColor: "#e7f1f8", textAlign: "center",
      // lineHeight: "60px", paddingTop: "60px", color: "white"
    },
    container: {
      maxWidth: "1140px", textAlign: "center"
    },
    sectionTitleDark: {
      margin: "0 auto", padding: "90px 0px 0px 0px", textAlign: "center", color: "#3c4761", fontSize: "30px", letterSpacing: "2px", maxWidth: "900px"
    },
    hr: {backgroundColor: "black", opacity: "0.15", width: "90px", height: "4px", borderWidth: "0px"},
    subtitle: {
      fontSize: "15px", color: "#3c4761", lineHeight: "20px", maxWidth: "600px", margin: "0 auto", paddingTop: "5px", paddingBottom: "0px"
    },
    h3: {
      fontSize: "16px", color: "black", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "0px"
    },
    h4: {
        fontSize: "12px", color: "#30bae7", letterSpacing: "1px", margin: "5px auto", paddingTop: "0px"
      },
    mainText: {
        color: "black"
      },
    teamContainer: {
      paddingBottom: "100px", marginTop: "0px"
    },
    teamDivs: {
      verticalAlign: "top", display: "inline-block", width: "25%", maxWidth: "260px", flaot: "left", padding: "0px 20px"

    },
    teamMember: {
      width: "160px", height: "160px", backgroundColor: "grey", borderRadius: "50%", margin: "50px auto 0px auto"
    },
    icon: {
      width: "34px", height: "33px", backgroundColor: "#bdd1df", borderRadius: "50%", display: "inline-block", margin: "0 6px", paddingTop: "1px"
    }
  }
};

let team = new Element();
team.createElem('section', 'page', 'team');
                //WhereToAdd, whatToAdd
team.addElements('#team', teamData.html.container);
team.addElements('#team > .container', teamData.html.sectionTitle);
team.addElements('#team > .container', teamData.html.hr);
team.addElements('#team > .container', teamData.html.subtitle);
team.addElements('#team > .container', teamData.html.teamDivsContainer);
team.addElements('#team > .container > .teamContainer', teamData.html.teamDivs);
team.addStyle('#team', teamData.style.page);
team.addStyle('.sectionTitleDark', teamData.style.sectionTitleDark);
team.addStyle('hr', teamData.style.hr);
team.addStyle('#team > .container > .teamContainer > div > h3', teamData.style.h3);
team.addStyle('#team > .container > .teamContainer > div > h4', teamData.style.h4);
team.addStyle('#team > .container > p', teamData.style.subtitle);
team.addStyle('.teamContainer', teamData.style.teamContainer);
team.addStyle('.teamContainer > div', teamData.style.teamDivs);
team.addStyle('.teamContainer > div > .teamMember', teamData.style.teamMember);
team.addStyle('.icon', teamData.style.icon);
// team.addStyle('.mainText', teamData.style.mainText);





// SKILLS



let skillsData = {
  html: {
    container: {data: "<div class='container'></div>"},
    sectionTitle: { data: "<h1 class='sectionTitleDark'>WE GOT SKILLS!</h1>" },
    hr: {data: "<hr>"},
    subtitle: { data: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>" },
    skillsDivsContainer: {data: "<div class='skillsContainer'></div>"},
    skillsDivs: {
      branding: "<div><img src='./assets/b.png' alt='' /><h3>WEB DESIGN</h3></div>",
      design: "<div><img src='./assets/r.png' alt='' /><h3>HTML / CSS</h3></div>",
      developement: "<div><img src='./assets/g.png' alt='' /><h3>GRAPHIC DESIGN</h3></div>",
      science: "<div><img src='./assets/o.png' alt='' /><h3>UI / UX</h3></div>",
    }
  },
  style: {
    page: {
      width: "100%", minHeight: "480px", backgroundColor: "#fff", textAlign: "center",
      // lineHeight: "60px", paddingTop: "60px", color: "white"
    },
    container: {
      maxWidth: "1140px", textAlign: "center"
    },
    sectionTitleDark: {
      margin: "0 auto", padding: "90px 0px 0px 0px", textAlign: "center", color: "#3c4761", fontSize: "30px", letterSpacing: "2px", maxWidth: "900px"
    },
    hr: {backgroundColor: "black", opacity: "0.15", width: "90px", height: "4px", borderWidth: "0px"},
    subtitle: {
      fontSize: "15px", color: "#3c4761", lineHeight: "20px", maxWidth: "600px", margin: "0 auto", paddingTop: "5px", paddingBottom: "0px"
    },
    h3: {
      fontSize: "16px", color: "black", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "0px"
    },
    skillsContainer: {
      paddingBottom: "30px", margin: "30px 0 60px 0"
    },
    skillsDivs: {
      display: "inline-block", width: "25%", maxWidth: "160px", flaot: "left", padding: "0px 20px", margin: "0px 50px"

    },
    skillsImgs: {
      width: "100%", marginTop: "20px"
    }
  }
};

let skills = new Element();
skills.createElem('section', 'page', 'skills');
                //WhereToAdd, whatToAdd
skills.addElements('#skills', skillsData.html.container);
skills.addElements('#skills > .container', skillsData.html.sectionTitle);
skills.addElements('#skills > .container', skillsData.html.hr);
skills.addElements('#skills > .container', skillsData.html.subtitle);
skills.addElements('#skills > .container', skillsData.html.skillsDivsContainer);
skills.addElements('#skills > .container > .skillsContainer', skillsData.html.skillsDivs);
skills.addStyle('#skills', skillsData.style.page);
skills.addStyle('.sectionTitleDark', skillsData.style.sectionTitleDark);
skills.addStyle('hr', skillsData.style.hr);
skills.addStyle('#skills > .container > h3', skillsData.style.h3);
skills.addStyle('#skills > .container > p', skillsData.style.subtitle);
skills.addStyle('.skillsContainer', skillsData.style.skillsContainer);
skills.addStyle('#skills > .container > .skillsContainer > div', skillsData.style.skillsDivs);
skills.addStyle('.skillsContainer > div > img', skillsData.style.skillsImgs);



// PORFOLIO



let folioData = {
  html: {
    container: {data: "<div class='container'></div>"},
    sectionTitle: { data: "<h1 class='sectionTitleDark'>OUR PORTFOLIO</h1>" },
    hr: {data: "<hr>"},
    subtitle: { data: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>" },
    links: { data: "<div class='nav_links'><ul><li class='btn-white'>All</li><li class='btn-dark'>WEB</li><li class='btn-dark'>APPS</li><li class='btn-dark'>ICONS</li></ul></div>" },
    folioDivsContainer: {data: "<div class='folioContainer'></div>"},
    folioDivs: {
      1: "<div><img src='./assets/1.png' alt='' /><h3>Isometric Perspective Mock-Up</h3></div>",
      2: "<div><img src='./assets/2.png' alt='' /><h3>Time Zone App UI</h3></div>",
      3: "<div><img src='./assets/3.png' alt='' /><h3>Viro Media Players UI</h3></div>",
      4: "<div><img src='./assets/4.png' alt='' /><h3>Blog / Magazine Flat UI Kit</h3></div>",
    },
    cta: { data: "<button>Load more projects</button>" },

  },

  style: {
    page: {
      width: "100%", minHeight: "480px", backgroundColor: "#ffdd99", textAlign: "center",
      // lineHeight: "60px", paddingTop: "60px", color: "white"
    },
    container: {
      maxWidth: "1140px", textAlign: "center"
    },
    sectionTitleDark: {
      margin: "0 auto", padding: "90px 0px 0px 0px", textAlign: "center", color: "#3c4761", fontSize: "30px", letterSpacing: "2px", maxWidth: "900px"
    },
    hr: {backgroundColor: "black", opacity: "0.15", width: "90px", height: "4px", borderWidth: "0px"},
    subtitle: {
      fontSize: "15px", color: "#3c4761", lineHeight: "20px", maxWidth: "600px", margin: "0 auto", paddingTop: "5px", paddingBottom: "0px"
    },
    h3: {
      fontSize: "16px", color: "black", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "10px", marginTop: "0px"
    },
    nav_links: {
      paddingLeft: "0px"
    },
    nav_links_li: {
      display: "inline-block", margin: "0 5px", cursor: "pointer", fontSize: "16px", textTransform: "uppercase"
    },
    nav_links_active: {
      backgroundColor: "#fff", padding: "5px 15px", borderRadius: "5px"
    },
    nav_links_notActive: {
      backgroundColor: "rgba(0,0,0,.1)", padding: "5px 15px", borderRadius: "5px"
    },
    folioContainer: {
      paddingBottom: "80px", marginTop: "30px"
    },
    folioDivs: {
      display: "inline-block", width: "45%", maxWidth: "520px", flaot: "left", padding: "0px 0px", margin: "0px 20px"

    },
    folioImgs: {
      width: "100%", marginTop: "20px"
    },
    cta: {
      marginBottom: "80px", textAlign: "center", color: "white", fontSize: "14px", backgroundColor: "#17c2a4", padding: "20px 50px", borderRadius: "5px",
        borderStyle: "solid", borderTopWidth: "0px", borderLeftWidth: "0px", borderRightWidth: "0px", borderBottomWidth: "4px", borderBottomColor: "#14a58c", textTransform: "uppercase"
      },



  }
};

let folio = new Element();
folio.createElem('section', 'page', 'folio');
                //WhereToAdd, whatToAdd
folio.addElements('#folio', folioData.html.container);
folio.addElements('#folio > .container', folioData.html.sectionTitle);
folio.addElements('#folio > .container', folioData.html.hr);
folio.addElements('#folio > .container', folioData.html.subtitle);
folio.addElements('#folio > .container', folioData.html.links);
folio.addElements('#folio > .container', folioData.html.folioDivsContainer);
folio.addElements('#folio > .container > .folioContainer', folioData.html.folioDivs);
folio.addElements('#folio > .container', folioData.html.cta);
folio.addStyle('#folio', folioData.style.page);
folio.addStyle('.sectionTitleDark', folioData.style.sectionTitleDark);
folio.addStyle('hr', folioData.style.hr);
folio.addStyle('#folio > .container > .nav_links > ul', folioData.style.nav_links);
folio.addStyle('#folio > .container > .nav_links > ul > li', folioData.style.nav_links_li);
folio.addStyle('#folio > .container > .nav_links > ul > .btn-white', folioData.style.nav_links_active);
folio.addStyle('#folio > .container > .nav_links > ul > .btn-dark', folioData.style.nav_links_notActive);
folio.addStyle('#folio > .container > .folioContainer > div > h3', folioData.style.h3);
folio.addStyle('#folio > .container > p', folioData.style.subtitle);
folio.addStyle('.folioContainer', folioData.style.folioContainer);
folio.addStyle('#folio > .container > .folioContainer > div', folioData.style.folioDivs);
folio.addStyle('.folioContainer > div > img', folioData.style.folioImgs);
folio.addStyle('#folio > .container > button', folioData.style.cta);





// ABOUT



let aboutData = {
  html: {
    container: {data: "<div class='container'></div>"},
    sectionTitle: { data: "<h1 class='sectionTitle'>WHAT PEOPLE SAY ABOUT US</h1>" },
    hr: {data: "<hr>"},
    subtitle: { data: "<p>Our clients love us!</p>" },
    // links: { data: "<div class='nav_links'><ul><li class='btn-white'>All</li><li class='btn-dark'>WEB</li><li class='btn-dark'>APPS</li><li class='btn-dark'>ICONS</li></ul></div>" },
    aboutDivsContainer: {data: "<div class='aboutContainer'></div>"},
    aboutDivs: {
      1: `
      <div style='vertical-align: top; max-width: 40%; display: inline-block;'>
        <div style=' float: left;'>
          <div style='width: 50px; height:50px; background-color: grey; border-radius: 50%; display: inline-block;'></div>
        </div>
        <div style=' text-align: left'>
          <p>“Nullam dapibus blandit orci, viverra gravida dui lobortis eget. Maecenas fringilla urna eu nisl scelerisque.”</p>
          <h3>CHANEL IMAN</h3>
          <h4>CHANEL IMAN</h4>
        </div>
      </div>`,
      2: `
      <div style='vertical-align: top; max-width: 40%; display: inline-block;'>
        <div style=' float: left;'>
          <div style='width: 50px; height:50px; background-color: grey; border-radius: 50%; display: inline-block;'></div>
        </div>
        <div style=' text-align: left'>
          <p>“Nullam dapibus blandit orci, viverra gravida dui lobortis eget. Maecenas fringilla urna eu nisl scelerisque.”</p>
          <h3>CHANEL IMAN</h3>
          <h4>CHANEL IMAN</h4>
        </div>
      </div>`,
      3: `
      <div style='vertical-align: top; max-width: 40%; display: inline-block;'>
        <div style=' float: left;'>
          <div style='width: 50px; height:50px; background-color: grey; border-radius: 50%; display: inline-block;'></div>
        </div>
        <div style=' text-align: left'>
          <p>“Nullam dapibus blandit orci, viverra gravida dui lobortis eget. Maecenas fringilla urna eu nisl scelerisque.”</p>
          <h3>CHANEL IMAN</h3>
          <h4>CHANEL IMAN</h4>
        </div>
      </div>`,
      4: `
      <div style='vertical-align: top; max-width: 40%; display: inline-block;'>
        <div style=' float: left;'>
          <div style='width: 50px; height:50px; background-color: grey; border-radius: 50%; display: inline-block;'></div>
        </div>
        <div style=' text-align: left'>
          <p>“Nullam dapibus blandit orci, viverra gravida dui lobortis eget. Maecenas fringilla urna eu nisl scelerisque.”</p>
          <h3>CHANEL IMAN</h3>
          <h4>CHANEL IMAN</h4>
        </div>
      </div>`,
    },
    // cta: { data: "<button>Load more projects</button>" },

  },

  style: {
    page: {
      width: "100%", minHeight: "480px", backgroundColor: "#d74680", textAlign: "center",
      // lineHeight: "60px", paddingTop: "60px", color: "white"
    },
    container: {
      maxWidth: "1140px", textAlign: "center"
    },
    sectionTitle: {
      margin: "0 auto", padding: "90px 0px 0px 0px", textAlign: "center", color: "#fff", fontSize: "30px", letterSpacing: "2px", maxWidth: "900px"
    },
    hr: {backgroundColor: "black", opacity: "0.15", width: "90px", height: "4px", borderWidth: "0px"},
    subtitle: {
      fontSize: "15px", color: "#fff", lineHeight: "20px", maxWidth: "600px", margin: "0 auto", paddingTop: "5px", paddingBottom: "0px"
    },
    h3: {
      fontSize: "16px", color: "white", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "0px", marginTop: "20px", textAlign: "left"
    },
    // nav_links: {
    //   paddingLeft: "0px"
    // },
    // nav_links_li: {
    //   display: "inline-block", margin: "0 5px", cursor: "pointer", fontSize: "16px", textTransform: "uppercase"
    // },
    // nav_links_active: {
    //   backgroundColor: "#fff", padding: "5px 15px", borderRadius: "5px"
    // },
    // nav_links_notActive: {
    //   backgroundColor: "rgba(0,0,0,.1)", padding: "5px 15px", borderRadius: "5px"
    // },
    italic: {
      fontSize: "15px", color: "#fff", lineHeight: "20px", maxWidth: "600px", margin: "0 auto", paddingTop: "5px", paddingBottom: "0px", textAlign: "left", fontStyle: "italic"
    },
    aboutContainer: {
      paddingBottom: "80px", marginTop: "30px"
    },
    aboutDivs: {
     maxWidth: "520px", padding: "0px 0px", margin: "10px 20px", textAlign: "left"

    },
    h4: {
        fontSize: "12px", color: "#ffdd99", letterSpacing: "1px", margin: "5px auto 25px auto", paddingTop: "0px"
      },
    // aboutImgs: {
    //   width: "100%", marginTop: "20px"
    // },
    // cta: {
    //   marginBottom: "80px", textAlign: "center", color: "white", fontSize: "14px", backgroundColor: "#17c2a4", padding: "20px 50px", borderRadius: "5px",
    //     borderStyle: "solid", borderTopWidth: "0px", borderLeftWidth: "0px", borderRightWidth: "0px", borderBottomWidth: "4px", borderBottomColor: "#14a58c", textTransform: "uppercase"
    //   },
    //


  }
};

let about = new Element();
about.createElem('section', 'page', 'about');
                //WhereToAdd, whatToAdd
about.addElements('#about', aboutData.html.container);
about.addElements('#about > .container', aboutData.html.sectionTitle);
about.addElements('#about > .container', aboutData.html.hr);
about.addElements('#about > .container', aboutData.html.subtitle);
about.addElements('#about > .container', aboutData.html.aboutDivsContainer);
about.addElements('#about > .container > .aboutContainer', aboutData.html.aboutDivs);
about.addStyle('#about', aboutData.style.page);
about.addStyle('#about > .container > .sectionTitle', aboutData.style.sectionTitle);
about.addStyle('hr', aboutData.style.hr);
about.addStyle('#about > .container > .aboutContainer > div > div > h3', aboutData.style.h3);
about.addStyle('#about > .container > .aboutContainer > div > div > h4', aboutData.style.h4);
about.addStyle('#about > .container > p', aboutData.style.subtitle);
about.addStyle('.aboutContainer', aboutData.style.aboutContainer);
about.addStyle('#about > .container > .aboutContainer > div > div', aboutData.style.aboutDivs);
about.addStyle('#about > .container > .aboutContainer > div > div > p', aboutData.style.italic);
about.addStyle('.aboutContainer > div > div > img', aboutData.style.aboutImgs);

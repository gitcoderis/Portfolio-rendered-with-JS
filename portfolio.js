"use strict";

///////// Constructors /////////
function getElemId(id) {
  return document.getElementById(id);
}

function elementStyle(element) {
  return document.getElementById(element).style;
}

// creates new element with ID in any parent element ID and adds innerHTML
function Element() {

  this.createElem = function(element, parentElement, newElemId, innerHtml='') {
    let elem = document.createElement(element);
    elem.setAttribute("id", newElemId);
    getElemId(parentElement).appendChild(elem);
    getElemId(newElemId).innerHTML = innerHtml;
  };

  this.addStyle = function(Id, styleFromObject) {
    for(let x in styleFromObject) {
      elementStyle(Id)[x] = styleFromObject[x];
    }
  };

  //should add elements to already existing IDs or Classes:
  // this.addElements = function(Id, styleFromObject) {
  //   for(let x in styleFromObject) {
  //     elementStyle(Id)[x] = styleFromObject[x];
  //   }
  // };

}






///////// Page begins /////////


// BODY

//add link rel to document head
(function(fileName){
  var head = document.head
  , link = document.createElement("link")

link.type = "text/css"
link.rel = "stylesheet"
link.href = fileName

head.appendChild(link)

})('https://fonts.googleapis.com/css?family=Titillium+Web');


let pageBody = {
  style: {margin: "0 auto", fontFamily: "'Titillium Web', sans-serif"}
};
//add style to body from pageBody object
for(let x in pageBody.style) {
  document.body.style[x] = pageBody.style[x];
}




//navbar
let navData = {
  style: {width: "100%", height: "80px", backgroundColor: "red", textAlign: "center", lineHeight: "80px"},
  colors: {color: "white"}
};

let nav = new Element();
nav.createElem('div', 'page', 'nav', '<b>Hello World!</b>');
nav.createElem('div', 'page', 'asdf');
nav.addStyle('nav', navData.style);
nav.addStyle('nav', navData.colors);

//
// let testinis = {
//   a: 1,
//   b: 2,
//   c: 3
// };
//
// for(let x in testinis) {
//   console.log(testinis[x]);
// }

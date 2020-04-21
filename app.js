//const handler = (event) {}

//function changeSize(params) {}

// document.addEventListener('keyup', handler);

//document.removeEventListener('keyup', handler);
//const startElementStyle = window.getComputedStyle(document.getElementById(elementId));

window.addEventListener("load", event => {
     const startElementStyle = window.getComputedStyle(document.getElementById("balloon"));
});

const balloonHandler = function balloon(event) {

     switch (event.keyCode) {
          // i = 73 inflate by 10px 
          case 73:
               updateSize("balloon", 10.0, "inflate");
               break;
          // d = 68 deflate by 10px
          case 68:
               updateSize("balloon", 10.0, "deflate");
               break;
          default:
               break;
     }
     //event.preventDefault(event);
};

function updateSize(elementId, amount, action) {
//find first div element
     element = document.getElementById(elementId);
//element style
     let elementStyle = window.getComputedStyle(document.getElementById(elementId));
//element font size
     let elementSize = elementStyle.fontSize;
//element size number
     let elementSizeNum = parseFloat(elementSize.split("p", 2)[0]);

//add or subtract 10
     if (action === "inflate") {
          elementSizeNum += amount;
          if (elementSizeNum > 60) {
               limitReached("div", "big");
          }         
     } else {
          elementSizeNum -= amount;
          if (elementSizeNum <= 0) {
               limitReached("div", "small");
          } 
     }
     let updatedSize = elementSizeNum + "px";
     element.style.fontSize = updatedSize;
};
/*//done or boom
     if (elementSizeNum <= 0) {
         limitReached("div", "small");
     } else if (elementSizeNum > 60) {
         limitReached("div", "big");
     } else {
//set new font size
         let updatedSize = elementSizeNum + "px";
         element.style.fontSize = updatedSize;
     }
     
}; */

function limitReached(elementId, limit) {
     const doneElement = document.createElement("div");
     doneElement.id = "done";
     doneElement.textContent = "Done";
     const boomElement = document.createElement("div");
     boomElement.id = "boom";
     boomElement.textContent = "💥";
     if (limit === "small") {
          document.getElementById("container").replaceChild(doneElement, document.getElementById("balloon"));
     } else {
          document.getElementById("container").replaceChild(boomElement, document.getElementById("balloon"));
     }
     document.removeEventListener("keyup", balloonHandler);
}



document.addEventListener("keyup", balloonHandler);
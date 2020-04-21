//const handler = (event) {}

//function changeSize(params) {}

// document.addEventListener('keyup', handler);

//document.removeEventListener('keyup', handler);


const balloonHandler = function balloon(event) {
     switch (event.keyCode) {
          // i = 73 inflate by 10px 
          case 73:
               updateSize("balloon", 10, "inflate");
               break;
          // d = 68 deflate by 10px
          case 68:
               updateSize("balloon", 10, "deflate");
               break;
          default:
               break;
     }

};

function updateSize(elementId, amount, action) {
//find first div element
     element = document.getElementById(elementId);
//element style
     let elementStyle = getComputedStyle(element);
//element font size
     let elementSize = elementStyle.fontSize;
//element size number
     let elementSizeNum = parseInt(elementSize.split("px", 1)[0]);

//add or subtract 10
     if (action === "inflate") {
          elementSizeNum += amount;          
     } else {
          elementSizeNum -= amount;
     }

// done or boom
     if (elementSizeNum === 0) {
          limitReached("balloon", "small");
     } else if (elementSizeNum > 60) {
          limitReached("balloon", "big");
     } else {
//set new font size
          let updatedSize = elementSizeNum + "px";
          element.style.fontSize = updatedSize;
          console.log(elementSize);
     }
     
};

function limitReached(elementId, limit) {
     if (limit === "small") {
          document.getElementById(elementId).innerHTML = "Done";
     } else {
          document.getElementById(elementId).innerHTML = "💥";
     }
     document.removeEventListener("keyup", balloonHandler);
}



document.addEventListener("keyup", balloonHandler);
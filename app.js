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
     let elementSizeNum = parseInt(elementSize);
     let value = Number(elementSizeNum);

//add or subtract 10
     if (action === "inflate") {
          value += amount;
                  
     } else {
          value -= amount;
     }

//done or boom
//font size will not drop below 1px
//when font size=10 and "d" key subtracts 10, 10-10=0px or 1px
     if (value <= 1) {
         limitReached("div", "small");
     } else if (value > 60) {
         limitReached("div", "big");
     } else {
//set new font size
         let updatedSize = value + "px";
         element.style.fontSize = updatedSize;
     }
     
};

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
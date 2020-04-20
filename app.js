//const handler = (event) {}

//function changeSize(params) {}

// document.addEventListener('keyup', handler);

//document.removeEventListener('keyup', handler);
const keyboardInfo = e => {
     console.log(`Keyboard event: ${e.type}, key: ${e.keyCode}`);
};

document.addEventListener("keyup", keyboardInfo);
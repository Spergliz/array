//array

//HTML
let containerE1 = document.getElementById("container");
//global
let myData = [];
for (let n = 1; n <= 5; n++) {
  myData.push(Math.random() * 600);
}

//display
drawarray();

function drawarray() {
  let outputstr = "";
  for (let i = 0; i < myData.length; i++) {
    outputstr += `<div style="height: ${myData[i]}px"></div>`;
  }
  containerE1.innerHTML = outputstr;
}
//key
document, addEventListener("keydown", keydownhandler);
function keydownhandler(event) {
  if (event.keyCode === 38) {
    myData.push(Math.random() * 600);
  } else if (event.keyCode === 40) {
   myData.pop()
    
  }
  //redraw
  drawarray();
}

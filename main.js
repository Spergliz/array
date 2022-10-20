//array

//HTML
let containerE1 = document.getElementById("container")
//global
let myData = [];
for (let n=1; n<=20; n++){
  myData.push(Math.random()*600);
}


//display
drawarray();

function drawarray() {
  let outputstr = "";
  for (let i = 0; i < myData.length; i++) {
    console.log(myData[i]);
    outputstr += `<div style="height: ${myData[i]}px"></div>`
  }
  containerE1.innerHTML = outputstr;
}

//key
document,addEventListener("keydown",keydownhandler);
function keydownhandler(event){
  console.log(event.keyCode)
  myData[0] = 600;
}
 
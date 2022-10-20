//array

//HTML
let containerE1 = document.getElementById("container")
//global
let myData = [];
for (let n=1; n<=20; n++){
  myData.push(300);
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

function getNewDivElement(){
  const divElement= document.createElement("div");
  return divElement;
}

function getSquere(){
  const mainElement= document.querySelector("main");
  
  const bigSquere= getNewDivElement();
  bigSquere.classList.add("big-squere", "m-auto", "d-flex", "flex-wrap", "p-0");
  
  mainElement.append(bigSquere);
  
  for(let i = 1; i <= 100; i++){
    let smallSquere= getNewDivElement();
    smallSquere.classList.add("small-squere", "d-flex", "justify-content-center", "align-items-center");
    bigSquere.append(smallSquere);
    smallSquere.append(i);
    smallSquere.addEventListener("click", function(){
      smallSquere.classList.toggle("active")
    })
  }
}

const buttonPlay= document.getElementById("play");

buttonPlay.addEventListener("click", function(){
  getSquere()
  buttonPlay.disabled= true;
})
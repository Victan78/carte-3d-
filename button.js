const ombr = document.getElementById('boutton');
const carte= document.getElementById('cartes');
const carte2= document.getElementById('cartes2')
const carte3= document.getElementById('cartes3')
const boxi= document.getElementById('cards');
const boxi1= document.getElementById('cards1');
const boxi2= document.getElementById('cards2');
const boxi3= document.getElementById('cards3');
const carti= document.querySelector('.carti')
const conteneur= document.getElementById('conteneurdecarte');
const anima =document.querySelectorAll(".cardi");
function shadoww() {
    if (ombr.checked ) {
        for (let index = 1; index < 5; index++) {
            const element = document.getElementById(`cards${index}`);
            const elementcarte = document.getElementById(`cartes${index}`);
            if(elementcarte.style.opacity<1){
              elementcarte.classList.toggle('cardi');
              element.style.filter =" brightness(0.1)";
              elementcarte.style.boxShadow="0px 0px 15px 2px rgb(167, 197, 50)"
            }
           
           
         } 
        console.log("on")
       
        boxi.style.filter =" brightness(0.1)";
     
      }
    else { 
    for (let index = 1; index < 20; index++) {
            const element = document.getElementById(`cards${index}`);
            const elementcarte = document.getElementById(`cartes${index}`);
            elementcarte.classList.remove('cardi')
            element.style.filter =" brightness(1)";
            elementcarte.style.boxShadow="0px 8px 15px 1px rgb(50, 50, 50)"
         } 
    
    console.log("gjhghgjh")
    ombr.style.background ="white"
    ombr.style.color = "black"
    boxi.style.filter =" brightness(1)";
    boxi1.style.filter =" brightness(1)";
    boxi2.style.filter =" brightness(1)";
    boxi3.style.filter =" brightness(1)";

  }
};
function cliquer(nombre) {


      const element = document.getElementById(`cards${nombre}`);
      const elementcarte = document.getElementById(`cartes${nombre}`);
      elementcarte.style.transform="perspective(800px) rotateX(20deg) rotateZ(-10deg)";
      element.style.filter =" brightness(1)";
      elementcarte.style.boxShadow="0px 0px 15px 2px rgb(167, 197, 50)"
     
    
      carte.style.width="30vw"
      carte.style.zIndex="2"
}





 
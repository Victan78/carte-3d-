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
  var body= document.querySelector('body');
  body.style.background = "black";
           
           
         } 
        
      
 
    
 cliquer(nombre) {


      const element = document.getElementById(`cards${nombre}`);
      const elementcarte = document.getElementById(`cartes${nombre}`);
      elementcarte.style.transform="perspective(800px) rotateX(20deg) rotateZ(-10deg)";
      element.style.filter =" brightness(1)";
      elementcarte.style.boxShadow="0px 0px 15px 2px rgb(167, 197, 50)"
     
    
      carte.style.width="30vw"
      carte.style.zIndex="2"
}





 
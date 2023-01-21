const titre=document.getElementById('titre');
const box= document.querySelectorAll('.card');
const glow = document.querySelectorAll('.glow');

const anim =document.querySelectorAll(".cardi");
/*tu met les titres que tu veux dans la liste*/
var liste=["llll","mmm","ffff","le gros ourson"];


function choisir(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
  };

setInterval(()=>
{
    titre.innerText=choisir(liste)
},1000)


box.forEach(el =>{
  el.addEventListener("mousemove", e =>{

      let elrect = el.getBoundingClientRect()
      
      let x = e.clientX - elrect.x
      let y = e.clientY - elrect.y

      let midcardwidth = elrect.width / 2
      let midcardheight = elrect.height / 2
      let angleY = -(x - midcardwidth) / 8
      let angleX = (y - midcardheight) / 8.5

      let glowX = x / elrect.width * 100
      let glowY = y / elrect.height * 100
      
      el.children[1].style.opacity = `0.7`
      el.style.transition = `all 0.2s `
      el.style.transform = `perspective(800px)  rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1 )`
      el.children[1].style.background = `url("https://media.istockphoto.com/id/964809716/fr/photo/arri%C3%A8re-plan-holographique.jpg?s=612x612&w=0&k=20&c=iTkIFs7wyomdohXeqEpddb5okdGzJiTri6rI70qS1VU="),url("https://www.shutterstock.com/shutterstock/photos/691823437/display_1500/stock-vector-bright-and-colorful-seamless-holographic-texture-vector-hologram-abstract-background-seamless-691823437.jpg"),url("https://static.vecteezy.com/system/resources/thumbnails/004/269/024/small/rainbow-holographic-background-with-texture-vector.jpg"),radial-gradient(circle at ${glowX}% ${glowY}% ,   rgba(40, 255, 255, 0.1) -100%, 
      black 30%, 
      grey 30%, 

      black 20%`
      
  })
  el.addEventListener("mouseleave",()=>{
     
      el.children[1].style.opacity=`0.2`
      el.children[0].style.opacity = `1`
      el.style.transition = `all 0.5s `
      el.style.transform = `rotateX(0) rotateY(0) `
  })
  el.addEventListener("mouseover",()=>{
    el.style.transition = `all 1s `
    el.style.background=`none`
    el.children[0].style.opacity = `1`
  })


});







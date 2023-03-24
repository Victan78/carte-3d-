/*const titre=document.getElementById('titre');*/
var box= document.querySelectorAll('.card');
var glow = document.querySelectorAll('.glow');

var anim =document.querySelectorAll(".cardi");
/*tu met les titres que tu veux dans la liste*/
var liste=["llll","mmm","ffff","le gros ourson"];


function choisir(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
  };

  



const apikey="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"
const url = 'https://api.openai.com/v1/images/generations';
const boutton_submit= document.getElementById('submit_boutton')

const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${apikey}`
};

const data = {
  'model': 'image-alpha-001',
  'prompt': `${prompt.value}`,
  'num_images': 1,
  'size': '512x512',
  'response_format': 'url'
};
var conteneurs=document.getElementById('conteneurdecarte');
function Dream(promptValue) {
  try {
    return fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        'model': 'image-alpha-001',
        'prompt': promptValue,
        'num_images': 1,
        'size': '512x512',
        'response_format': 'url'
      })
    })
      .then(response => response.json())
      .then(data => {
        const imageUrl = data.data[0].url;
        console.log(data);
        console.log(`Generated image URL: ${imageUrl}`);
        var ok=document.createElement('div')
        ok.classList.add('card')
        ok.innerHTML=`<img src="${imageUrl}" alt="image">
        <div class="glow"></div>
        <div class="cardi">`
        conteneurs.appendChild(ok);
        box= document.querySelectorAll('.card')
        coco()
        console.log("ok");
        return imageUrl;
      })
      .catch(error => {
        console.error(error);
      });
  } catch (error) {
    console.error(error);
  }
}


  

boutton_submit.addEventListener('click',()=>{Dream(`${document.getElementById('dream_text').value}`)})
async function  coco(){
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
  console.log("ok")

})};
coco()











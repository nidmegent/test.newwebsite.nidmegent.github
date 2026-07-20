gsap.registerPlugin(ScrollTrigger);

// Loader

window.onload=()=>{

setTimeout(()=>{

gsap.to("#loader",{

opacity:0,

duration:1,

onComplete(){

document.getElementById("loader").style.display="none"

}

})

},2000)

}

// Cursor

const cursor=document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

})

// Lenis

const lenis=new Lenis()

function raf(time){

lenis.raf(time)

requestAnimationFrame(raf)

}

requestAnimationFrame(raf)

// Hero Animation

gsap.from(".hero h1",{

y:100,

opacity:0,

duration:1.5,

delay:2

})

gsap.from(".hero p",{

opacity:0,

y:50,

delay:2.4

})

// Header

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

gsap.to("header",{

background:"#050505",

padding:"25px 70px",

duration:.3

})

}else{

gsap.to("header",{

background:"transparent",

padding:"35px 70px",

duration:.3

})

}

})


// About Animation

gsap.from(".about h2",{

scrollTrigger:{

trigger:".about",

start:"top 70%"

},

y:100,

opacity:0,

duration:1

})

gsap.from(".about p",{

scrollTrigger:{

trigger:".about"

},

opacity:0,

delay:.3,

duration:1

})


// Cards

gsap.from(".card",{

scrollTrigger:{

trigger:".division",

start:"top 75%"

},

opacity:0,

y:100,

duration:1,

stagger:.2

})


// Hero Parallax

gsap.to(".hero video",{

scale:1.15,

scrollTrigger:{

trigger:".hero",

scrub:true

}

})

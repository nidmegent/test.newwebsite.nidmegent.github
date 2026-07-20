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

// Loading

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},3000);

});

// Scroll Animation

const fades=document.querySelectorAll(".fade");

window.addEventListener("scroll",()=>{

fades.forEach(item=>{

const top=item.getBoundingClientRect().top;

if(top<window.innerHeight-100){

item.classList.add("show");

}

});

});

// Particles

particlesJS("particles-js",{

particles:{
number:{value:80},
color:{value:"#00aaff"},
shape:{type:"circle"},
opacity:{value:0.5},
size:{value:3},
move:{speed:2}
}

});

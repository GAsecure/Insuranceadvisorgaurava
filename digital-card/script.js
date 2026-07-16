document.addEventListener("DOMContentLoaded",()=>{

document.querySelectorAll(".buttons a").forEach(btn=>{

btn.addEventListener("click",()=>{

navigator.vibrate?.(20);

});

});

});

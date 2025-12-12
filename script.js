let img = document.querySelector(".card img");
let love = document.querySelector("i");



img.addEventListener('dblclick',function(){
    love.style.opacity = 1;
    love.style.transform = `translate(-50%,-50%) scale(1) rotate(0deg)`;
    

    setTimeout(function(){
     love.style.transform = `translate(-50%,-300%) scale(1) rotate(60deg)`;
    },800)
    setTimeout(function(){
        love.style.opacity = 0;
    },1000)

    setTimeout(function(){
        llove.style.transform = `translate(-50%,-50%) scale(0) rotate(-60deg)`;
    },1100)
})

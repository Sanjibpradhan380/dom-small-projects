// var elems = document.querySelectorAll('.elem');

// elems.forEach(function(elem){
//     elem.addEventListener('click',function(){
        
//     })
// })

let allbtn = document.querySelectorAll('button');
let h2s = document.querySelectorAll('h2');


allbtn.forEach(function(elems){
    elems.addEventListener('click',function(){
       if(elems.innerHTML =="Add Friend"){
         elems.innerHTML = 'Remove Fried';
       }else{
        elems.innerHTML ="Add Friend";
       }
    })
})
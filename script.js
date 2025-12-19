
let keys= document.querySelectorAll('.key');

const sounds ={
    0:'28.mp3',
    1:'29.mp3',
    2:'30.mp3',
    3:'31.mp3',
    4:'32.mp3',
    5:'33.mp3',
    6:'34.mp3',
    7:'35.mp3',
    8:'36.mp3',
    9:'37.mp3',
    10:'38.mp3',
    11:'39.mp3'
};

keys.forEach((key, index) => {
key.addEventListener('click', () => {
const audio = new Audio(sounds[index]);
audio.currentTime = 0;
audio.play();
});
});


let bank =['manushya','rakhda','diksha','sonam'];
bank.forEach((key,index)=>{
    console.log(`${key}, ${index}`);
});
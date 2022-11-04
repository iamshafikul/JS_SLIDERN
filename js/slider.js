
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
let slideNumber = 1;
const images = document.querySelectorAll('.image');
const length = images.length;

right.addEventListener('click', ()=>{
    if(slideNumber < length){
        slider.style.transform = `translateX(-${slideNumber * 800}px)`;
        slideNumber++;
        resetBg();
        buttons[slideNumber - 1].style.backgroundColor = 'white';
    }else{
        slider.style.transform = `translateX(0px)`;
        slideNumber = 1;
        resetBg();
        buttons[slideNumber - 1].style.backgroundColor = 'white';
    }
    
});

left.addEventListener('click', ()=>{
    if(slideNumber > 1){
        slider.style.transform = `translateX(-${(slideNumber - 2) * 800}px)`;
        slideNumber--;
        resetBg();
        buttons[slideNumber - 1].style.backgroundColor = 'white';
    }else{
        slider.style.transform = `translateX(-${(length - 1) * 800}px)`;
        slideNumber = length;
        resetBg();
        buttons[slideNumber - 1].style.backgroundColor = 'white';
    }
           
});

const bottom = document.querySelector('.bottom');

for(var i = 0; i < length; i++){
    const div = document.createElement("div");
    div.className = "button";
    bottom.appendChild(div);
}

const buttons = document.querySelectorAll('.button');
buttons[0].style.backgroundColor = "white";

const resetBg = ()=>{
    buttons.forEach(button=>{
        button.style.backgroundColor = 'transparent';
    })
}

buttons.forEach((button, index)=>{
    button.addEventListener('click', ()=>{
        resetBg();
        slider.style.transform = `translateX(-${index * 800}px)`;
        slideNumber = index + 1;
        button.style.backgroundColor = "white";
    });
})
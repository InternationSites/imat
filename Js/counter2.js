let section = document.querySelector(".banner_titulo");
let valueDisplays = document.querySelectorAll(".data_num");
let start = false;

window.onscroll = function(){
    if(window.scrollY >= section.offsetTop){
        if(!start){
            valueDisplays.forEach((data_num) => startCount(data_num));
        }
        start = true;
    }
}


function startCount(el){
    let max = el.dataset.max;
    let count = setInterval (() => {
        el.textContent++;
        if(el.textContent == max){
            clearInterval(count);
        }
    }, 2000 / valueDisplays)
}
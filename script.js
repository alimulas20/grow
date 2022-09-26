const [red, green, blue] = [129, 191, 248 ]
const [l_r,l_g,l_b]=[248,220,100]
const body = document.querySelector('body')
const grow= document.querySelector('#text_bot')
const sliderTop=document.querySelector('#scroller_top')
const sliderBot=document.querySelector('#scroller_bot')
window.addEventListener("scroll",function(event){
var scroll =this.scrollY;
console.log(scroll);
let y = (scroll || window.pageYOffset) / 1300

const [r, g, b] = [(l_r-red)*y+red, (l_g-green)*y+green, (l_b-blue)*y+blue].map(Math.round)
body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;


grow.style.fontSize=`clamp(4rem,${scroll/3}px,20rem)`;
if(scroll>600){
    sliderTop.style.marginLeft=`${600-scroll}px`;
}
if(scroll>1100){
    sliderBot.style.marginLeft=`${-300+(scroll-1100)/5}px`
}

});
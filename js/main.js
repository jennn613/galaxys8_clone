'use strict';

//버튼 클릭 시 맨 위로
const topBtn = document.querySelector('.topBtn'); //고정된 버튼
const footerBtnParent = document.querySelector('.footer_btns'); //버튼 parent
const footerBtn = footerBtnParent.querySelectorAll('a');

function scrollTop() {
    window.scrollTo({top:0, behavior:'smooth'});
}

topBtn.addEventListener('click', ()=> {

    scrollTop();

});

footerBtn[1].addEventListener('click', (e)=> {
    e.preventDefault();
    scrollTop();

});

//footer로 스크롤시 topbtn 사라지게
const footerWrap = document.querySelector('#footer_wrap');
let footerHeight = footerWrap.getBoundingClientRect().top;

document.addEventListener ('scroll', ()=> {
    
    if(window.scrollY > footerHeight)
    {
        topBtn.style.display= 'none';
    }
    else {
        topBtn.style.display= 'block';
    }

});

//헤더 불투명하게

const header = document.querySelector('#header_wrap'); //header
let headerHeight = header.clientHeight;

document.addEventListener ('scroll', ()=> {
    
    if(window.scrollY > headerHeight)
    {
        header.style.opacity= '0.9';
    }
    else {
        header.style.opacity= '1';
    }

});

'use strict';

//header불투명하게

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

//heaer 메뉴에 hover일 때 ::before 나타내기

const headerList = document.querySelectorAll('.header_nav_list_item');
const headerListLine = document.querySelector('.header_nav_list_hover');

function showLine() {
headerListLine.style.display ='block';
headerListLine.style.width = headerList[0].offsetWidth + 'px';
headerListLine.style.left= headerList[0].offsetLeft + 'px';
}

headerList.forEach(function(list, i){
    
    showLine();

list.addEventListener('mouseenter', (a) => {
    
    a.preventDefault();

headerListLine.style.display ='block';
headerListLine.style.width = list.offsetWidth + 'px';
headerListLine.style.left= list.offsetLeft + 'px';

})

list.addEventListener('mouseleave', (a) => {

    a.preventDefault();

        showLine();
})
});


// header toggle 눌렀을 때 메뉴 보이기

// const headerToggle = document.querySelector('.header_toggle');
// const hiddenSection = document.querySelector('.toggle_menu');

// headerToggle.addEventListener('click', (a)=> {
// a.preventDefault();
// hiddenSection.style.display = 'block';
// });


// color 메뉴에 hover일 때 아래 선 나타내기


//color slider


//footer 버튼 누르면 아래 메뉴 생기게

// const netWorkBtn = document.querySelector('.footer_settings_network');
// const netWorkMode = document.querySelector('.footer_settings_network_options');

// netWorkBtn.addEventListener('click', (a) => {

//     a.preventDefault();
//     netWorkMode.style.display = 'block';
//     netWorkMode.style.height = 'auto';
// })


// footer버튼 누르면 darkmode로 바꾸기

// const colorSettingBox = document.querySelector('.footer_settings_color');
// const colorBtn = colorSettingBox.querySelectorAll('a');
// const darkBtn = colorBtn[0];
// const all = document.documentElement;

// darkBtn.addEventListener('click', (a) => {

// a.preventDefault();
// all.classList.add('dark');

// })



const topBtn = document.querySelector('.topBtn'); //고정된 버튼
const footerBtnParent = document.querySelector('.footer_btns'); //버튼 parent
const footerBtn = footerBtnParent.querySelectorAll('a');
const textSection = document.querySelector('#section_text_wrap');
let textSectionY = textSection.getBoundingClientRect().y;

function scrollTop() {
    window.scrollTo({top: 0, behavior:'smooth'});
}

function scrollDown() {
    window.scrollTo({top:textSectionY, behavior: 'smooth'});
}

//topBtn header 높이 만큼 내렸을 때 위로 가게, scroll 0일 때는 아래로 가게

document.addEventListener('scroll', ()=> {

    if(window.scrollY > headerHeight){
        topBtn.style.transform = 'rotate(180deg)';
        topBtn.addEventListener('click', ()=> {
            scrollTop();
        });
    }
    else {
        topBtn.style.transform = 'rotate(0)';
        topBtn.addEventListener('click', ()=> {
            scrollDown();
        });
    }
  
})

//footer로 스크롤시 topbtn 사라지게
const footerWrap = document.querySelector('#footer_wrap');
let footerY = footerWrap.getBoundingClientRect().y;

document.addEventListener ('scroll', ()=> {
    
    if(window.scrollY > footerY)
    {
        topBtn.style.display= 'none';
    }
    else {
        topBtn.style.display= 'block';
    }

});


// footer more 누르면 아래 div block, 보이기

footerBtn[0].addEventListener('click', (a)=> {
    a.preventDefault();
    scrollTop();

});

//footer back to top 누르면 맨 위로 가게

footerBtn[1].addEventListener('click', (a)=> {
    a.preventDefault();
    scrollTop();

});

'use strict';

const wrap = document.querySelector('#wrap');

//header불투명하게

const header = document.querySelector('#header_wrap'); //header
let headerHeight = header.clientHeight; //header 높이

document.addEventListener ('scroll', ()=> {
    
    if(window.scrollY > headerHeight)
    {
        header.style.opacity= '0.9';
    }
    else {
        header.style.opacity= '1';
    }

});

//heaer 메뉴에 hover일 때 위에 선 보이기

const headerList = document.querySelectorAll('.header_nav_list_item'); // header ul
const headerListLine = document.querySelector('.header_nav_list_hover'); //header list 위의 선

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

});

list.addEventListener('mouseleave', (a) => {

    a.preventDefault();

        showLine();
});

});


// header toggle 눌렀을 때 메뉴 보이기

// const headerToggle = document.querySelector('.header_toggle');
// const hiddenSection = document.querySelector('.toggle_menu');

// headerToggle.addEventListener('click', (a)=> {
// a.preventDefault();
// hiddenSection.style.display = 'block';
// });


// color nav에 hover일 때 아래 선 나타내기

const colorNav = document.querySelector('.color_nav_device'); //ul
const colorNavList = colorNav.querySelectorAll('li'); //li
const colorNavLine = colorNav.querySelector('.color_nav_line'); //line

function showColorNavLine() {
    colorNavLine.style.display ='block';
    colorNavLine.style.width = colorNavList[0].offsetWidth + 'px';
    colorNavLine.style.left= colorNavList[0].offsetLeft + 'px';
     }

colorNavList.forEach(function(list){
    
    showColorNavLine();

list.addEventListener('mouseenter', (a) => {
    
    a.preventDefault();

colorNavLine.style.display ='block';
colorNavLine.style.width = list.offsetWidth + 'px';
colorNavLine.style.left= list.offsetLeft + 'px';

});

list.addEventListener('mouseleave', (a) => {

    a.preventDefault();

        showColorNavLine();
});

});

//color slider


const topBtn = document.querySelector('.topBtn'); //고정된 버튼
const footerBtnParent = document.querySelector('.footer_btns'); //버튼 parent
const footerBtn = footerBtnParent.querySelectorAll('a'); //버튼 childreb
const textSection = document.querySelector('#section_text_wrap'); //text wrap
let textSectionY = textSection.getBoundingClientRect().y; //text section의 y값


function scrollTop() {
    window.scrollTo({top: 0, behavior:'smooth'});
};

function scrollDown() {
    window.scrollTo({top:textSectionY, behavior: 'smooth'});
};

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
  
});

//footer로 스크롤시 topbtn 사라지게
const footerWrap = document.querySelector('#footer_wrap');
let footerY = footerWrap.getBoundingClientRect().y;

let windowHeight = window.innerHeight;
let documentHeight = wrap.getBoundingClientRect().height;
let footerHeight = footerWrap.getBoundingClientRect().height;

let setScrollTop = documentHeight - windowHeight + footerHeight;

const BtnStatus = function(){

    (window.scrollY >= setScrollTop) ?    
        topBtn.style.display= 'none': 
        topBtn.style.display= 'block';

};

document.addEventListener ('scroll', ()=> {

    BtnStatus();
});


// footer network 버튼 누르면 아래 메뉴 생기게

const netWorkBtnWrap = document.querySelector('.footer_settings_network'); //dl
const netWorkBtn = netWorkBtnWrap.querySelector('dt'); //dt
let netWorkBtnHeight = netWorkBtn.offsetHeight; // dt height
let netWorkBtnWidth = netWorkBtn.offsetWidth; // dt height

const netWorkMenu = netWorkBtnWrap.querySelector('dd'); //dd
const netWorkMenuList = netWorkMenu.querySelectorAll('a'); // dd의 a 


netWorkBtn.addEventListener('click', (a) => {

    a.preventDefault();
    netWorkMenu.style.width = netWorkBtnWidth + 'px';
    
    netWorkMenu.style.top = netWorkBtnHeight + 'px';
    
    const netWorkMenuNone =  window.getComputedStyle(netWorkMenu).display === 'none';

    
    if(netWorkMenuNone) {
        netWorkMenu.style.display = 'block';
        netWorkMenu.style.height = 'auto';
       
    }
    else{
        netWorkMenu.style.display = 'none';
        netWorkMenu.style.height = 0;
    }

});


// footer버튼 누르면 darkmode로 바꾸기

const colorSettingBox = document.querySelector('.footer_settings_color'); // color button 감싼 박스
const colorBtn = colorSettingBox.querySelectorAll('a'); // color button  2개
const darkBtn = colorBtn[0]; //첫번째 버튼 (dark mode)

//dark mode 적용시킬 elements
// const colorMenu = document.querySelector('.color_list');
// const colorList = colorMenu.querySelectorAll('li');
// const colorchevronWrap = document.querySelector('.color_device_chevron_indicator');
// const colorchevron = colorchevronWrap.querySelectorAll('a');
// const colorIndicatorWrap = document.querySelector('.color_device_btn_indicator');
// const colorIndicator = colorIndicatorWrap.querySelectorAll('a');
// const specifiWrap = document.querySelector('#article_specifications');
// const footerShare = footerWrap.querySelector('.footer_share');
// const footerSettings = footerWrap.querySelector('.footer_settings');
// const footerPolicy = footerWrap.querySelector('.footer_policy');

// darkBtn.addEventListener('click', () => {

//     colorNav.classList.add('dark');
//     colorNavList.classList.add('dark');
//     colorMenu.classList.add('dark');
//     colorList.classList.add('dark');
//     colorIndicator.classList.add('dark');
//     colorchevron.classList.add('dark');
//     specifiWrap .classList.add('dark');
//     footerWrap.classList.add('dark');
//     footerSettings.classList.add('dark');
//     footerShare.classList.add('dark');
//     netWorkBtnWrap.classList.add('dark');
//     footerPolicy.classList.add('dark');
// });

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

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

//사진
const devicePicWrap = document.querySelector('.color_device_pic_device'); //div
const deviceSlider = document.querySelector('.color_device_pic_device_slider'); //ul
const devicePicList = deviceSlider.querySelectorAll('li'); //li

let devicePicNum = 3; // 디바이스 하나당 사진 개수
let devicePicColorNum = 3; // 블랙, 블루, 핑크 색 개수
let picShow = 1; // 보일 사진 개수

//색 변경
const colorList = document.querySelector('.color_list'); //ul
const colorListItems = colorList.querySelectorAll('li'); //li

//디바이스 s8, s8+
//const colorNav = document.querySelector('.color_nav_device'); //ul
//const colorNavList = colorNav.querySelectorAll('li'); //li

// < >
const colorChevronWrap = document.querySelector('.color_device_chevron_indicator');
const colorChevron = colorChevronWrap.querySelectorAll('a'); // chevrons

// 동그라미 인디케이터
const colorIndicatorWrap = document.querySelector('.color_device_btn_indicator');
const colorIndicator = colorIndicatorWrap.querySelectorAll('a') //indicators

let deviceFig; //figure
let deviceImg; //img

for(let i=0; i<devicePicList.length; i++){
    deviceFig = devicePicList[i].querySelectorAll('figure'); 
    deviceImg = deviceFig[i].querySelectorAll('img');
}

// let devicePicListAdd; //li를 추가해 줄 변수
// let imgUrl; // img 를 추가해줄 변수

let deviceColor, deviceType;
let colorNum, deviceNum;

function sDeviceImg (color, device) {
    deviceSlider.innerHTML = " "; 

    colorNum = color;

    switch(color) {
        
        case 0:
            deviceColor = 'c1';
            break;
        case 1:
            deviceColor = 'c2';
            break;
        case 2:
            deviceColor = 'c3';
            break;
        default:
            deviceColor = 'c1';
    }

    deviceNum = device;

    switch(device){

        case 0:
        deviceType = '../css/img_galaxy/galaxys8/galaxy-s8_gallery-color_normal-';
        break;

        case 1:
        deviceType = '../css/img_galaxy/galaxys8plus/galaxy-s8-plus_gallery-color_big-';
        break;

        default:
        deviceType = '../css/img_galaxy/galaxys8/galaxy-s8_gallery-color_normal-';
    }


    for(let i=0; i<devicePicNum; i++){

        let devicePicListAdd = document.createElement('li'); //li 추가해주는 변수
        let liContent =`<figure><img src=""><figcaption class="hidden"></figcaption></figure>`;

        let imgUrl = deviceType+deviceColor+'-0'+(i+1)+'.jpg';

        devicePicListAdd.innerHTML = liContent;
        deviceSlider.append(devicePicListAdd);

        deviceImg = devicePicListAdd.querySelectorAll('img');

        deviceImg.forEach(function(pic){
            pic.setAttribute('src', imgUrl);
        });
    }// for    
} //sDeviceImg 끝

sDeviceImg();
// deviceColor, deviceType;
colorListItems.forEach((color, i) => {
    color.addEventListener('click',(e)=> {
        e.preventDefault();
        sDeviceImg(i, deviceNum);
        console.log(deviceNum)
    });

}); // 각 color 눌렀을 때 sDeviceImg 로 값 리턴 해서 색상 변경해주기

colorNavList.forEach((device, i)=> {
    device.addEventListener('click', (e)=> {
        e.preventDefault();
        sDeviceImg(colorNum, i);
    });
});


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
let wrapHeight = wrap.offsetHeight;
let footerHeight = footerWrap.offsetHeight;
let windowHeight = window.innerHeight;

document.addEventListener('scroll', () => {

    if(window.scrollY > wrapHeight - windowHeight - footerHeight){
        topBtn.style.display = 'none';
    }
    else {
        topBtn.style.display = 'block';
    }

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
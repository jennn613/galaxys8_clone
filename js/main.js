'use strict';

const deviceSize = [
    {type: 'mobile', size: 767},
    {type: 'tablet', size: 1024},
    {type: 'pc'}
];

const Resize = function(){
let browserWidth = window.innerWidth;
let type;

for(let i=0; i<deviceSize.length; i++){
    
    if(browserWidth<=deviceSize[i].size){
        type = deviceSize[i].type;
        break;
    }
    else {
        type = deviceSize[deviceSize.length-1].type;
    }
}
return type;
}

const beforeWidth = Resize();

window.addEventListener('resize', ()=> {
    let afterWidth = Resize();
    if (beforeWidth !== afterWidth){
        window.location.reload();
    }

    sDeviceImg();
    showLine();
    showColorNavLine();
    toggleShowLine();
    toggleMenuShow();
});

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

const headerList = document.querySelectorAll('.header_nav_list_item'); // header li
const headerListLine = document.querySelector('.header_nav_list_hover'); //header list 위의 선

function showLine() {
headerListLine.style.display ='block';
headerListLine.style.width = headerList[0].offsetWidth + 'px';
headerListLine.style.left= headerList[0].offsetLeft + 'px';
}

headerList.forEach(function(list, i){
    
    let liNum = i;

    showLine();

list.addEventListener('mouseenter', () => {
    
headerListLine.style.display ='block';
headerListLine.style.width = list.offsetWidth + 'px';
headerListLine.style.left= list.offsetLeft + 'px';

});

list.addEventListener('mouseleave', () => {

        showLine();
});

let headerListA = list.querySelectorAll('a');

headerListA.forEach((a) => {
        
    a.addEventListener('focus', ()=> {
        headerListLine.style.display ='block';

        headerListLine.style.width = headerList[liNum].offsetWidth + 'px';
        headerListLine.style.left= headerList[liNum].offsetLeft + 'px';
    });
});

});

// color nav에 hover일 때 아래 선 나타내기

const colorNav = document.querySelector('.color_nav_device'); //ul
const colorNavList = colorNav.querySelectorAll('li'); //li
const colorNavLine = document.querySelector('.color_nav_line'); //line

 function showColorNavLine() {
     colorNavLine.style.display ='block';
     colorNavLine.style.width = colorNavList[0].offsetWidth + 'px';
     colorNavLine.style.left= colorNavList[0].offsetLeft + 'px';
      }
      
      showColorNavLine();
    
      colorNavList.forEach((list, i)=> {
let num = i;
    list.addEventListener('click', ()=> {
        colorNavLine.style.display ='block';
        setTimeout(()=>{colorNavLine.style.width = colorNavList[num].offsetWidth / 2 + 'px';}, 100);
        setTimeout(()=>{colorNavLine.style.width = colorNavList[num].offsetWidth + 'px';}, 120);
        colorNavLine.style.left= colorNavList[i].offsetLeft + 'px';
    });

    const colorNavListA = list.querySelectorAll('a');

    colorNavListA.forEach((a) => {
        a.addEventListener('focus', ()=> {
            colorNavLine.style.display ='block';
            colorNavLine.style.width = colorNavList[num].offsetWidth + 'px';
            colorNavLine.style.left= colorNavList[num].offsetLeft + 'px';
        });
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

deviceSlider.style.left = 0; // default로 맨 처음 사진 보이게
let devicePicListAdded = deviceSlider.querySelectorAll('li'); //새로 생긴 li 선택

devicePicListAdded.forEach((li) => {
li.style.width = devicePicWrap.offsetWidth + 'px';
});

for(let i=0; i<picShow; i++) {
    let copyLastBox = devicePicListAdded[devicePicListAdded.length-(i+1)].cloneNode(true);
    deviceSlider.prepend(copyLastBox);
}


let imgIdx = 0;

let newPicList = deviceSlider.querySelectorAll('li'); //기존 박스 + copy 된 박스
let devicePicWidth = devicePicListAdded[0].offsetWidth; //사진 하나 가로값 받아오기

devicePicListAdded.forEach((pic)=> {
    pic.style.width = devicePicWrap.offsetWidth + 'px';
});

deviceSlider.style.width = devicePicWidth * newPicList.length + 'px'; //slider 길이 늘이기

deviceSlider.style.marginLeft = -devicePicWidth + 'px';

colorIndicator.forEach((indi)=> {
    indi.classList.remove('active');
});

colorIndicator[imgIdx].classList.add('active');
    

colorChevron[0].addEventListener('click', (e)=> {
e.preventDefault();

imgIdx --;
deviceSlider.style.left = -devicePicWidth * imgIdx + 'px';


if(imgIdx <= -1) {
    deviceSlider.style.left = -devicePicWidth * imgIdx + 'px';
    imgIdx = devicePicListAdded.length - picShow;
    colorIndicator[imgIdx].classList.add('active');
}

colorIndicator.forEach((indi)=> {
    indi.classList.remove('active');
});

if(imgIdx >= 0){
    colorIndicator[imgIdx].classList.add('active'); 
  }
  
}); // < 눌렀을 때

colorChevron[1].addEventListener('click', (e)=> {
    e.preventDefault();
    
    if(imgIdx >= devicePicListAdded.length - picShow){
        deviceSlider.style.left = -devicePicWidth * imgIdx + 'px';
        imgIdx = -1;
    }
    
    imgIdx ++;
    deviceSlider.style.left = -devicePicWidth * imgIdx + 'px';

colorIndicator.forEach((indi)=> {
    indi.classList.remove('active');
});

if(imgIdx >= 0){
    colorIndicator[imgIdx].classList.add('active'); 
  } else {
    colorIndicator[devicePicListAdded.length - picShow].classList.add('active');
  }

});

colorIndicator.forEach((indiClick, i)=> {

    indiClick.addEventListener('click', (e)=> {
    e.preventDefault();

    imgIdx = i;
    deviceSlider.style.left = -devicePicWidth * imgIdx + 'px';

    colorIndicator.forEach((indi) => {
indi.classList.remove('active');
    });

    indiClick.classList.add('active');
});

});



} //sDeviceImg 끝

sDeviceImg();

colorListItems.forEach((color, i) => {
    color.addEventListener('click',(e)=> {
        e.preventDefault();
        sDeviceImg(i, deviceNum);
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

const footerSiteMap = document.querySelector('.footer_sitemap'); // footer 아래 숨겨진 메뉴

// footer more 누르면 아래 div block, 보이기


footerBtn[0].addEventListener('click', (e)=> {
    e.preventDefault();
    let footerBtnTxt = footerBtn[0].querySelector('span');
    let footerBtnIcon = footerBtn[0].querySelector('i');

    if(footerSiteMap.style.display === 'block'){

        footerBtnTxt.innerText = 'more';
        footerBtnIcon.style.transform = 'rotate(0)';
        footerSiteMap.style.height = '0';

        setTimeout(()=>{footerSiteMap.style.display = 'none'; }, 25);

    }
    else {

        footerBtnTxt.innerText = 'close';
        footerBtnIcon.style.transform = 'rotate(180deg)';

        footerSiteMap.style.height = 'auto';
        footerSiteMap.style.display = 'block';

        window.scrollBy({
            top: footerSiteMap.offsetHeight,
            left: 0,
            behavior: 'smooth'
          });
    }
});



//footer back to top 누르면 맨 위로 가게

footerBtn[1].addEventListener('click', (a)=> {
    a.preventDefault();
    scrollTop();

});

// toggle click

const toggle = document.querySelector('.header_toggle');
const toggleMenu = document.querySelector('.toggle_menu'); // toggle 전체 감싼 박스
const toggleNav = document.querySelector('.products_nav'); // toggle nav
const toggleNavMenu = document.querySelector('.products_nav_menu_list'); // nav ul
const toggleNavMenuList = toggleNavMenu.querySelectorAll('li'); // li 선택
const toggleSlider = document.querySelector('.toggle_menu_slider'); // 감싸고있는 큰 박스

const toggleProducts = document.querySelector('.products'); //products 감싼 div
const toggleCampaign = document.querySelector('.campaign'); //campaign 감싼 div
const toggleEvents = document.querySelector('.events'); // events 감싼 div
const toggleApps = document.querySelector('.apps'); //app 감싼 div

const toggleExit = document.querySelector('.products_nav_exit'); // x 버튼

// header hover, focus시 파란 선 보이게
const navListLine = document.querySelector('.products_nav_menu_hover'); //header list 위의 선

function toggleShowLine(){
    navListLine.style.display ='block';
    navListLine.style.width = toggleNavMenuList[0].offsetWidth + 'px';
    navListLine.style.left= toggleNavMenuList[0].offsetLeft + 'px';
};

toggleShowLine();

toggleNavMenuList.forEach((list, i)=> {
list.addEventListener('click', ()=> {
    navListLine.style.display ='block';
    navListLine.style.width = toggleNavMenuList[i].offsetWidth + 'px';
    navListLine.style.left= toggleNavMenuList[i].offsetLeft + 'px';
});
});

toggleNavMenuList.forEach((list, j)=> {

    let toggleNavMenuListA = list.querySelectorAll('a');

    // console.log(toggleNavMenuListA)

    toggleNavMenuListA.forEach((a) => {
        a.addEventListener('focus', ()=> {
            navListLine.style.display ='block';
            navListLine.style.width = toggleNavMenuList[j].offsetWidth + 'px';
            navListLine.style.left= toggleNavMenuList[j].offsetLeft + 'px';
        });
    });
    });

function toggleMenuShow() {
toggleSlider.style.paddingTop = toggleNav.offsetHeight + 'px';

toggleProducts.style.width = window.innerWidth + 'px';
toggleCampaign.style.width = window.innerWidth + 'px';
toggleEvents.style.width = window.innerWidth + 'px';
toggleApps.style.width = window.innerWidth + 'px';

let menuNum = 4; //toggle menu 개수

toggleSlider.style.width =  window.innerWidth * menuNum + 'px';

toggleSlider.style.position = 'relative';


toggleNavMenuList.forEach((list, i) => {
list.addEventListener('click', (e)=> {
e.preventDefault();

toggleSlider.style.left= -window.innerWidth * i + 'px';

});
    });
}

toggle.addEventListener('click', ()=> {

    toggleMenu.style.opacity=1;
    toggleMenu.style.display='block';
    toggleShowLine();
    toggleMenuShow();
});

toggleExit.addEventListener('click', () => {

    toggleMenu.style.opacity=0;
    toggleMenu.style.display='none';
    toggleSlider.style.left= 0;
    toggleShowLine();


});

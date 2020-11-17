
//color slider

//사진
const devicePicWrap = document.querySelector('.color_device_pic_device'); //div
const deviceSlider = document.querySelector('.color_device_pic_device_slider'); //ul
const devicePicList = deviceSlider.querySelectorAll('li'); //li

const devicePicNum = 3; // 디바이스 하나당 사진 개수
const devicePicColorNum = 3; // 블랙, 블루, 핑크 색 개수
let picShow = 1; // 보일 사진 개수

//색
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

let imgUrl; // s8 사진 받아오기
let devicePicListAdd; //li 생성할 변수
let liContent; // li 안에 들어갈 figure, img
let devicePicListAdded; // 새로 생긴 li
let imgIdx; // 슬라이드 변수
let newPicList; // 복사된 마지막 박스 + 원래 박스 합한 박스
let devicePicWidth; //slider 가로값
let device_type;

function deviceType(m){
    let a = '../css/img_galaxy/galaxys8plus/galaxy-s8-plus_gallery-color_normal-';
    let b = '../css/img_galaxy/galaxys8plus/galaxy-s8-plus_gallery-color_big-';

    if(m ==='s8'){
        device_type = a
    }else if(m === 's8plus'){
        device_type = b
    }
    
    return device_type;
}
// s8 c pic

function sDeviceImge(num) {
    deviceSlider.innerHTML = " ";
    let deviceColor; 
    switch(num) {
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

colorListItems.forEach(function(btn, i){
    btn.addEventListener('click', (a)=>{
        a.preventDefault();
        sDeviceImge(i);
    });
});

    for(let i=0; i<devicePicNum; i++){
    
        devicePicListAdd = document.createElement('li'); //li 추가
        liContent =  `<figure><img src=""><figcaption class="hidden"></figcaption></figure>`;
    
        imgUrl ='../css/img_galaxy/galaxys8/galaxy-s8_gallery-color_normal-'+deviceColor+'-0' +  (i+1) + '.jpg';
    
        devicePicListAdd.innerHTML = liContent;
        deviceSlider.append(devicePicListAdd);
    
        deviceImg = devicePicListAdd.querySelectorAll('img');
    
        deviceImg.forEach(function(pic){
            pic.setAttribute('src', imgUrl);
        });

}

deviceSlider.style.left = 0;
devicePicListAdded = deviceSlider.querySelectorAll('li'); //li

 for(let i=0; i<picShow; i++){
  let copyLastBox = devicePicListAdded[devicePicListAdded.length-(i+1)].cloneNode(true);
  deviceSlider.prepend(copyLastBox);
} // 마지막 박스 복사 해주기

devicePicListAdded.forEach(function(pic){
    pic.style.width = devicePicWrap.offsetWidth + 'px';
    });

imgIdx = 0 ;

newPicList = deviceSlider.querySelectorAll('li');
devicePicWidth = devicePicListAdded[0].offsetWidth; //사진 하나 가로
deviceSlider.style.width = devicePicWidth * newPicList.length + 'px';

deviceSlider.style.marginLeft = -devicePicWidth + 'px';

colorIndicator.forEach(function(indi){
  indi.classList.remove('active');
});

colorIndicator[imgIdx].classList.add('active');


    // colorIndicator.forEach((indi, idx) => {

    //     indi.addEventListener('click', (e)=> {
    //         e.preventDefault();
      
    //         deviceSlider.style.left = -devicePicWidth * idx + 'px';
      
    //         colorIndicator.forEach((i) => {
    //             i.classList.remove('active');
    //         });

    //         indi.classList.add('active');
    //     });
    //     });
 
}

function clickChevron() {
    devicePicWidth = devicePicListAdded[0].offsetWidth; //사진 하나 가로
    colorChevron[0].addEventListener('click', (a) => {
        a.preventDefault();
      
        imgIdx--;
        deviceSlider.style.left = -devicePicWidth * imgIdx + 'px';
      
      if(imgIdx <= -1){
          deviceSlider.style.left = -devicePicWidth * imgIdx + 'px';
          imgIdx = devicePicListAdded.length - picShow;
      }
      
      colorIndicator.forEach((indi) => {
          indi.classList.remove('active'); //active class 제거해주기 = default
      });
      
      
      if(imgIdx >= 0){
          colorIndicator[imgIdx].classList.add('active'); //눌렀을 때 추가해주기
      
        }
        else{
          colorIndicator[devicePicListAdded.length - picShow].classList.add('active'); 
          //0보다 작을 때
        }
        
      });
      
      colorChevron[1].addEventListener('click', (a) => {
      
          a.preventDefault();
          
          imgIdx++;
          deviceSlider.style.left = -devicePicWidth * imgIdx + 'px';
          
          if(imgIdx >= devicePicListAdded.length - picShow){
              deviceSlider.style.left = -devicePicWidth * imgIdx + 'px';
              imgIdx = -1;
          }
          
          colorIndicator.forEach((indi) => {
              indi.classList.remove('active'); //active class 제거해주기 = default
          });
          
          if(imgIdx >= 0){
              colorIndicator[imgIdx].classList.add('active'); //눌렀을 때 추가해주기
          
            }else{
              colorIndicator[devicePicListAdded.length - picShow].classList.add('active'); //눌렀을 때 추가해주기 
            }
            
          
          });
}


function plusDeviceImge(num) {
    deviceSlider.innerHTML = " ";
    let deviceColor; 
    switch(num) {
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

colorListItems.forEach(function(btn, i){
    btn.addEventListener('click', (a)=>{
        a.preventDefault();
        plusDeviceImge(i);
    });
});


    for(let i=0; i<devicePicNum; i++){
    
        devicePicListAdd = document.createElement('li'); //li 추가
        liContent =  `<figure><img src=""><figcaption class="hidden"></figcaption></figure>`;
 
        imgUrl = device_type +deviceColor+'-0' +  (i+1) + '.jpg';
    
        devicePicListAdd.innerHTML = liContent;
        deviceSlider.append(devicePicListAdd);
    
        deviceImg = devicePicListAdd.querySelectorAll('img');
    
        deviceImg.forEach(function(pic){
            pic.setAttribute('src', imgUrl);
        });

}

deviceSlider.style.left = 0;
devicePicListAdded = deviceSlider.querySelectorAll('li'); //li

 for(let i=0; i<picShow; i++){
  let copyLastBox = devicePicListAdded[devicePicListAdded.length-(i+1)].cloneNode(true);
  deviceSlider.prepend(copyLastBox);
} // 마지막 박스 복사 해주기

devicePicListAdded.forEach(function(pic){
    pic.style.width = devicePicWrap.offsetWidth + 'px';
    });

imgIdx = 0 ;

newPicList = deviceSlider.querySelectorAll('li');
devicePicWidth = devicePicListAdded[0].offsetWidth; //사진 하나 가로
deviceSlider.style.width = devicePicWidth * newPicList.length + 'px';

deviceSlider.style.marginLeft = -devicePicWidth + 'px';

colorIndicator.forEach(function(indi){
  indi.classList.remove('active');
});

colorIndicator[imgIdx].classList.add('active');

}

function clickChevron() {
    devicePicWidth = devicePicListAdded[0].offsetWidth; //사진 하나 가로
    colorChevron[0].addEventListener('click', (a) => {
        a.preventDefault();
      
        imgIdx--;
        deviceSlider.style.left = -devicePicWidth * imgIdx + 'px';
      
      if(imgIdx <= -1){
          deviceSlider.style.left = -devicePicWidth * imgIdx + 'px';
          imgIdx = devicePicListAdded.length - picShow;
      }
      
      colorIndicator.forEach((indi) => {
          indi.classList.remove('active'); //active class 제거해주기 = default
      });
      
      
      if(imgIdx >= 0){
          colorIndicator[imgIdx].classList.add('active'); //눌렀을 때 추가해주기
      
        }
        else{
          colorIndicator[devicePicListAdded.length - picShow].classList.add('active'); 
          //0보다 작을 때
        }
        console.log(imgIdx)
     
      });
      
      colorChevron[1].addEventListener('click', (a) => {
      
          a.preventDefault();
          
          imgIdx++;
          deviceSlider.style.left = -devicePicWidth * imgIdx + 'px';
          
          if(imgIdx >= devicePicListAdded.length - picShow){
              deviceSlider.style.left = -devicePicWidth * imgIdx + 'px';
              imgIdx = -1;
          }
          
          colorIndicator.forEach((indi) => {
              indi.classList.remove('active'); //active class 제거해주기 = default
          });
          
          if(imgIdx >= 0){
              colorIndicator[imgIdx].classList.add('active'); //눌렀을 때 추가해주기
          
            }else{
              colorIndicator[devicePicListAdded.length - picShow].classList.add('active'); //눌렀을 때 추가해주기 
            }
      
          
          });
}

sDeviceImge();
clickChevron();

colorNavList[0].addEventListener('click', (a)=> {
    a.preventDefault(); 
    deviceType('s8');
    sDeviceImge();
    clickChevron();
});

colorNavList[1].addEventListener('click', (a)=>{
    a.preventDefault();
    deviceType('s8plus'); 
    plusDeviceImge();
    clickChevron();

});


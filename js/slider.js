
//-----------------------------------
let devicePicListAdd, liContent, devicePicListAdded, imgIdx,newPicList, devicePicWidth;
// -----------------------------------
function sDeviceImge(color) {

    deviceSlider.innerHTML = " ";
    let deviceColor;
    switch(color){
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

 devicePicListAdded = deviceSlider.querySelectorAll('li'); //li
 for(let i=0; i<picShow; i++){
  let copyLastBox = devicePicListAdded[devicePicListAdded.length-(i+1)].cloneNode(true);
  deviceSlider.prepend(copyLastBox);
} // 마지막 박스 복사 해주기

devicePicListAdded.forEach(function(list){
  list.style.width = devicePicWrap.offsetWidth + 'px';
  });

imgIdx = 0 ;

newPicList = deviceSlider.querySelectorAll('li');
devicePicWidth = devicePicListAdded[0].offsetWidth; //사진 하나 가로
deviceSlider.style.width = devicePicWidth * newPicList.length + 'px';

deviceSlider.style.marginLeft = -devicePicWidth + 'px';
// indicator class 초기화
colorIndicator.forEach(function(indi){
  indi.classList.remove('active');
});
colorIndicator[imgIdx].classList.add('active');



  colorListItems.forEach(function(btn, i){
    btn.addEventListener('click', (e)=>{
        e.preventDefault();
        sDeviceImge(i);
    });
});
colorChevron[0].addEventListener('click', (a) => {
  a.preventDefault();

  imgIdx--;
  deviceSlider.style.left = -devicePicWidth * imgIdx + 'px';

if(imgIdx <= -1){
    deviceSlider.style.left = -devicePicWidth * imgIdx + 'px';
    imgIdx = devicePicListAdded.length - picShow;
}

if(imgIdx >= 0){
    colorIndicator[imgIdx].classList.add('active'); //눌렀을 때 추가해주기

  }else{
    colorIndicator[devicePicListAdded.length - picShow].classList.add('active'); //눌렀을 때 추가해주기 
  }

});

imgIdx = 0;
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


colorIndicator.forEach((indi, idx) => {

  indi.addEventListener('click', (e)=> {
      e.preventDefault();

      deviceSlider.style.left = -devicePicWidth * idx + 'px';

      colorIndicator.forEach((i) => {
          i.classList.remove('active');
      });
      indi.classList.add('active');
  });
  });

}};

sDeviceImge();
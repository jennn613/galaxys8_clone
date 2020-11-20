'use strict';

const deviceSize = [
    {type: 'mobile', size: 767},
    {type: 'tablet', size: 1024},
    {type: 'pc'}
];

const Resize = function(){
let browerWidth = window.innerWidth;
let type;

for(let i=0; i<deviceSize.length; i++){
    
    if(browerWidth<=deviceSize[i].size){
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
});


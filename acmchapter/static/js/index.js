// var ind=1
// const slidekaro=()=>{
//     var slides=document.querySelector('.main').children
//     if (ind>2){
//         ind=0
//     }
//     for(let i=0;i<=2;i++){
//         slides[i].classList.remove('active')
//     }
//     slides[ind].classList.add('active')
//     ind=ind+1

// }

// setInterval(slidekaro,5000)
window.onscroll=function(){
    myfunction()
}
var open=true   
var webteam=false
function myfunction(){
    if(document.body.scrollTop >2000 || document.documentElement.scrollTop >2000){
        document.querySelector('.sectionfone').classList.add('active')
        document.querySelector('.sectionftwo').classList.add('active')
        document.querySelector('.ul').classList.remove('active')
        open=true
    }
    if(document.body.scrollTop >1300 || document.documentElement.scrollTop >1300){
        document.querySelector('.sectionaaaone').classList.add('active')
        document.querySelector('.sectionaaatwo').classList.add('active')
        document.querySelector('.ul').classList.remove('active')
        open=true
    }
    if(document.body.scrollTop >800 || document.documentElement.scrollTop >800){
        document.querySelector('.sectionaaone').classList.add('active')
        document.querySelector('.sectionaatwo').classList.add('active')
        document.querySelector('.ul').classList.remove('active')
        open=true
    }
    if(document.body.scrollTop >600 || document.documentElement.scrollTop > 600){
        document.querySelector('.social1').classList.add('active')
        open=true
    }
    if(document.body.scrollTop >350 || document.documentElement.scrollTop > 350){
        document.querySelector('.sectionaone').classList.add('active')
        document.querySelector('.sectionatwo').classList.add('active')
        document.querySelector('.ul').classList.remove('active')
        open=true
    }
    
    
    else{
        document.querySelector('.social1').classList.remove('active')
        document.querySelector('.sectionaone').classList.remove('active')
        document.querySelector('.sectionatwo').classList.remove('active')
        document.querySelector('.sectionaaone').classList.remove('active')
        document.querySelector('.sectionaatwo').classList.remove('active')
        document.querySelector('.sectionaaaone').classList.remove('active')
        document.querySelector('.sectionaaatwo').classList.remove('active')
        document.querySelector('.sectionfone').classList.remove('active')
        document.querySelector('.sectionftwo').classList.remove('active')
        document.querySelector('.ul').classList.remove('active')
    }
}

function burger(){
    
    if(open){
        document.querySelector('.ul').classList.add('active')
        open=false
    }
    else{
        document.querySelector('.ul').classList.remove('active')
        open=true
    }
    
}
document.querySelector('.webteamm').addEventListener('click',()=>{
    document.querySelector('.webteam').classList.toggle('active')
    webteam=!webteam
    window.location.href='#mainn'
})
document.querySelector('.fa-window-close').addEventListener('click',()=>{
    document.querySelector('.webteam').classList.toggle('active')
    webteam=false
})



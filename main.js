let crossout = document.querySelectorAll('#crossout-ol li');

for (let i = 0; i < crossout.length; i++) {
    crossout[i].addEventListener('click', function () {
        console.log(crossout[i]);
        // console.log(event.target);
        //crossout[i].style.textDecoration = "line-through"
        if (crossout[i].style.textDecoration === ""){
            crossout[i].style.textDecoration = "line-through"
        } else {
            crossout[i].style.textDecoration = ""
        }
    })
}

let fadeout = document.querySelectorAll('#fadeout-ul li');

for (let i = 0; i < fadeout.length; i++){
    fadeout[i].addEventListener('click', function (){
        if (fadeout[i].style.opacity === ""){
            fadeout[i].style.opacity = ".2"
        } else {
            fadeout[i].style.opacity = ""
        }
    })
}

let collapse = document.querySelectorAll('#row img');

for (let i = 0; i < collapse.length; i++){
    collapse[i].addEventListener('click', function (){
        console.log(collapse[i]);
    //    collapse[i].style.width = "0px"
        if (collapse[i].style.width === ""){
            collapse[i].style.width = "0px"
        } else {
            collapse[i].style.width = ""
        }
})
}

let meteor = document.querySelector('#destroy-all');

meteor.addEventListener('click', function(){
    for (let i = 0; i < collapse.length; i++){
    collapse[i].style.width = "0px"
    }
    for (let i = 0; i < fadeout.length; i++){
        fadeout[i].style.opacity = ".2"
    }
    for (let i = 0; i < crossout.length; i++){
        crossout[i].style.textDecoration = "line-through"
    }
})
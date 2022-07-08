let crossout = document.querySelectorAll('#crossout-ol li');
crossout.forEach(function (list1) {
    list1.addEventListener('click', function () {
        //crossout[i].style.textDecoration = "line-through"
        if (list1.style.textDecoration === "") {
            list1.style.textDecoration = "line-through"
        } else {
            list1.style.textDecoration = ""
        }
    })
})

// for (let i = 0; i < crossout.length; i++) {
//     crossout[i].addEventListener('click', function () {
//         console.log(crossout[i]);
//         // console.log(event.target);
//         //crossout[i].style.textDecoration = "line-through"
//         if (crossout[i].style.textDecoration === "") {
//             crossout[i].style.textDecoration = "line-through"
//         } else {
//             crossout[i].style.textDecoration = ""
//         }
//     })
// }

let fadeout = document.querySelectorAll('#fadeout-ul li');

fadeout.forEach(function (list) {
    list.addEventListener('click', function () {
        if (list.style.opacity === "") {
            list.style.opacity = ".0"
        } else {
            list.style.opacity = ""
        }
    })
})

// for (let i = 0; i < fadeout.length; i++) {
//     fadeout[i].addEventListener('click', function () {
//         if (fadeout[i].style.opacity === "") {
//             fadeout[i].style.opacity = ".0"
//         } else {
//             fadeout[i].style.opacity = ""
//         }
//     })
// }

let collapse = document.querySelectorAll('#row img');
function collapser(collapse) {
    collapse.style.width = "0px"
}
//..forEach w/ click event and calling function
collapse.forEach(function (list2) {
    list2.addEventListener('click', function () {
        collapser(list2)
    })
    })


    //..callback function with global function in it
    // for (let i = 0; i < collapse.length; i++) {
    //     collapse[i].addEventListener('click', function () {
    //     collapser(collapse[i])
    //     })
    //     }

    //...standard callback no global
    // for (let i = 0; i < collapse.length; i++) {
    //     collapse[i].addEventListener('click', function () {
    //         console.log(collapse[i]);
    //         collapse[i].style.width = "0px"
    //         //     if (collapse[i].style.width === ""){
    //         //         collapse[i].style.width = "0px"
    //         //     } else {
    //         //         collapse[i].style.width = ""
    //         //    }
    //     })
    // }

    let meteor = document.querySelector('#destroy-all');

    meteor.addEventListener('click', function () {
        for (let i = 0; i < collapse.length; i++) {
            collapse[i].style.width = "0px"
        }
        for (let i = 0; i < fadeout.length; i++) {
            fadeout[i].style.opacity = ".0"
        }
        for (let i = 0; i < crossout.length; i++) {
            crossout[i].style.textDecoration = "line-through"
        }
    })
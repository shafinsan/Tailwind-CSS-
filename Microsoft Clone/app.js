const navigation = document.querySelector('.navigation');
const show = document.querySelector('.show');
let myCondition = true;
navigation.addEventListener('click', () => {
    document.querySelector('.line1').classList.toggle('translate-y-2');
    document.querySelector('.line1').classList.toggle('rotate-45');
    document.querySelector('.line2').classList.toggle('hidden');
    document.querySelector('.line3').classList.toggle('-translate-y-2');
    document.querySelector('.line3').classList.toggle('-rotate-45');
    if (myCondition) {
        show.classList.add('hidden')
        myCondition = false
    }
    else {
        show.classList.remove('hidden')
        myCondition=true;
    }

})
const downArrow = document.querySelector('.downArrow');
const arrow = document.querySelector('.myArrow');
console.log(arrow)
let flag = true;
arrow.addEventListener('click', () => {
    if (flag) {
        downArrow.classList.remove('hidden');
        flag = false;
    }
    else {
        downArrow.classList.add('hidden')
        flag = true;
    }

})


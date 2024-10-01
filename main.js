let scroller = document.querySelector(".scroller");
// Get The Height Of The Hidden Content
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;
    scroller.style.width = `${(scrollTop / height) * 100}%`
})


let skillsSection = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".the-progress span");


// element.offsetTop => renvoie la distance, en pixels, entre la bordure supérieure de l'élément et la
//      bordure supérieure intérieure de son élément parent le plus proche positionné.
window.onscroll = function() {
    if (window.scrollY >= skillsSection.offsetTop) {
        // Reached Section Skills
        for (let i = 0; i < spans.length; i++) {
            spans[i].style.width = spans[i].getAttribute("data-width")
            
        }
        // spans.forEach(span => {
        //     span.style.width = span.dataset.width;
        // });
    }
    if (window.scrollY >= statsSection.offsetTop) {
        if(!bool) {
            numbers.forEach((el) => startCount(el));
        }
        bool = true;
    }
    
}


let numbers = document.querySelectorAll(".stats .box .number");
let statsSection = document.querySelector(".stats");
let bool = false;



function startCount(el) {
    // let goal = el.dataset.goal;
    let goal = el.getAttribute("data-goal");
    let counter = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(counter);
        }
    }, 2000 / goal);
}

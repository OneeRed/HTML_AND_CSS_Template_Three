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
}
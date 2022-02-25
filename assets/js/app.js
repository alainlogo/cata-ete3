// LA SOURIS

let innerCursor = document.querySelector(".inner-cursor");
let outerCursor = document.querySelector(".outer-cursor");

document.addEventListener("mousemove", moveCursor);

function moveCursor(e){
    let x = e.clientX;
    let y = e.clientY;

    
     innerCursor.style.left = `${x}px`;
     innerCursor.style.top = `${y}px`;
     outerCursor.style.left = `${x}px`;
     outerCursor.style.top = `${y}px`;
}


// LE ZOOME DU CERCLE
// let texts = Array.from(document.querySelectorAll("p, .bloc"));

// console.log(texts);

// texts.forEach((text) =>{
//     text.addEventListener('mouseover', () =>{
//         innerCursor.classList.add("grow");
//     });
//     text.addEventListener('mouseleave', () =>{
//         innerCursor.classList.remove("grow");
//     });
// });



const gap = 16;

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", e => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", e => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));





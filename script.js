// Hamburger Menu

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


// Close menu after clicking any link (Mobile)

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(item => {

    item.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


// Typing Animation

const typingText = document.querySelector(".typing");

const words = [
    "Software Developer ",
    "Java Developer ",
    "Frontend Developer ",
    " Problem Solver "
];


let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;


function typeEffect(){

    let currentWord = words[wordIndex];


    if(isDeleting){

        typingText.textContent =
        currentWord.substring(0,charIndex--);

    }
    else{

        typingText.textContent =
        currentWord.substring(0,charIndex++);

    }


    if(!isDeleting && charIndex === currentWord.length){

        isDeleting = true;

        setTimeout(typeEffect,1500);

    }


    else if(isDeleting && charIndex === 0){

        isDeleting = false;

        wordIndex++;

        if(wordIndex === words.length){

            wordIndex = 0;

        }

        setTimeout(typeEffect,500);

    }


    else{

        setTimeout(typeEffect,
        isDeleting ? 50 : 100);

    }

}


typeEffect();



// Navbar Background Change On Scroll

window.addEventListener("scroll",()=>{

    const header =
    document.querySelector("header");


    if(window.scrollY > 50){

        header.style.background =
        "rgba(15,23,42,0.95)";

    }

    else{

        header.style.background =
        "rgba(15,23,42,0.85)";

    }

});
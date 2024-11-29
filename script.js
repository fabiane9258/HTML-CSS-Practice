const words = ["Software Developer", "Web Designer", "Full-Stack Developer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100; // Typing speed in ms
const erasingSpeed = 50; // Erasing speed in ms
const delayBetweenWords = 2000; // Pause after a word

function typeEffect() {
    const typewriterElement = document.getElementById("typewriter");
    const currentWord = words[wordIndex];

    if (isDeleting) {
        typewriterElement.textContent = currentWord.substring(0, charIndex--);
    } else {
        typewriterElement.textContent = currentWord.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, delayBetweenWords);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeEffect, typingSpeed);
    } else {
        setTimeout(typeEffect, isDeleting ? erasingSpeed : typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
});
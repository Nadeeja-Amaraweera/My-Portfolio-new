const sections = document.querySelectorAll('.fade-section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

sections.forEach(sec => observer.observe(sec));


const skills = document.querySelectorAll('.Oneskill');

const observer3 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            const ring = entry.target.querySelector('.ring-path');

            // read percentage from h2 (ex: "90%")
            let percent = entry.target.querySelector('h2').innerText.replace('%', '');
            percent = Number(percent) / 100;

            // ring full length = 600
            let offset = 600 - (600 * percent);

            ring.style.strokeDashoffset = offset;
        }

    });
}, { threshold: 0.4 });

skills.forEach(skill => observer3.observe(skill));

// Works section navigation
const projectBtn = document.getElementById('work-project-btn');
const assignmentBtn = document.getElementById('work-assignment-btn');
const projectContainer = document.querySelector('.project-container');
const worksContainer = document.querySelector('.assignments-container');

projectBtn.addEventListener('click', () => {
    projectBtn.classList.add('active');
    assignmentBtn.classList.remove('active');
    projectContainer.classList.remove('hidden');
    worksContainer.classList.add('hidden');
});

assignmentBtn.addEventListener('click', () => {
    projectContainer.classList.add('hidden');
    worksContainer.classList.remove('hidden');
    assignmentBtn.classList.add('active');
    projectBtn.classList.remove('active');
});

// Typing animation for home section

// typing
const text = "Nadeeja Amaraweera"; // Teks yang akan dianimasikan
let index = 0;
let isDeleting = false;
const speed = 100; // Kecepatan mengetik
const delayBeforeDeleting = 3000; // Waktu jeda sebelum menghapus
const delayBeforeTypingAgain = 500; // Waktu jeda sebelum mengetik ulang

function typeText() {
  const typingTextElement = document.getElementById("typing-text");

  if (isDeleting) {
    typingTextElement.innerHTML = text.substring(0, index);
    index--;
    if (index < 0) {
      isDeleting = false;
      setTimeout(typeText, delayBeforeTypingAgain);
    } else {
      setTimeout(typeText, speed / 2); // Lebih cepat saat menghapus
    }
  } else {
    typingTextElement.innerHTML = text.substring(0, index);
    index++;
    if (index > text.length) {
      isDeleting = true;
      setTimeout(typeText, delayBeforeDeleting); // Jeda sebelum mulai menghapus
    } else {
      setTimeout(typeText, speed); // Kecepatan mengetik
    }
  }
}

window.onload = function () {
  setTimeout(typeText, delayBeforeTypingAgain); // Mulai mengetik setelah jeda
};


// Burger menu toggle
const burgerBtn = document.getElementById("burgerBtn");
const burgerLinks = document.querySelector(".burger-links");
const navLinks = document.querySelectorAll(".links-navigation a");

burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("active");
    burgerLinks.classList.toggle("active");
    
});

// close sidebar when clicking links
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        burgerBtn.classList.remove("active");
        burgerLinks.classList.remove("active");
    });
});
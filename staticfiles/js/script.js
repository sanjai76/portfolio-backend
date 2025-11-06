// // script.js

// // Optional: add any JS interactivity you want here

// // Example: smooth scroll for navbar links
// document.querySelectorAll('a.nav-link').forEach(link => {
//     link.addEventListener('click', (e) => {
//         e.preventDefault();
//         const targetId = link.getAttribute('href').substring(1);
//         const target = document.getElementById(targetId);
//         if (target) {
//             target.scrollIntoView({ behavior: 'smooth' });
//         }
//     });
// });
// document.addEventListener('DOMContentLoaded', () => {
//     const fadeElems = document.querySelectorAll('.animate-fade-in');

//     const observer = new IntersectionObserver(entries => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.style.opacity = 1;
//                 entry.target.style.animationPlayState = 'running';
//                 observer.unobserve(entry.target);
//             }
//         });
//     }, { threshold: 0.1 });

//     fadeElems.forEach(elem => {
//         observer.observe(elem);
//     });
// });












// const track = document.querySelector('.carousel-track');
// const slides = document.querySelectorAll('.project-card');
// const leftBtn = document.querySelector('.left-btn');
// const rightBtn = document.querySelector('.right-btn');

// const slideWidth = slides[0].offsetWidth;
// let currentIndex = 0;
// const totalSlides = slides.length;

// function goToSlide(index) {
//     track.style.transform = `translateX(-${index * slideWidth}px)`;
// }

// function nextSlide() {
//     currentIndex = (currentIndex + 1) % totalSlides;
//     goToSlide(currentIndex);
// }

// function prevSlide() {
//     currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
//     goToSlide(currentIndex);
// }

// // Auto slide every 4 seconds
// let slideInterval = setInterval(nextSlide, 4000);

// rightBtn.addEventListener('click', () => {
//     clearInterval(slideInterval);
//     nextSlide();
//     slideInterval = setInterval(nextSlide, 4000);
// });

// leftBtn.addEventListener('click', () => {
//     clearInterval(slideInterval);
//     prevSlide();
//     slideInterval = setInterval(nextSlide, 4000);
// });

// // On window resize, update slideWidth and reset transform
// window.addEventListener('resize', () => {
//     slideWidth = slides[0].offsetWidth;
//     goToSlide(currentIndex);
// });







// // document.querySelectorAll('.view-video-btn').forEach((btn) => {
// //     btn.addEventListener('click', () => {
// //         const overlay = btn.closest('.carousel-item').querySelector('.video-overlay');
// //         overlay.classList.remove('d-none');
// //     });
// // });

// // document.querySelectorAll('.close-video-btn').forEach((btn) => {
// //     btn.addEventListener('click', () => {
// //         const overlay = btn.closest('.video-overlay');
// //         overlay.classList.add('d-none');
// //         const video = overlay.querySelector('video');
// //         video.pause();
// //         video.currentTime = 0;
// //     });
// // });





// function showTab(tabId) {
//     document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
//     document.getElementById(tabId).classList.add('active');

//     document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
//     event.target.classList.add('active');
// }
// Smooth scroll for navbar links
// document.querySelectorAll('a.nav-link').forEach(link => {
//     link.addEventListener('click', (e) => {
//         e.preventDefault();
//         const targetId = link.getAttribute('href').substring(1);
//         const target = document.getElementById(targetId);
//         if (target) {
//             target.scrollIntoView({ behavior: 'smooth' });
//         }
//     });
// });
// document.querySelectorAll('a.nav-link').forEach(link => {
//     link.addEventListener('click', e => {
//         e.preventDefault();
//         const targetId = link.getAttribute('href').substring(1);
//         const target = document.getElementById(targetId);
//         if (target) {
//             const offset = document.querySelector('.navbar').offsetHeight;
//             const topPos = target.getBoundingClientRect().top + window.scrollY - offset;
//             window.scrollTo({
//                 top: topPos,
//                 behavior: 'smooth'
//             });
//         }
//     });
// });
// Brand click → scroll to hero section smoothly






// Scroll-triggered fade/slide animation (repeats on scroll)
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal");
            } else {
                entry.target.classList.remove("reveal");
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});

// Carousel logic (if you have a project carousel)
// Super-fast carousel logic
const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.project-card');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

let slideWidth = slides[0]?.offsetWidth || 0;
let currentIndex = 0;
const totalSlides = slides.length;

// Smooth + fast transition
if (track) {
    track.style.transition = 'transform 0.25s ease-in-out';
}

function goToSlide(index) {
    if (track) {
        track.style.transform = `translateX(-${index * slideWidth}px)`;
    }
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    goToSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    goToSlide(currentIndex);
}

// ⚡ Ultra-fast Auto Slide every 800ms
let slideInterval = setInterval(nextSlide, 800);

rightBtn?.addEventListener('click', () => {
    clearInterval(slideInterval);
    nextSlide();
    slideInterval = setInterval(nextSlide, 800);
});

leftBtn?.addEventListener('click', () => {
    clearInterval(slideInterval);
    prevSlide();
    slideInterval = setInterval(nextSlide, 800);
});

window.addEventListener('resize', () => {
    slideWidth = slides[0]?.offsetWidth || 0;
    goToSlide(currentIndex);
});

// const track = document.querySelector('.carousel-track');
// const slides = document.querySelectorAll('.project-card');
// const leftBtn = document.querySelector('.left-btn');
// const rightBtn = document.querySelector('.right-btn');

// let slideWidth = slides[0]?.offsetWidth || 0;
// let currentIndex = 0;
// const totalSlides = slides.length;

// function goToSlide(index) {
//     track.style.transform = `translateX(-${index * slideWidth}px)`;
// }

// function nextSlide() {
//     currentIndex = (currentIndex + 1) % totalSlides;
//     goToSlide(currentIndex);
// }

// function prevSlide() {
//     currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
//     goToSlide(currentIndex);
// }

// // Auto slide every 4 seconds
// let slideInterval = setInterval(nextSlide, 1000);

// rightBtn?.addEventListener('click', () => {
//     clearInterval(slideInterval);
//     nextSlide();
//     slideInterval = setInterval(nextSlide, 1000);
// });

// leftBtn?.addEventListener('click', () => {
//     clearInterval(slideInterval);
//     prevSlide();
//     slideInterval = setInterval(nextSlide, 1000);
// });

// window.addEventListener('resize', () => {
//     slideWidth = slides[0]?.offsetWidth || 0;
//     goToSlide(currentIndex);
// });

// Optional: Tab switch logic if you have skill/project tabs
function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.getElementById(tabId)?.classList.add('active');

    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}
document.addEventListener("DOMContentLoaded", () => {
    const scrollElems = document.querySelectorAll(".scroll-animate");

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const el = entry.target;

            if (entry.isIntersecting) {
                const delay = el.dataset.delay || "0s";
                el.style.setProperty("--delay", delay);
                el.classList.add("reveal");
            } else {
                el.classList.remove("reveal");
            }
        });
    }, { threshold: 0.2 });

    scrollElems.forEach(el => scrollObserver.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {
    const toggler = document.getElementById("navbarToggler");
    const collapse = document.getElementById("navbarNav");

    toggler.addEventListener("click", () => {
        toggler.classList.toggle("open");
        collapse.classList.toggle("show");
    });

    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 991) {
                collapse.classList.remove("show");
                toggler.classList.remove("open");
            }
        });
    });
});
const isMobile = window.innerWidth <= 768;

VANTA.NET({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x00ff50,
    backgroundColor: 0x000000,
    points: isMobile ? 8.0 : 14.0,
    maxDistance: isMobile ? 25.0 : 18.0,
    spacing: isMobile ? 20.0 : 15.0
});
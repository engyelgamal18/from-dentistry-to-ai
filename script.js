
const reveals = document.querySelectorAll(".scroll-reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.01
});

reveals.forEach((section) => observer.observe(section));
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 140;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
});
const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
menuToggle.classList.toggle("active");

    const isOpen = mobileNav.classList.contains("active");
    menuToggle.setAttribute("aria-expanded", isOpen);
});
mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        mobileNav.classList.remove("active");
         menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});
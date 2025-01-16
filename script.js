// GSAP Animations for Initial Load
gsap.from(".content h1", { opacity: 0, y: -50, duration: 1 });
gsap.from(".content p", { opacity: 0, y: 50, duration: 1, delay: 0.3 });

// Scroll-triggered Animation for Projects Section
document.addEventListener("scroll", () => {
    const projects = document.querySelector("#projects");
    const scrollPos = window.scrollY + window.innerHeight / 2;

    if (scrollPos > projects.offsetTop) {
        projects.classList.add("active");
    } else {
        projects.classList.remove("active");
    }
});

// GSAP Animation for Projects Section
gsap.from("#projects h2", { opacity: 0, x: 200, duration: 1 });
gsap.from("#projects p", { opacity: 0, y: 50, duration: 1, delay: 0.3 });

// GSAP Animation for Top Bar
gsap.from(".top-bar", {
    opacity: 0,
    y: -50,
    duration: 1,
    delay: 0.5, // Adds a delay for smooth transition when the page loads
});

// Scroll-triggered Animation for Top Bar (Sticky Effect)
document.addEventListener("scroll", () => {
    const topBar = document.querySelector(".top-bar");
    const scrollPos = window.scrollY;

    if (scrollPos > 100) { // Adjust the value for when the effect should trigger
        topBar.classList.add("sticky");
    } else {
        topBar.classList.remove("sticky");
    }
});

document.querySelectorAll('.top-bar ul li a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.top-bar ul li a').forEach(link => {
            link.classList.remove('active');
        });
        this.classList.add('active');
    });
});

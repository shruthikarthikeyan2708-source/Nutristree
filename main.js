// main.js

// Smooth Scroll Reveal Animations
const sections = document.querySelectorAll('section');
const options = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px'
};

const revealOnScroll = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(revealOnScroll, options);
sections.forEach(section => {
    observer.observe(section);
});

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

// Form Validation
const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    const emailInput = document.querySelector('input[type="email"]');
    if (!emailInput.value) {
        event.preventDefault();
        alert('Please enter a valid email address.');
    }
});

// Recipe Search/Filter Functionality
const searchInput = document.querySelector('#recipe-search');
const recipeList = document.querySelectorAll('.recipe-item');

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    recipeList.forEach(recipe => {
        const title = recipe.querySelector('.recipe-title').textContent.toLowerCase();
        recipe.style.display = title.includes(searchTerm) ? 'block' : 'none';
    });
});

// Dark Mode Toggle
const darkModeToggle = document.querySelector('#dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Scroll-to-Top Button
const scrollToTopBtn = document.querySelector('#scroll-to-top');

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
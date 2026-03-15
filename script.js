// script.js for Nutristree

// Dark Mode Toggle
const toggleDarkMode = () => {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const currentMode = body.classList.contains('dark-mode') ? 'Dark Mode' : 'Light Mode';
    localStorage.setItem('mode', currentMode);
};

// Load Dark Mode from Local Storage
window.onload = () => {
    const mode = localStorage.getItem('mode');
    if (mode === 'Dark Mode') {
        document.body.classList.add('dark-mode');
    }
};

// Newsletter Form Validation
const validateNewsletterForm = () => {
    const emailInput = document.getElementById('newsletter-email');
    const email = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    alert('Thank you for subscribing!');
    return true;
};

// Recipe Search Functionality
const searchRecipes = () => {
    const searchQuery = document.getElementById('recipe-search').value.toLowerCase();
    const recipes = document.querySelectorAll('.recipe');

    recipes.forEach(recipe => {
        const title = recipe.querySelector('.recipe-title').textContent.toLowerCase();
        recipe.style.display = title.includes(searchQuery) ? '' : 'none';
    });
};

// Scroll to Top Button
const scrollToTopButton = document.getElementById('scrollToTopBtn');

const checkScroll = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
};

const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
};

window.onscroll = checkScroll;
scrollToTopButton.onclick = scrollToTop;

// Smooth Animations
const fadeInElements = document.querySelectorAll('.fade-in');
fadeInElements.forEach(element => {
    element.style.opacity = 0;
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.transition = 'opacity 0.5s ease';
            entry.target.style.opacity = 1;
            observer.unobserve(entry.target);
        }
    });
});

fadeInElements.forEach(element => {
    observer.observe(element);
});
// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const themeText = document.getElementById('theme-text');
const body = document.body;

// Mobile Menu Functionality
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.getElementById('nav-links');

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', currentTheme);
updateThemeUI(currentTheme);

// Theme toggle event listener
themeToggle.addEventListener('click', () => {
  const currentTheme = body.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  body.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeUI(newTheme);
});

// Mobile menu toggle
mobileMenuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  mobileMenuBtn.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    mobileMenuBtn.textContent = '☰';
  });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
    navLinks.classList.remove('active');
    mobileMenuBtn.textContent = '☰';
  }
});

function updateThemeUI(theme) {
  if (theme === 'dark') {
    themeIcon.textContent = '☀️';
    themeText.textContent = 'Light';
  } else {
    themeIcon.textContent = '🌙';
    themeText.textContent = 'Dark';
  }
}

// Smooth scroll for internal nav links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - 80; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Dynamic year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.style.background = 'rgba(44, 62, 80, 0.95)';
    navbar.style.backdropFilter = 'blur(10px)';
  } else {
    navbar.style.background = 'var(--bg-navbar)';
    navbar.style.backdropFilter = 'none';
  }
});

// Add intersection observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(30px)';
  section.style.transition = 'all 0.6s ease';
  observer.observe(section);
});

// Add hover effects to project cards
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-8px) scale(1.02)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
  });
});
  
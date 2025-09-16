// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const themeText = document.getElementById('theme-text');
const body = document.body;

// Mobile Menu Functionality
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.getElementById('nav-links');

// Modal Functionality
const modal = document.getElementById('project-modal');
const modalContent = document.getElementById('modal-content');
const closeBtn = document.querySelector('.close');

// Project Data
const projectData = {
  'horror-game': {
    title: '2D Horror Escape Game',
    description: 'A thrilling 2D platformer horror game built with Unity and C#. Players must survive in a dark environment using a circular light mechanic to navigate and find keys to escape.',
    longDescription: `
      <p>This project is a complete 2D horror game that challenges players to escape from a mysterious location while avoiding dangers in the darkness. The game features:</p>
      <ul>
        <li><strong>Circular Light Mechanic:</strong> Players have limited visibility and must use their light source strategically</li>
        <li><strong>Key Collection System:</strong> Multiple keys must be found to unlock the final escape route</li>
        <li><strong>Survival Elements:</strong> Limited resources and time pressure create tension</li>
        <li><strong>Atmospheric Design:</strong> Dark visuals and sound effects enhance the horror experience</li>
        <li><strong>Responsive Controls:</strong> Smooth player movement and interaction systems</li>
      </ul>
    `,
    techStack: ['Unity', 'C#', 'Game Development', '2D Graphics', 'Audio Design'],
    links: [
      { text: 'Play Game', url: 'https://play.unity.com/en/games/31ecf7b2-afd8-4171-b69c-a2d4dd0a8996/key-to-escape' },
      { text: 'Source Code', url: 'https://github.com/berrisaur/385FinalProject' }
    ],
    screenshots: [
      'assets/Screenshots/horror-game/pic1.png',
      'assets/Screenshots/horror-game/pic2.png',
      'assets/Screenshots/horror-game/pic3.png',
      'assets/Screenshots/horror-game/pic4.png',
      'assets/Screenshots/horror-game/pic5.png'
    ]
  },
  'social-network': {
    title: 'Social Network Platform',
    description: 'A Twitter-style social media platform built with Django and JavaScript, featuring posts, follow system, AJAX pagination, and like functionality.',
    longDescription: `
      <p>A full-featured social networking platform that replicates core Twitter functionality with modern web technologies. The application includes:</p>
      <ul>
        <li><strong>User Authentication:</strong> Secure login, registration, and profile management</li>
        <li><strong>Post System:</strong> Create, edit, and delete posts with rich text support</li>
        <li><strong>Follow System:</strong> Follow/unfollow users and view personalized feeds</li>
        <li><strong>Like & Comment:</strong> Interactive features for user engagement</li>
        <li><strong>AJAX Pagination:</strong> Smooth infinite scrolling for better UX</li>
      </ul>
    `,
    techStack: ['Django', 'JavaScript', 'AJAX', 'SQLite', 'Bootstrap', 'CSS3'],
    links: [
    //   { text: 'Watch Demo', url: 'https://youtube.com/watch?v=your-video-id' },
    //   { text: 'Live Demo', url: 'https://your-social-network.com' },
    //   { text: 'Source Code', url: 'https://github.com/ayush434/social-network' }
    ],
    screenshots: [
      'assets/Screenshots/Network01.png',
      'assets/Screenshots/Network02.png',
      'assets/Screenshots/Network03.png'
    ]
  },
  'stock-simulator': {
    title: 'Stock Market Simulator',
    description: 'A comprehensive stock trading simulator that allows users to practice buying and selling stocks with real-time market data and portfolio tracking.',
    longDescription: `
      <p>An educational stock market simulator that provides a risk-free environment for learning about trading. The application features:</p>
      <ul>
        <li><strong>Real-time Data:</strong> Live stock prices and market information</li>
        <li><strong>Portfolio Management:</strong> Track investments, gains, and losses</li>
        <li><strong>Trading Interface:</strong> Intuitive buy/sell functionality</li>
      </ul>
    `,
    techStack: ['Flask', 'Python', 'SQL', 'JavaScript', 'Chart.js', 'APIs'],
    links: [
    //   { text: 'Live Demo', url: 'https://your-stock-simulator.com' },
    //   { text: 'Source Code', url: 'https://github.com/ayush434/stock-simulator' }
    ],
    screenshots: [
    //   'assets/screenshots/stock-simulator-1.jpg',
    //   'assets/screenshots/stock-simulator-2.jpg',
    //   'assets/screenshots/stock-simulator-3.jpg'
    ]
  },
  'craigslist-poster': {
    title: 'Craigslist AutoPoster',
    description: 'An automation tool that uses Puppeteer to automatically post items from JSON data to Craigslist, streamlining the listing process.',
    longDescription: `
      <p>A powerful automation tool that eliminates the repetitive task of manually posting items to Craigslist. The application provides:</p>
      <ul>
        <li><strong>Automated Posting:</strong> Bulk upload items from JSON files</li>
        <li><strong>Form Simulation:</strong> Intelligent form filling and submission</li>
        <li><strong>Error Handling:</strong> Robust error recovery and logging</li>
        <li><strong>Rate Limiting:</strong> Respectful posting intervals to avoid blocks</li>
        <li><strong>Template System:</strong> Customizable posting templates</li>
        <li><strong>Status Tracking:</strong> Monitor posting success and failures</li>
      </ul>
    `,
    techStack: ['Puppeteer', 'JavaScript', 'Node.js', 'JSON', 'Web Scraping'],
    links: [
    //   { text: 'Source Code', url: 'https://github.com/ayush434/craigslist-poster' },
    //   { text: 'Documentation', url: 'https://github.com/ayush434/craigslist-poster#readme' }
    ],
    screenshots: [
    //   'assets/screenshots/craigslist-poster-1.jpg',
    //   'assets/screenshots/craigslist-poster-2.jpg'
    ]
  },
  'snackhack': {
    title: 'SnackHack - AI Cooking Assistant',
    description: 'An AI-powered cooking assistant that helps you discover recipes using ingredients you already have, with image recognition and dietary preference support.',
    longDescription: `
      <p>SnackHack is an innovative AI cooking assistant that transforms your available ingredients into delicious meal suggestions. The application features:</p>
      <ul>
        <li><strong>🍳 Use What You Have:</strong> Transform ingredients sitting in your fridge into delicious meals, reducing food waste</li>
        <li><strong>🤖 AI-Powered Recipes:</strong> Get personalized recipe suggestions powered by advanced AI technology</li>
        <li><strong>⚡ Quick & Easy:</strong> Find recipes in seconds, perfect for busy schedules and spontaneous cooking</li>
        <li><strong>🍽️ Dietary Preferences:</strong> Customize recipes for your dietary needs - vegetarian, gluten-free, and more</li>
        <li><strong>📸 Image Recognition:</strong> Take photos of ingredients for automatic detection</li>
        <li><strong>✅ Ingredient Validation:</strong> Smart validation ensures you're using real food items</li>
        <li><strong>👥 Serving Sizes:</strong> Adjust recipes for 1-10 people automatically</li>
        <li><strong>📱 Mobile Friendly:</strong> Works perfectly on all devices</li>
      </ul><br>
      <p><strong>How It Works:</strong></p>
      <ol>
        <li><strong>Add Ingredients:</strong> Type in ingredients you have or take a photo to detect them automatically</li>
        <li><strong>Set Preferences:</strong> Specify dietary preferences and number of servings</li>
        <li><strong>Get Recipes:</strong> Receive personalized, AI-generated recipes with step-by-step instructions</li>
      </ol>
    `,
    techStack: ['AI/ML', 'React', 'Python','JavaScript', 'Image Recognition', 'Web APIs', 'Responsive Design'],
    links: [
      { text: 'Live Demo', url: 'https://stellar-longma-577d56.netlify.app/' }
    ],
    screenshots: [
    //   'assets/screenshots/snackhack-1.jpg',
    //   'assets/screenshots/snackhack-2.jpg',
    //   'assets/screenshots/snackhack-3.jpg'
    ]
  }
};

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

// Modal functionality
function openModal(projectId) {
  const project = projectData[projectId];
  if (!project) return;

  const content = `
    <h2>${project.title}</h2>
    <p>${project.description}</p>
    
    <div class="tech-stack">
      ${project.techStack.map(tech => `<span>${tech}</span>`).join('')}
    </div>
    
    <h3>Project Details</h3>
    ${project.longDescription}
    
    <div class="project-links">
      ${project.links.map(link => `<a href="${link.url}" target="_blank">${link.text}</a>`).join('')}
    </div>
    
    ${project.screenshots.length > 0 ? `
      <h3>Screenshots</h3>
      <div class="screenshots">
        ${project.screenshots.map(screenshot => `
          <div class="screenshot">
            <img src="${screenshot}" alt="${project.title} screenshot" onerror="this.style.display='none'">
          </div>
        `).join('')}
      </div>
    ` : ''}
  `;

  modalContent.innerHTML = content;
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Event listeners for modal
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.style.display === 'block') {
    closeModal();
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

// Project card interactions
document.querySelectorAll('.project-card').forEach(card => {
  const projectId = card.getAttribute('data-project');
  
  // Click to open modal
  card.addEventListener('click', (e) => {
    // Don't open modal if clicking on a link
    if (e.target.tagName === 'A') return;
    if (projectId && projectData[projectId]) {
      openModal(projectId);
    }
  });
  
  // Hover effects
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-8px) scale(1.02)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
  });
});
  
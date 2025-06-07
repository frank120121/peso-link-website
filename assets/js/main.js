// Enhanced scroll effect for navbar
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu functionality
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const closeBtn = document.getElementById('closeBtn');

// Open mobile menu
menuToggle.addEventListener('click', () => {
  mobileMenu.classList.add('active');
  document.body.style.overflow = 'hidden';
});

// Close mobile menu
closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  document.body.style.overflow = '';
});

// Close mobile menu when clicking on links
const mobileLinks = document.querySelectorAll('.mobile-nav a, .mobile-cta a');
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Animation on scroll for feature cards
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

// Initialize feature card animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Observe feature cards for animation
  document.querySelectorAll('.feature').forEach(feature => {
    feature.style.opacity = '0';
    feature.style.transform = 'translateY(20px)';
    feature.style.transition = 'all 0.6s ease';
    observer.observe(feature);
  });
});

// Prevent menu from staying open on window resize
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// Close mobile menu when clicking outside of it
mobileMenu.addEventListener('click', (e) => {
  if (e.target === mobileMenu) {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
  }
});
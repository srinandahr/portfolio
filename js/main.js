// ===================================
// Main Entry Point
// ===================================

import { ParticleSystem } from './particles.js';
import { Typewriter } from './typewriter.js';
import { initAnimations } from './animations.js';
import { initNavigation } from './navigation.js';

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // Particle background
    new ParticleSystem('heroCanvas');

    // Typewriter effect
    new Typewriter('typewriter', [
        'secure API integrations',
        'distributed systems',
        'FinTech solutions',
        'test automation frameworks',
        'enterprise-grade software',
    ], {
        typeSpeed: 70,
        deleteSpeed: 35,
        pauseDuration: 2200,
    });

    // Navigation
    initNavigation();

    // Scroll animations
    initAnimations();

    // Project filter
    initProjectFilter();

    // Contact form
    initContactForm();
});

// ---- Project Filtering ----

function initProjectFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');

                if (filter === 'all' || category === filter) {
                    card.style.display = '';
                    card.style.animation = 'fadeInUp 0.5s ease forwards';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// ---- Contact Form ----

function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const btn = form.querySelector('.btn');
        const originalContent = btn.innerHTML;

        // Show sending state
        btn.innerHTML = '<span>Sending...</span>';
        btn.disabled = true;

        // Simulate send (replace with actual API integration)
        setTimeout(() => {
            btn.innerHTML = '<span>✓ Message Sent!</span>';
            btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';

            setTimeout(() => {
                btn.innerHTML = originalContent;
                btn.style.background = '';
                btn.disabled = false;
                form.reset();
            }, 3000);
        }, 1500);
    });
}

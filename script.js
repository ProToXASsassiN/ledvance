// ===========================
// LEDVANCE - JavaScript Interactions
// ===========================

document.addEventListener('DOMContentLoaded', function() {

    // ===========================
    // HEADER SCROLL EFFECT
    // ===========================
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }

        lastScroll = currentScroll;
    });

    // ===========================
    // MOBILE MENU TOGGLE
    // ===========================
    const menuToggle = document.querySelector('.menu-toggle');
    const navMain = document.querySelector('.nav-main');

    if (menuToggle && navMain) {
        menuToggle.addEventListener('click', () => {
            navMain.classList.toggle('active');
            menuToggle.classList.toggle('active');

            // Animate hamburger menu
            const spans = menuToggle.querySelectorAll('span');
            if (menuToggle.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // ===========================
    // PRODUCT TABS FUNCTIONALITY
    // ===========================
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');

            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            const targetContent = document.querySelector(`[data-content="${targetTab}"]`);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });

    // ===========================
    // SEARCH TOGGLE
    // ===========================
    const searchToggle = document.querySelector('.search-toggle');

    if (searchToggle) {
        searchToggle.addEventListener('click', () => {
            // Placeholder for search modal functionality
            alert('Fonctionnalité de recherche - À implémenter');
        });
    }

    // ===========================
    // COUNTRY SELECTOR
    // ===========================
    const countrySelector = document.querySelector('.country-selector');

    if (countrySelector) {
        countrySelector.addEventListener('click', () => {
            // Placeholder for country selector modal
            alert('Sélection de pays/langue - À implémenter');
        });
    }

    // ===========================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ===========================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===========================
    // INTERSECTION OBSERVER FOR ANIMATIONS
    // ===========================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Animate product cards on scroll
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // ===========================
    // MEGA MENU ACCESSIBILITY
    // ===========================
    const navItems = document.querySelectorAll('.main-nav-item');

    navItems.forEach(item => {
        const link = item.querySelector('.main-nav-link');
        const megaMenu = item.querySelector('.mega-menu');

        if (link && megaMenu) {
            link.addEventListener('mouseenter', () => {
                megaMenu.setAttribute('aria-hidden', 'false');
                link.setAttribute('aria-expanded', 'true');
            });

            item.addEventListener('mouseleave', () => {
                megaMenu.setAttribute('aria-hidden', 'true');
                link.setAttribute('aria-expanded', 'false');
            });

            // Keyboard navigation
            link.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const isExpanded = link.getAttribute('aria-expanded') === 'true';
                    megaMenu.setAttribute('aria-hidden', !isExpanded);
                    link.setAttribute('aria-expanded', !isExpanded);
                }
            });
        }
    });

    // ===========================
    // RESPONSIVE IMAGE PLACEHOLDERS
    // ===========================
    const imagePlaceholders = document.querySelectorAll('.product-image-placeholder, .split-image-placeholder, .mega-menu-image');

    imagePlaceholders.forEach((placeholder, index) => {
        // Create gradient variations for visual interest
        const gradients = [
            'linear-gradient(135deg, #042938, #06425b)',
            'linear-gradient(135deg, #06425b, #71ca00)',
            'linear-gradient(135deg, #042938, #71ca00)',
            'linear-gradient(135deg, #0f6674, #3b6a00)',
            'linear-gradient(135deg, #11575f, #71ca00)'
        ];

        const randomGradient = gradients[index % gradients.length];
        placeholder.style.background = randomGradient;

        // Add subtle animation
        placeholder.style.transition = 'transform 0.3s ease';
        placeholder.parentElement.addEventListener('mouseenter', () => {
            placeholder.style.transform = 'scale(1.05)';
        });
        placeholder.parentElement.addEventListener('mouseleave', () => {
            placeholder.style.transform = 'scale(1)';
        });
    });

    // ===========================
    // MOBILE NAV STYLING
    // ===========================
    if (window.innerWidth <= 768) {
        const style = document.createElement('style');
        style.textContent = `
            .nav-main.active {
                display: flex;
                position: fixed;
                top: 60px;
                left: 0;
                right: 0;
                background: white;
                flex-direction: column;
                padding: 2rem;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                animation: slideDown 0.3s ease;
                z-index: 999;
            }

            .nav-main.active .main-nav {
                flex-direction: column;
                gap: 0;
            }

            .nav-main.active .main-nav-item {
                width: 100%;
                border-bottom: 1px solid #f0f0f0;
            }

            .nav-main.active .main-nav-link {
                width: 100%;
                justify-content: space-between;
                padding: 1rem 0;
            }

            .nav-main.active .mega-menu {
                position: static;
                transform: none;
                min-width: 100%;
                margin-top: 1rem;
                box-shadow: none;
                border: 1px solid #e0e0e0;
            }

            @keyframes slideDown {
                from {
                    opacity: 0;
                    transform: translateY(-20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
        document.head.appendChild(style);
    }

    // ===========================
    // PERFORMANCE OPTIMIZATION
    // ===========================
    // Debounce function for scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Apply debounce to scroll handler if needed
    window.addEventListener('scroll', debounce(() => {
        // Additional scroll handlers can be added here
    }, 100));

    // ===========================
    // CONSOLE MESSAGE
    // ===========================
    console.log('%c LEDVANCE Website Clone ', 'background: #042938; color: #71ca00; font-size: 16px; font-weight: bold; padding: 10px;');
    console.log('%c Power through light ', 'color: #06425b; font-size: 14px; font-style: italic;');
});

// ===========================
// UTILITY FUNCTIONS
// ===========================

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Get computed style value
function getStyleValue(element, property) {
    return window.getComputedStyle(element).getPropertyValue(property);
}

// Add class with delay
function addClassWithDelay(element, className, delay) {
    setTimeout(() => {
        element.classList.add(className);
    }, delay);
}

// ===========================
// LEDVANCE - JavaScript Interactions
// ===========================

document.addEventListener('DOMContentLoaded', function() {

    // ===========================
    // HEADER TRANSPARENT/OPAQUE EFFECT
    // ===========================
    const header = document.querySelector('.header');
    const mainNav = document.querySelector('.main-nav');

    // Header devient opaque au hover sur la navigation
    if (mainNav && header) {
        mainNav.addEventListener('mouseenter', () => {
            header.classList.add('header--active');
        });

        mainNav.addEventListener('mouseleave', () => {
            header.classList.remove('header--active');
        });
    }

    // Header devient opaque au scroll
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            header.classList.add('header--scrolled');
        } else {
            header.classList.remove('header--scrolled');
        }
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
    // SUB-NAVIGATION (hover dropdowns handled by CSS)
    // ===========================
    const mainNavItems = document.querySelectorAll('.main-nav-item');

    // Add active state management for main nav items
    mainNavItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            mainNavItems.forEach(navItem => navItem.classList.remove('active'));
            item.classList.add('active');
        });

        item.addEventListener('mouseleave', () => {
            item.classList.remove('active');
        });
    });

    // ===========================
    // MEGA MENU
    // ===========================
    const megaMenuTriggers = document.querySelectorAll('.has-megamenu');
    const megaMenus = document.querySelectorAll('.mega-menu');
    const megaMenuCloseButtons = document.querySelectorAll('.mega-menu-close');

    megaMenuTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const megamenuId = trigger.getAttribute('data-megamenu');
            const targetMegaMenu = document.querySelector(`[data-megamenu="${megamenuId}"].mega-menu`);

            if (targetMegaMenu) {
                targetMegaMenu.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    megaMenuCloseButtons.forEach(button => {
        button.addEventListener('click', () => {
            megaMenus.forEach(menu => menu.classList.remove('active'));
            document.body.style.overflow = '';
        });
    });

    // Close mega menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            megaMenus.forEach(menu => menu.classList.remove('active'));
            document.body.style.overflow = '';
        }
    });

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
    // NEWS CAROUSEL
    // ===========================
    const carouselPrev = document.querySelector('.carousel-prev');
    const carouselNext = document.querySelector('.carousel-next');
    const carouselTrack = document.querySelector('.news-carousel-track');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    const totalSlides = 4;

    if (carouselPrev && carouselNext && carouselTrack) {
        const cardWidth = 340; // width + gap

        const updateCarousel = (index) => {
            currentSlide = index;
            const scrollAmount = index * cardWidth;
            carouselTrack.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
            // Update dots
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        };

        carouselNext.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateCarousel(currentSlide);
        });

        carouselPrev.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateCarousel(currentSlide);
        });

        // Dot click handlers
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                updateCarousel(index);
            });
        });
    }

    // ===========================
    // SEARCH TOGGLE
    // ===========================
    const searchToggle = document.querySelector('.search-toggle');

    if (searchToggle) {
        searchToggle.addEventListener('click', () => {
            console.log('Recherche activée');
        });
    }

    // ===========================
    // VIDEO TOGGLE
    // ===========================
    const videoToggle = document.querySelector('.video-toggle');

    if (videoToggle) {
        videoToggle.addEventListener('click', () => {
            console.log('Video toggle');
        });
    }

    // ===========================
    // COUNTRY SELECTOR
    // ===========================
    const countrySelector = document.querySelector('.country-selector');

    if (countrySelector) {
        countrySelector.addEventListener('click', () => {
            console.log('Sélection de pays');
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

    // Animate news cards on scroll
    const newsCards = document.querySelectorAll('.news-card');
    newsCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // Animate product items on scroll
    const productItems = document.querySelectorAll('.product-item');
    productItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(item);
    });

    // ===========================
    // MOBILE NAV STYLING
    // ===========================
    const addMobileStyles = () => {
        if (window.innerWidth <= 768) {
            const existingStyle = document.getElementById('mobile-nav-styles');
            if (!existingStyle) {
                const style = document.createElement('style');
                style.id = 'mobile-nav-styles';
                style.textContent = `
                    .nav-main.active {
                        display: flex !important;
                        position: fixed;
                        top: 60px;
                        left: 0;
                        right: 0;
                        background: #1a1a1a;
                        flex-direction: column;
                        padding: 0;
                        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                        animation: slideDown 0.3s ease;
                        z-index: 999;
                        max-height: calc(100vh - 60px);
                        overflow-y: auto;
                    }

                    .nav-main.active .main-nav {
                        flex-direction: column;
                        gap: 0;
                        width: 100%;
                    }

                    .nav-main.active .main-nav-item {
                        width: 100%;
                        border-bottom: 1px solid #3a3a3a;
                    }

                    .nav-main.active .main-nav-link {
                        width: 100%;
                        justify-content: flex-start;
                        padding: 1.25rem 2rem;
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
        }
    };

    addMobileStyles();
    window.addEventListener('resize', addMobileStyles);

    // ===========================
    // CONSOLE MESSAGE
    // ===========================
    console.log('%c Potentiel Energie ', 'background: #FF6600; color: #ffffff; font-size: 16px; font-weight: bold; padding: 10px;');
    console.log('%c Power through light ', 'color: #FF6600; font-size: 14px;');
});

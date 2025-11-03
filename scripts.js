// ===================================
// FLUHARTYML PORTFOLIO SCRIPTS
// ===================================

// ===================================
// THEME TOGGLE - REMOVED
// ===================================
// Theme toggle functionality removed from portfolio

// ===================================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// ===================================

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

// ===================================
// ACTIVE NAVIGATION LINK HIGHLIGHTING
// ===================================

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// ===================================
// TAWK.TO CHAT WIDGET
// ===================================

var Tawk_API = Tawk_API || {};
var Tawk_LoadStart = new Date();

(function(){
    var s1 = document.createElement("script");
    var s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/68f057f0965b721956897c64/1j7ldf0k3';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();

// ===================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ===================================

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

// Observe all project cards and timeline items
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.project-card, .timeline-item, .skill-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ===================================
// COPY EMAIL TO CLIPBOARD (Optional)
// ===================================

function copyEmail() {
    const email = 'your.email@example.com'; // Update with your actual email
    navigator.clipboard.writeText(email).then(() => {
        alert('Email copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy email: ', err);
    });
}

// ===================================
// VISITOR COUNTER (Optional - requires backend)
// ===================================

// This is a placeholder. To implement a real visitor counter,
// you would need a backend service or use a service like:
// - Google Analytics
// - Simple Analytics
// - CountAPI
// - Your own server-side solution

function updateVisitorCount() {
    // Placeholder function
    const counterElement = document.getElementById('visitor-count');
    if (counterElement) {
        // Example: fetch from API
        // fetch('https://api.countapi.xyz/hit/fluhartyml.github.io/visits')
        //     .then(response => response.json())
        //     .then(data => {
        //         counterElement.textContent = data.value;
        //     });
    }
}

// ===================================
// INITIALIZE ON PAGE LOAD
// ===================================

window.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio loaded successfully!');
    // Add any initialization code here
});

// ===================================
// DETECT MOBILE DEVICE
// ===================================

function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Adjust behavior for mobile if needed
if (isMobileDevice()) {
    document.body.classList.add('mobile-device');
}

// ===================================
// SCROLL TO TOP BUTTON (Optional)
// ===================================

function addScrollToTopButton() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '↑';
    scrollBtn.id = 'scroll-to-top';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: var(--accent);
        color: white;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: 1000;
        display: none;
    `;
    
    document.body.appendChild(scrollBtn);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.style.display = 'block';
            setTimeout(() => scrollBtn.style.opacity = '1', 10);
        } else {
            scrollBtn.style.opacity = '0';
            setTimeout(() => scrollBtn.style.display = 'none', 300);
        }
    });
    
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Uncomment to enable scroll-to-top button
// addScrollToTopButton();

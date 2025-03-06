document.addEventListener('DOMContentLoaded', () => {
    // Add hover sound effect to navigation links
    const navLinks = document.querySelectorAll('.game-nav a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            playHoverSound();
        });
    });

    // Add click effect to buttons
    const buttons = document.querySelectorAll('.btn-pixel');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            if (!button.closest('form')) {
                e.preventDefault();
                playClickSound();
                addClickEffect(button);
            }
        });
    });

    // Handle form submission
    const contactForm = document.querySelector('.contact-form form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        playSuccessSound();
        showThankYouMessage();
        contactForm.reset();
    });

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            section.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add scroll reveal animation to sections
    const sections = document.querySelectorAll('.game-level');
    const observerOptions = {
        threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'all 0.5s ease-out';
        sectionObserver.observe(section);
    });
});

// Sound effect functions (can be implemented with actual sound files)
function playHoverSound() {
    // Add actual sound implementation here
    console.log('Hover sound played');
}

function playClickSound() {
    // Add actual sound implementation here
    console.log('Click sound played');
}

function playSuccessSound() {
    // Add actual sound implementation here
    console.log('Success sound played');
}

function addClickEffect(element) {
    element.style.transform = 'scale(0.95)';
    setTimeout(() => {
        element.style.transform = 'scale(1)';
    }, 100);
}

function showThankYouMessage() {
    const message = document.createElement('div');
    message.textContent = 'Message sent! Thank you for reaching out!';
    message.style.color = '#00ff00';
    message.style.textAlign = 'center';
    message.style.marginTop = '20px';
    
    const form = document.querySelector('.contact-form form');
    form.appendChild(message);
    
    setTimeout(() => {
        message.remove();
    }, 3000);
}
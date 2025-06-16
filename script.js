// Initialize Lucide icons when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // Initialize card animations
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Trigger initial animation check
    animateOnScroll();
});

// Smooth scrolling function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
        });
    }
}

// Mobile menu functionality
function toggleMobileMenu() {
    const overlay = document.getElementById('mobileMenuOverlay');
    const content = document.getElementById('mobileMenuContent');
    
    overlay.classList.toggle('active');
    content.classList.toggle('active');
}

function closeMobileMenu() {
    const overlay = document.getElementById('mobileMenuOverlay');
    const content = document.getElementById('mobileMenuContent');
    
    overlay.classList.remove('active');
    content.classList.remove('active');
}

// Form validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Form submission handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Clear previous errors
            const errorElements = document.querySelectorAll('.form-error');
            errorElements.forEach(el => el.textContent = '');
            
            // Get form data
            const formData = new FormData(this);
            const data = {
                firstName: formData.get('firstName'),
                lastName: formData.get('lastName'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                service: formData.get('service'),
                message: formData.get('message')
            };
            
            // Basic validation
            let isValid = true;
            
            if (!data.firstName.trim()) {
                document.getElementById('firstNameError').textContent = 'First name is required';
                isValid = false;
            }
            
            if (!data.lastName.trim()) {
                document.getElementById('lastNameError').textContent = 'Last name is required';
                isValid = false;
            }
            
            if (!data.email.trim()) {
                document.getElementById('emailError').textContent = 'Email is required';
                isValid = false;
            } else if (!isValidEmail(data.email)) {
                document.getElementById('emailError').textContent = 'Please enter a valid email address';
                isValid = false;
            }
            
            if (!data.service) {
                document.getElementById('serviceError').textContent = 'Please select a service';
                isValid = false;
            }
            
            if (!isValid) {
                return;
            }
            
            // Show loading state
            const submitButton = document.getElementById('submitButton');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Scheduling...';
            submitButton.disabled = true;
            this.classList.add('loading');
            
            // Simulate form submission (replace with actual form handler)
            setTimeout(() => {
                // Show success message
                const messageDiv = document.getElementById('formMessage');
                messageDiv.innerHTML = `
                    <div class="success-message">
                        <strong>Thank you for your interest!</strong> We'll get back to you within 24 hours.
                    </div>
                `;
                
                // Reset form
                this.reset();
                
                // Reset button
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                this.classList.remove('loading');
                
                // Scroll to message
                messageDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 2000);
        });
    }
});

// Navigation scroll effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.nav');
    if (nav) {
        if (window.scrollY > 50) {
            nav.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            nav.style.backdropFilter = 'blur(10px)';
        } else {
            nav.style.backgroundColor = 'rgba(255, 255, 255, 1)';
            nav.style.backdropFilter = 'none';
        }
    }
});

// Animation on scroll
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function animateOnScroll() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (isElementInViewport(card)) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
}

// Event listeners
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    const mobileMenu = document.getElementById('mobileMenuContent');
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const overlay = document.getElementById('mobileMenuOverlay');
    
    if (mobileMenu && mobileMenuButton) {
        if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
            closeMobileMenu();
        }
    }
});

// Handle escape key to close mobile menu
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeMobileMenu();
    }
});
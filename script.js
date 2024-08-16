document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Lightbox functionality
    const lightbox = document.getElementById('lightbox-overlay');
    const lightboxImg = document.getElementById('lightbox-image');
    const lightboxClose = document.querySelector('.close');

    document.querySelectorAll('.lightbox').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            lightbox.style.display = 'block';
            lightboxImg.src = this.getAttribute('href');
        });
    });

    lightboxClose.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });

    // Header animation
    const header = document.querySelector('.header-animation');
    for (let i = 0; i < 50; i++) {
        let span = document.createElement('span');
        span.style.left = Math.random() * 100 + '%';
        span.style.animationDelay = Math.random() * 8 + 's';
        header.appendChild(span);
    }

    // Form submission
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to a server
        // For now, we'll just log it to the console
        console.log('Form submitted!');
        console.log('Name:', form.name.value);
        console.log('Email:', form.email.value);
        console.log('Message:', form.message.value);
        alert('Thank you for your message! I will get back to you soon.');
        form.reset();
    });

    // Improve lightbox image sizing
    lightboxImg.addEventListener('load', function() {
        const imgWidth = this.naturalWidth;
        const imgHeight = this.naturalHeight;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        
        const scaleX = (windowWidth * 0.9) / imgWidth;
        const scaleY = (windowHeight * 0.9) / imgHeight;
        const scale = Math.min(scaleX, scaleY);
        
        this.style.width = `${imgWidth * scale}px`;
        this.style.height = `${imgHeight * scale}px`;
    });
});
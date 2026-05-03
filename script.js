document.addEventListener('DOMContentLoaded', () => {
    // Sticky Navbar on Scroll
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navHeight = navbar.offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navHeight;
  
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple Auto-Scroll for Reviews (Optional)
    // Grabs the slider and scrolls it horizontally
    const reviewSlider = document.querySelector('.reviews-slider');
    let isDown = false;
    let startX;
    let scrollLeft;

    if(reviewSlider) {
        reviewSlider.addEventListener('mousedown', (e) => {
            isDown = true;
            reviewSlider.style.cursor = 'grabbing';
            startX = e.pageX - reviewSlider.offsetLeft;
            scrollLeft = reviewSlider.scrollLeft;
        });
        
        reviewSlider.addEventListener('mouseleave', () => {
            isDown = false;
            reviewSlider.style.cursor = 'grab';
        });
        
        reviewSlider.addEventListener('mouseup', () => {
            isDown = false;
            reviewSlider.style.cursor = 'grab';
        });
        
        reviewSlider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - reviewSlider.offsetLeft;
            const walk = (x - startX) * 2; // Scroll-fast
            reviewSlider.scrollLeft = scrollLeft - walk;
        });
    }
});

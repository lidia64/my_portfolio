// Scroll Animation for Home Section
window.addEventListener('scroll', function() {
    const homeSection = document.getElementById('home');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
        homeSection.style.transform = 'scale(0.98)';
    } else {
        homeSection.style.transform = 'scale(1)';
    }
});

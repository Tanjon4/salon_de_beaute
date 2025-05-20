document.addEventListener('DOMContentLoaded', function() {
    // Ajoute une classe active à l'élément de navigation actif
    const currentUrl = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentUrl) {
            link.classList.add('active');
        }
    });
    
    // Animation pour le navbar
    const navbar = document.querySelector('.navbar');
    let prevScrollpos = window.pageYOffset;
    
    window.onscroll = function() {
        const currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            navbar.style.top = "0";
            navbar.style.transition = "top 0.3s";
        } else {
            navbar.style.top = "-80px"; // Ajustez selon la hauteur de votre navbar
            navbar.style.transition = "top 0.3s";
        }
        prevScrollpos = currentScrollPos;
    };
    
    // Tooltip pour le bouton de prise de rendez-vous
    const rdvBtn = document.querySelector('.btn-primary[href*="prendre_rdv"]');
    if (rdvBtn) {
        rdvBtn.addEventListener('mouseenter', function() {
            this.innerHTML = '<i class="fas fa-calendar-plus me-2"></i> Prendre un rendez-vous';
        });
        
        rdvBtn.addEventListener('mouseleave', function() {
            this.innerHTML = 'Prendre un rendez-vous';
        });
    }
});
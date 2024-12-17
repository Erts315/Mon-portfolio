document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remove active class from all links
        document.querySelectorAll('.nav-menu a').forEach(l => {
            l.classList.remove('active');
        });
        
        // Add active class to clicked link
        link.classList.add('active');
        
        // Here you can add logic to show/hide different sections
        const section = link.dataset.section;
        // Implementation for showing different sections would go here
    });
});navigation
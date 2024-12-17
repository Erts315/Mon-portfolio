function updateDateTime() {
    const now = new Date();
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    
    const dateStr = now.toLocaleDateString('fr-FR', dateOptions);
    const timeStr = now.toLocaleTimeString('fr-FR', timeOptions);
    
    document.querySelector('.date').textContent = dateStr;
    document.querySelector('.time').textContent = timeStr;
}

updateDateTime();
setInterval(updateDateTime, 1000);

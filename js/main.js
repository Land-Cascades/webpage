/**
 * LAND-CASCADES Main Logic
 * Handles language switching and custom notifications.
 */

document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.getElementById('lang-switch');
    const notificationContainer = document.getElementById('notification-container');
    const demoBtn = document.getElementById('btn-demo-notify');

    let currentLang = 'es';

    // --- Language Switching ---
    const switchLanguage = () => {
        currentLang = currentLang === 'es' ? 'en' : 'es';

        // Update button text
        langBtn.textContent = currentLang === 'es' ? 'English' : 'Español';

        // Update all elements with data attributes
        const translatableElements = document.querySelectorAll('[data-en][data-es]');
        translatableElements.forEach(el => {
            el.textContent = el.getAttribute(`data-${currentLang}`);
        });

        // Update document lang attribute
        document.documentElement.lang = currentLang;

        showNotification(
            currentLang === 'es' ? 'Idioma cambiado a Español' : 'Language changed to English'
        );
    };

    langBtn.addEventListener('click', switchLanguage);

    // --- Notification System ---
    const showNotification = (message, duration = 3000) => {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;

        notificationContainer.appendChild(notification);

        // Auto-remove after duration
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(20px)';
            notification.style.transition = 'all 0.5s ease-out';

            setTimeout(() => {
                notification.remove();
            }, 500);
        }, duration);
    };

    // Initial greeting (optional)
    setTimeout(() => {
        showNotification(currentLang === 'es' ? 'Bienvenido a LAND-CASCADES' : 'Welcome to LAND-CASCADES');
    }, 1000);
});

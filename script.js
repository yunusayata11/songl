document.addEventListener('DOMContentLoaded', () => {
    const glowButton = document.getElementById('glowButton');
    let isGlowing = false;

    glowButton.addEventListener('click', () => {
        if (!isGlowing) {
            glowButton.classList.add('glow');
            glowButton.textContent = 'Stop Glow';
            isGlowing = true;
        } else {
            glowButton.classList.remove('glow');
            glowButton.textContent = 'Glow Effect';
            isGlowing = false;
        }
    });
});
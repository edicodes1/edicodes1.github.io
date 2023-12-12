const modeToggle = document.getElementById('modeToggle');
const stylesheet = document.getElementById('stylesheet');

modeToggle.addEventListener('change', () => {
    if (modeToggle.checked) {
        stylesheet.href = '4041.css';
    } else {
        stylesheet.href = '404.css';
    }
});

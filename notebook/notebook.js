const root = document.documentElement;

function applyDarkMode() {
    const darkTheme = {
        '--muted': '#a8a8a8',
        '--itemsbg': '#2d2d2d',
        '--translucentbg': 'rgba(26, 26, 26, 0.590)',
        '--bg': '#000',
        '--text': '#ffffff',
    };
    Object.entries(darkTheme).forEach(([key, value], index) => {
        root .style.setProperty(key, value);
    });
}

const isDarkMode = localStorage.getItem('darkMode') === 'true';
if (isDarkMode) {
    applyDarkMode();
}
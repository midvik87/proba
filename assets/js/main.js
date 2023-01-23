

document.getElementById('darkModeToggle').addEventListener('click', function() {
    const css = document.getElementById('cssfile');
    const darkModeToggle = document.getElementById('darkModeToggle');

    if (darkModeToggle.innerHTML == 'Dark Mode') {
        css.setAttribute('href','assets/css/dark.css');
        darkModeToggle.innerHTML = 'Light Mode';
    } else {
        css.setAttribute('href','assets/css/light.css');
        darkModeToggle.innerHTML = 'Dark Mode';        
    }
});

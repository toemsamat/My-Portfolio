
        const toggleBtn = document.getElementById('theme-toggle');
        const darkStyle = document.getElementById('dark-style');
        const icon = document.getElementById('theme-icon');
        const themeText = document.getElementById('themeText');

        // Load saved theme preference on page load
        if (localStorage.getItem('theme') === 'dark') {
            darkStyle.removeAttribute('disabled');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }

        toggleBtn.addEventListener('click', () => {
            const isDark = !darkStyle.disabled;

            if (isDark) {
                // Switch to light mode
                darkStyle.setAttribute('disabled', true);
                localStorage.setItem('theme', 'light');
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
                themeText.innerText = 'Dark Mode';
            } else {
                // Switch to dark mode
                darkStyle.removeAttribute('disabled');
                localStorage.setItem('theme', 'dark');
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
                themeText.innerText = 'Light Mode';
            }
        });
    
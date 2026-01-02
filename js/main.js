// KilkaLabs Website - Main JavaScript

// DOM Elements
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const mobileDropdownButton = document.getElementById('mobile-dropdown-button');
const mobileDropdownMenu = document.getElementById('mobile-dropdown-menu');
const desktopDropdownButton = document.getElementById('desktop-dropdown-button');
const desktopDropdownMenu = document.getElementById('desktop-dropdown-menu');
const copyrightYear = document.getElementById('copyright-year');

// Set copyright year
if (copyrightYear) {
    copyrightYear.textContent = new Date().getFullYear();
}

// Mobile menu toggle
if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        const isHidden = mobileMenu.classList.toggle('hidden');
        mobileMenuButton.setAttribute('aria-expanded', !isHidden);
    });
}

// Mobile dropdown toggle
if (mobileDropdownButton && mobileDropdownMenu) {
    mobileDropdownButton.addEventListener('click', (e) => {
        e.stopPropagation();
        const isHidden = mobileDropdownMenu.classList.toggle('hidden');
        mobileDropdownButton.setAttribute('aria-expanded', !isHidden);
    });
}

// Desktop dropdown functionality
if (desktopDropdownButton && desktopDropdownMenu) {
    let desktopDropdownTimeout;

    desktopDropdownButton.addEventListener('mouseenter', () => {
        clearTimeout(desktopDropdownTimeout);
        desktopDropdownMenu.classList.remove('hidden');
        desktopDropdownButton.setAttribute('aria-expanded', 'true');
    });

    desktopDropdownButton.addEventListener('mouseleave', () => {
        desktopDropdownTimeout = setTimeout(() => {
            desktopDropdownMenu.classList.add('hidden');
            desktopDropdownButton.setAttribute('aria-expanded', 'false');
        }, 100);
    });

    desktopDropdownMenu.addEventListener('mouseenter', () => {
        clearTimeout(desktopDropdownTimeout);
    });

    desktopDropdownMenu.addEventListener('mouseleave', () => {
        desktopDropdownMenu.classList.add('hidden');
        desktopDropdownButton.setAttribute('aria-expanded', 'false');
    });
}

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
    if (mobileMenu && mobileMenuButton) {
        if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
            mobileMenu.classList.add('hidden');
            mobileMenuButton.setAttribute('aria-expanded', 'false');
        }
    }
    if (desktopDropdownButton && desktopDropdownMenu) {
        if (!desktopDropdownButton.contains(e.target) && !desktopDropdownMenu.contains(e.target)) {
            desktopDropdownMenu.classList.add('hidden');
            desktopDropdownButton.setAttribute('aria-expanded', 'false');
        }
    }
});

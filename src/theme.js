const DARK_THEME_CLASS = 'dark';
const THEME_STORAGE_KEY = 'theme';

export function initializeThemeToggle() {
  const button = document.querySelector('.theme-toggle');
  const icon = button.querySelector('span');

  const refreshIcon = () => {
    icon.textContent = document.documentElement.classList.contains(DARK_THEME_CLASS) ? '☾' : '☼';
  };

  refreshIcon();

  button.addEventListener('click', () => {
    const dark = document.documentElement.classList.toggle(DARK_THEME_CLASS);
    localStorage.setItem(THEME_STORAGE_KEY, dark ? 'dark' : 'light');
    refreshIcon();
  });
}

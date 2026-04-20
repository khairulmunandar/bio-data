const themeKey = 'theme-preference';
const setTheme = (theme) => {
  document.documentElement.dataset.theme = theme;
  const toggle = document.getElementById('theme-toggle');
  if (toggle) {
    toggle.textContent = theme === 'dark' ? 'Terang' : 'Gelap';
    toggle.setAttribute('aria-label', theme === 'dark' ? 'Ubah ke mode terang' : 'Ubah ke mode gelap');
  }
  localStorage.setItem(themeKey, theme);
};
const getPreferredTheme = () => {
  const saved = localStorage.getItem(themeKey);
  if (saved) return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

window.addEventListener('DOMContentLoaded', () => {
  const currentTheme = getPreferredTheme();
  setTheme(currentTheme);
  const toggle = document.getElementById('theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      setTheme(nextTheme);
    });
  }
});

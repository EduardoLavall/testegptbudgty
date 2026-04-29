const root = document.documentElement;
const themeSelect = document.getElementById('themeSelect');
const accentSelect = document.getElementById('accentSelect');

const savedTheme = localStorage.getItem('budgty_theme');
const savedAccent = localStorage.getItem('budgty_accent');

if (savedTheme) {
  root.dataset.theme = savedTheme;
  themeSelect.value = savedTheme;
}
if (savedAccent) {
  root.dataset.accent = savedAccent;
  accentSelect.value = savedAccent;
}

themeSelect.addEventListener('change', (e) => {
  root.dataset.theme = e.target.value;
  localStorage.setItem('budgty_theme', e.target.value);
});

accentSelect.addEventListener('change', (e) => {
  root.dataset.accent = e.target.value;
  localStorage.setItem('budgty_accent', e.target.value);
});

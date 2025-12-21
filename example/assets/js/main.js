const renderCards = () => {
  if (!Array.isArray(directorySections)) return;

  directorySections.forEach((section) => {
    const container = document.querySelector(`[data-section="${section.id}"]`);
    if (!container) return;

    container.innerHTML = '';
    section.cards.forEach((card, index) => {
      const delay = 50 + index * 50;
      container.append(Components.createCard(card, delay));
    });
  });
};

const setupFilter = () => {
  const input = document.getElementById('filter');
  if (!input) return;

  input.addEventListener('input', (event) => {
    const query = event.target.value.toLowerCase().trim();
    document.querySelectorAll('article.card').forEach((card) => {
      const name = card.getAttribute('data-name') || '';
      card.style.display = name.includes(query) ? '' : 'none';
    });
  });
};

const setupThemeToggle = () => {
  const button = document.getElementById('toggle-dark');
  const root = document.documentElement;

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('theme');
  const shouldUseDark = savedTheme ? savedTheme === 'dark' : prefersDark;
  if (shouldUseDark) {
    root.classList.add('dark');
  }

  button?.addEventListener('click', () => {
    root.classList.toggle('dark');
    localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
  });
};

window.addEventListener('DOMContentLoaded', () => {
  renderCards();
  setupFilter();
  setupThemeToggle();

  if (window.AOS) {
    AOS.init({ duration: 700, once: true, offset: 20 });
  }
});

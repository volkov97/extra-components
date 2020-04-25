import './theme/colors.css';
import './theme/sizes.css';
import './theme/typos.css';

export const initTheme = (isDark = false) => {
  document.body.classList.remove('tn-theme-light');
  document.body.classList.remove('tn-theme-dark');

  document.body.classList.add(isDark ? 'tn-theme-dark' : 'tn-theme-light');
};

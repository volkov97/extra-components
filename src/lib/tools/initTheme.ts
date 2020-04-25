import './theme/colors.css';
import './theme/sizes.css';
import './theme/typos.css';

export const initTheme = (isDark = false) => {
  document.documentElement.classList.remove('tn-theme-light');
  document.documentElement.classList.remove('tn-theme-dark');

  document.documentElement.classList.add(isDark ? 'tn-theme-dark' : 'tn-theme-light');
};

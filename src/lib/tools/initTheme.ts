import './theme/body.css';
import './theme/fonts.css';
import './theme/typos.css';
import './theme/colors.css';
import './theme/sizes.css';
import './theme/mixins.css';

export const initTheme = (isDark = false) => {
  document.documentElement.classList.remove('ec-theme-light');
  document.documentElement.classList.remove('ec-theme-dark');

  document.documentElement.classList.add(isDark ? 'ec-theme-dark' : 'ec-theme-light');
};

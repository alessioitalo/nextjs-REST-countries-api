import StyledNavbar from './styled-components/StyledNavbar';
import { useContext } from 'react';
import { CountriesContext } from '../store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const ctx = useContext(CountriesContext);

  const themeSwitcher = () => {
    if (ctx.currentTheme === 'dark') {
      ctx.setCurrentTheme('light');
      return;
    }
    ctx.setCurrentTheme('dark');
  };

  return (
    <StyledNavbar>
      <div>Where in the world?</div>
      <span onClick={themeSwitcher}>
        {ctx.currentTheme === 'light' && <FontAwesomeIcon icon={faMoon} />}
        {ctx.currentTheme === 'dark' && <FontAwesomeIcon icon={faSun} />}
        {ctx.currentTheme === 'dark' ? 'Light Mode' : 'Dark Mode'}
      </span>
    </StyledNavbar>
  );
};

export default Navbar;

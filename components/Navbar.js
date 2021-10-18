import StyledNavbar from './styled-components/StyledNavbar';
import { useContext } from 'react';
import { CountriesContext } from '../store';

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
      <span onClick={themeSwitcher}>Dark mode</span>
    </StyledNavbar>
  );
};

export default Navbar;

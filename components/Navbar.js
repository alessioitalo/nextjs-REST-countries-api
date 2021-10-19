import StyledNavbar from './styled-components/StyledNavbar';
import { useContext } from 'react';
import { CountriesContext } from '../store';
import { Moon, Sunny } from 'react-ionicons';

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
      <div onClick={themeSwitcher} className='switcher'>
        {ctx.currentTheme === 'dark' && (
          <>
            <Sunny color={'hsl(0, 0%, 100%)'} />
            <span>Light Theme</span>
          </>
        )}
        {ctx.currentTheme === 'light' && (
          <>
            <Moon />
            <span>Dark Theme</span>
          </>
        )}
      </div>
    </StyledNavbar>
  );
};

export default Navbar;

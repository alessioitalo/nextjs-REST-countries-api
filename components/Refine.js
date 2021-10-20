import StyledRefine from './styled-components/StyledRefine';
import { useContext, useState } from 'react';
import { CountriesContext } from '../store';
import { Search, ChevronDown } from 'react-ionicons';

const Refine = () => {
  const ctx = useContext(CountriesContext);
  const [showRegions, setShowRegions] = useState(false);

  const refineSearchHandler = () => {
    if (e.target.value.length > 0) {
      ctx.setFilteredCountries(
        ctx.countries.filter((country) =>
          country.name.common
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
        )
      );
      return;
    }
    ctx.setFilteredCountries(ctx.countries);
  };

  const filterSearchHandler = () => {};

  return (
    <StyledRefine>
      <div className='search'>
        <Search
          color={
            ctx.currentTheme === 'dark'
              ? 'hsl(0, 0%, 100%)'
              : 'hsl(200, 15%, 8%)'
          }
        />
        <input
          placeholder='Search for a country...'
          onChange={refineSearchHandler}
        ></input>
      </div>
      <div className='filter' onClick={() => setShowRegions(!showRegions)}>
        {showRegions && (
          <ul className='regions'>
            <li>Africa</li>
            <li>America</li>
            <li>Asia</li>
            <li>Europe</li>
            <li>Oceania</li>
          </ul>
        )}
        Filter By region{' '}
        <ChevronDown
          color={
            ctx.currentTheme === 'dark'
              ? 'hsl(0, 0%, 100%)'
              : 'hsl(200, 15%, 8%)'
          }
        />
      </div>
    </StyledRefine>
  );
};

export default Refine;

import StyledRefine from './styled-components/StyledRefine';
import { useContext, useState } from 'react';
import { CountriesContext } from '../store';
import { Search, ChevronDown } from 'react-ionicons';

const Refine = () => {
  const ctx = useContext(CountriesContext);
  const [showRegions, setShowRegions] = useState(false);

  const refineSearchHandler = (e) => {
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

  const filterSearchHandler = (region) => {
    ctx.setFilteredCountries(
      ctx.countries.filter((country) => country.region === region)
    );
  };

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
            <li onClick={() => filterSearchHandler('Africa')}>Africa</li>
            <li onClick={() => filterSearchHandler('Americas')}>America</li>
            <li onClick={() => filterSearchHandler('Asia')}>Asia</li>
            <li onClick={() => filterSearchHandler('Europe')}>Europe</li>
            <li onClick={() => filterSearchHandler('Oceania')}>Oceania</li>
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

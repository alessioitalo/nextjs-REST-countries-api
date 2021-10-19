import StyledRefine from './styled-components/StyledRefine';
import { useContext } from 'react';
import { CountriesContext } from '../store';
import { Search } from 'react-ionicons';


const Refine = () => {
  const ctx = useContext(CountriesContext);

  const refineSearchHandler = (e) => {
    if (e.target.value.length > 0) {
      ctx.setFilteredCountries(
        ctx.countries.filter((country) =>
          country.name.common.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
      return;
    }
    ctx.setFilteredCountries(ctx.countries);
  };
  return (
    <StyledRefine>
      {/* <form className='search'>
        <Search /> */}
        <div className='search'>
        <Search color={ctx.currentTheme === 'dark' && 'hsl(0, 0%, 100%)'} />
        <input 
          placeholder='Search for a country...'
          onChange={refineSearchHandler}
        ></input>
        </div>
      {/* </form> */}
      <form className='filter'>
        <select>
          {/* <option value="" disabled selected>Filter by region</option> */}
          <option>Africa</option>
          <option>America</option>
          <option>Asia</option>
          <option>Europe</option>
          <option>Oceania</option>
        </select>
      </form>
    </StyledRefine>
  );
};

export default Refine;

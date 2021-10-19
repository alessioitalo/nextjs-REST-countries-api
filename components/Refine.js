import StyledRefine from './styled-components/StyledRefine';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { CountriesContext } from '../store';

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
      <form className='search'>
        {/* <label>< icon={faSearch} size="xs"/></label> */}
        <input
          placeholder='Search for a country...'
          onChange={refineSearchHandler}
        ></input>
      </form>
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

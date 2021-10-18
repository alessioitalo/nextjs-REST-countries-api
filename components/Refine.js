import StyledRefine from './styled-components/StyledRefine';

const Refine = () => {
  return (
    <StyledRefine>
      <form className="search"> 
        <input placeholder='Search for a country...'></input>
      </form>
      <form className="filter">
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

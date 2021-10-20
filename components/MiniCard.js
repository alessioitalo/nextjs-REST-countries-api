import StyledMiniCard from './styled-components/StyledMiniCard';

const MiniCard = ({ country }) => {
  return (
    <StyledMiniCard>
      <div className="flag" style={{backgroundImage: `url(${country.flags.svg})`}} />
      <div>
        <div className='name'>{country.name.common}</div>
        <ul>
          <li>
            <span>Population</span>: {country.population}
          </li>
          <li>
            <span>Capital</span>: {country.capital}
          </li>
          <li>
            <span>Region</span>: {country.region}
          </li>
        </ul>
      </div>
    </StyledMiniCard>
  );
};

export default MiniCard;

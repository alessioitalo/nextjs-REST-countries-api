import StyledDetailCard from './styled-components/StyledDetailCard';
import Link from 'next/link';

const DetailCard = ({ country }) => {
  console.log(country.name.nativeName);
  return (
      <StyledDetailCard flag={country.flags.svg}>
      <span>
        <Link href='/'>Back</Link>
      </span>
      <div className="info">
        <div className='flag' /> 
        <div>
          {country.name.common}
          <ul>
            {/* <li>Native Name: {Object.values(country.name.nativeName).map(lang=>` ${lang} `)}</li> */}
            {/* <li>Native Name: {Object.values(country.name.nativeName.common)}</li> */}
            <li>Population: {country.population}</li>
            <li>Region: {country.region}</li>
            <li>Subregion: {country.subregion}</li>
            <li>Capital: {country.capital}</li>
            <li>Top Level Domain: {country.tld}</li>
            <li>Currency: {country.currency}</li>
            <li>
              Languages:{' '}
              {Object.values(country.languages).map((lang) => ` ${lang} `)}
            </li>
          </ul>
        </div>
        </div>
      </StyledDetailCard>
  );
};

export default DetailCard;

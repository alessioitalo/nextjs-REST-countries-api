import StyledDetailCard from './styled-components/StyledDetailCard';
import Link from 'next/link';
import { ArrowBack } from 'react-ionicons';
import { useContext } from 'react';
import { CountriesContext } from '../store';

const DetailCard = ({ country }) => {
  const ctx = useContext(CountriesContext);

  const nativeNameArray = Object.values(country.name.nativeName);

  return (
    <StyledDetailCard flag={country.flags.svg}>
      <span className='back'>
        <ArrowBack color={ctx.currentTheme === 'dark' ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'}/>
        <Link href='/'>Back</Link>
      </span>
      <div className='info'>
        <div className='flag'></div>
        <div className='details'>
          <span className='name'>{country.name.common}</span>
          <div>
            <ul>
              <li>
                <span>Native Name</span>:{' '}
                {nativeNameArray[nativeNameArray.length - 1].common}
              </li>
              <li>
                <span>Population</span>: {country.population}
              </li>
              <li>
                <span>Region</span>: {country.region}
              </li>
              <li>
                <span>Subregion</span>: {country.subregion}
              </li>
              <li>
                <span>Capital</span>: {country.capital}
              </li>
            </ul>
            <ul>
              <li>
                <span>Top Level Domain</span>: {country.tld}
              </li>
              <li>
                <span>Currencies</span>:{' '}
                {Object.values(country.currencies).map(
                  (curr) => ` ${curr.name} `
                )}
              </li>
              <li>
                <span>Languages</span>:{' '}
                {Object.values(country.languages).map((lang) => ` ${lang} `)}
              </li>
            </ul>
          </div>
          <div>
            {country.borders && (
              <span>
                Border Countries:
                {Object.values(country.borders).map((border) => (
                  <Link href={`/${border}`} key={border} passHref>
                    <span className='border'>{` ${border} `}</span>
                  </Link>
                ))}
              </span>
            )}
          </div>
        </div>
      </div>
    </StyledDetailCard>
  );
};

export default DetailCard;

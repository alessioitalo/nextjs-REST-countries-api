import Head from 'next/head';
import Layout from '../components/Layout';
import Refine from '../components/Refine';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { lightTheme, darkTheme, CountriesContext } from '../store';
import MiniCard from '../components/MiniCard';
import { useRouter } from 'next/router';

export async function getStaticProps() {
  const response = await fetch('https://restcountries.com/v3.1/all');
  const countries = await response.json();
  // const countries = Object.keys(data).map(key=>{
  //   return data[key]
  // })

  return {
    props: { countries: countries },
  };
}

export default function Home({ countries }) {
  const [currentTheme, setCurrentTheme] = useState('dark');
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const router = useRouter();
  return (
    <CountriesContext.Provider
      value={{
        currentTheme,
        setCurrentTheme,
        filteredCountries,
        setFilteredCountries,
        countries,
      }}
    >
      <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
        <Layout>
          <Refine />
          <div className='container'>
            {/* country here... */}
            {/* <p>{(countries[0].name.common)}</p> */}
            {filteredCountries.slice(0, 20).map((country) => (
              <MiniCard key={country.cca2} country={country} />
            ))}
          </div>
        </Layout>
      </ThemeProvider>
    </CountriesContext.Provider>
  );
}

{
  /* <ul key={country.altSpellings}>
                <li>{country.name.common}</li>
                <li>{country.population}</li>
              </ul> */
}

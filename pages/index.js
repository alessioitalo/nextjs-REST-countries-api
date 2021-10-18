import Head from 'next/head';
import Layout from '../components/Layout';
import Refine from '../components/Refine';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { lightTheme, darkTheme, CountriesContext } from '../store';
import MiniCard from '../components/MiniCard';

export async function getStaticProps() {
  const response = await fetch('https://restcountries.com/v3.1/all');
  console.log(response);
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
  return (
    // <div className={styles.container}>
    <CountriesContext.Provider value={{ currentTheme, setCurrentTheme }}>
      <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
        <Layout>
          <Head>
            <title>Frontend Mentor - REST countries api</title>
            <meta name='description' content='Frontend Mentor challenge ' />
            <link rel='icon' href='/favicon.ico' />
          </Head>
          <Refine />
          <div className="container">
            {/* country here... */}
            {/* <p>{(countries[0].name.common)}</p> */}
            {countries.slice(1,20).map((country) => (
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

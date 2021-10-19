import '../styles/globals.css';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { lightTheme, darkTheme, CountriesContext } from '../store';

function MyApp({ Component, pageProps }) {
  const [currentTheme, setCurrentTheme] = useState('dark');
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [countries, setCountries] = useState([])
  return (
    <CountriesContext.Provider
      value={{
        currentTheme,
        setCurrentTheme,
        filteredCountries,
        setFilteredCountries,
        countries,
        setCountries,
      }}
    >
      <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </CountriesContext.Provider>
  );
}

export default MyApp;

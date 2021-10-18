import Head from 'next/head';
import Layout from '../components/Layout';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { lightTheme, darkTheme, CountriesContext } from '../store';

export default function Home() {
  const [currentTheme, setCurrentTheme] = useState('dark');

  return (
    // <div className={styles.container}>
    <CountriesContext.Provider value={{currentTheme, setCurrentTheme}}>
      <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
        <Layout>
          <Head>
            <title>Frontend Mentor - REST countries api</title>
            <meta name='description' content='Frontend Mentor challenge ' />
            <link rel='icon' href='/favicon.ico' />
          </Head>
          <main>main here</main>

          <footer>footer here</footer>
        </Layout>
      </ThemeProvider>
    </CountriesContext.Provider>
  );
}

import Head from 'next/head';
import Layout from '../components/Layout';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
// import styles from '../styles/Home.module.css'

export default function Home() {
  // const theme = useContext(ThemeContext);
  const [currentTheme, setCurrentTheme] = useState('dark');
  const themeSwitcher = () => {
    console.log(currentTheme);
    if (currentTheme === 'dark') {
      setCurrentTheme('light');
      return;
    }
    setCurrentTheme('dark');
  };

  const lightTheme = {
    background: 'hsl(0, 0%, 98%)',
    text: 'hsl(200, 15%, 8%)',
    element: 'hsl(0, 0%, 100%)',
  };

  const darkTheme = {
    background: 'hsl(207, 26%, 17%)',
    text: 'hsl(0, 0%, 100%)',
    element: 'hsl(209, 23%, 22%)',
  };

  return (
    // <div className={styles.container}>
    <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
      <Layout>
        <Head>
          <title>Frontend Mentor - REST countries api</title>
          <meta name='description' content='Frontend Mentor challenge ' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <button onClick={themeSwitcher}>Switch</button>
        <main>main here</main>

        <footer>footer here</footer>
      </Layout>
    </ThemeProvider>
  );
}

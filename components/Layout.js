import Navbar from './Navbar';
import Head from 'next/head';
import StyledLayout from './styled-components/StyledLayout';
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Frontend Mentor - REST countries api</title>
        <meta name='description' content='Frontend Mentor challenge ' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <StyledLayout>
        <Navbar />
        {children}
      </StyledLayout>
    </>
  );
};

export default Layout;

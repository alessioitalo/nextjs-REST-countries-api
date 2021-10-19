import Layout from '../components/Layout';
import { useContext, useState, useEffect } from 'react';
import { CountriesContext } from '../store';
import { useRouter } from 'next/router';

// export async function getStaticProps(context) {
//   const country = context.params.country;
//   const
// }

// export async function getStaticPaths() {
//   const response = await fetch('https://restcountries.com/v3.1/all');
//   const countries = await response.json();
//   const paths = countries.map((country) => {
//     return { params: { country: country.name.common } };
//   });
//   return { paths, fallback: false };
// }

const Country = () => {
  const ctx = useContext(CountriesContext);
  const [currentCountry, setCurrentCountry] = useState();
  const router = useRouter();
  console.log(router.query)

  useEffect(() => {
    if (ctx.countries.length === 0){
      router.push('/')
    }
    setCurrentCountry(ctx.countries.find((country) => country.cca2 === router.query.country));
  });

  

  return (
    <Layout>
      <h1>this is a country page</h1>
      {currentCountry && <p>{currentCountry.name.common}</p>}
    </Layout>
  );
};

export default Country;

import Layout from '../components/Layout';
import Refine from '../components/Refine';
import { CountriesContext } from '../store';
import MiniCard from '../components/MiniCard';
import { useContext, useEffect } from 'react';
import Link from 'next/link';

export async function getStaticProps() {
  const response = await fetch('https://restcountries.com/v3.1/all');
  const countries = await response.json();
  return {
    props: { countries: countries },
  };
}

export default function Home({ countries }) {
  useEffect(() => {
    ctx.setCountries(countries);
    ctx.setFilteredCountries(countries);
  }, []);

  const ctx = useContext(CountriesContext);
  return (
    <Layout>
      <Refine />
      <div className='container'>
        {ctx.filteredCountries.slice(0, 20).map((country) => (
          <>
            <Link href={`/${country.cca2}`} key={country.cca2}>
              <span className="minicard-container">
                <MiniCard key={country.cca2} country={country} />
              </span>
            </Link>
          </>
        ))}
      </div>
    </Layout>
  );
}

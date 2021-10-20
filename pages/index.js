import Layout from '../components/Layout';
import Refine from '../components/Refine';
import { CountriesContext } from '../store';
import MiniCard from '../components/MiniCard';
import { useContext, useEffect, Fragment } from 'react';
import Link from 'next/link';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState } from 'react/cjs/react.development';

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

  const [slice, setSlice] = useState(20);

  const showMore = () => {
    setSlice((prevSlice) => prevSlice + 20);
  };

  const ctx = useContext(CountriesContext);

  return (
    <Layout>
      <Refine />
      <InfiniteScroll dataLength={slice} next={showMore} hasMore={true}>
        <div className='container'>
          {ctx.filteredCountries.slice(0, slice).map((country) => (
            <Fragment key={country.cca2}>
              <Link href={`/${country.cca3}`}>
                <span className='minicard-container'>
                  <MiniCard country={country} />
                </span>
              </Link>
            </Fragment>
          ))}
        </div>
      </InfiniteScroll>
    </Layout>
  );
}

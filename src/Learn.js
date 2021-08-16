import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch-dom';
import Places from './Components/SearchBox/Algolia/Places';

const searchClient = algoliasearch(
  'latency',
  '6be0576ff61c053d5f9a3225e2a90f76'
);

const Learn = () => (
  <InstantSearch indexName="airports" searchClient={searchClient}>
    <Places
      defaultRefinement={{
        lat: 37.7793,
        lng: -122.419
      }}
    />
  </InstantSearch>
);
export default Learn;
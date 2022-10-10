import React, { Suspense, useState } from 'react';
import './css/home.css';
import useBreakpoint from '../Utilities/CustomHooks/useBreakPoint';
const SearchBar = React.lazy(() => import('../Components/SearchBar/SearchBar'));
const Header = React.lazy(() => import('../Components/Header/Header.jsx'));
const PokemonList = React.lazy(() => import('../Components/PokemonList/PokemonList'));
const FilterMobileModal = React.lazy(() =>
	import('../Components/Filter/FilterMobile/FilterMobileModal'),
);
const FilterButton = React.lazy(() => import('../Components/Filter/FilterMobile/FilterButton'));
const FilterDeskTopContainer = React.lazy(() =>
	import('../Components/Filter/FilterDeskTop/FilterDeskTopContainer'),
);

export const Home = (props) => {
	const [filterModalOpen, setFilterModalOpen] = useState(false);
	const { width } = useBreakpoint();
	return (
		<>
			<Suspense fallback={<div>Loading</div>}>
				<div className="homeContainer">
					<Header />
					<div className="searchFilterContainer">
						<SearchBar />
						{width > 900 && <FilterDeskTopContainer />}
						<FilterButton handleModal={() => setFilterModalOpen(true)} />
					</div>
					<PokemonList />
					<FilterMobileModal open={filterModalOpen} setOpen={setFilterModalOpen} />
				</div>
			</Suspense>
		</>
	);
};

export default Home;

import React, { useEffect, useState } from 'react';
import './css/pokemonList.css';
import { useSelector } from 'react-redux';
import PokemonCard from './PokemonCard';
import { getPokemonListObject } from '../../redux/selector/pokemonListSelector';
import { LoadingIndicators } from '../../Constant/contstants';
import { getFilterList } from '../../redux/selector/filterSelector';
import { getTypesMasterData } from '../../redux/selector/typesMasterDataSelector';
import { getGenderMasterData } from '../../redux/selector/genderMasterDataSelector';
import NoResultsFound from '../NoResultsFound/NoResultsFound';
import { filteredPokemons } from '../../Utilities/filtereddata';

const PokemonList = function PokemonList() {
	const { loading, pokemonListResponse, pokemonListError, pokemonListSearchResults, searchValue } =
		useSelector(getPokemonListObject);

	const { filterList } = useSelector(getFilterList);
	const { typesMasterData } = useSelector(getTypesMasterData);
	const { genderMasterData } = useSelector(getGenderMasterData);
	const [displayData, setDisplayData] = useState(pokemonListResponse?.results);

	useEffect(() => {
		if (searchValue?.length === 0) {
			setDisplayData(
				filteredPokemons(
					pokemonListResponse?.results,
					filterList,
					typesMasterData,
					genderMasterData,
				),
			);
		} else {
			setDisplayData(
				filteredPokemons(pokemonListSearchResults, filterList, typesMasterData, genderMasterData),
			);
		}
	}, [
		searchValue,
		pokemonListResponse,
		pokemonListSearchResults,
		filterList,
		genderMasterData,
		typesMasterData,
	]);

	const errorUI = pokemonListError ? <p>Error</p> : '';
	const loadingUI =
		loading === LoadingIndicators.LOADING ? (
			<p>{LoadingIndicators.LOADING}</p>
		) : loading === LoadingIndicators.FAILURE ? (
			<p>{LoadingIndicators.FAILURE}</p>
		) : null;

	const noresultsUI = loading !== LoadingIndicators.LOADING &&
		searchValue?.length > 0 &&
		displayData?.length === 0 && <NoResultsFound searchValue={searchValue} />;

	return (
		<div className="pokemonList">
			{loadingUI}
			{noresultsUI}
			{errorUI}
			{displayData &&
				displayData?.map((pokemon, index) => {
					return (
						<PokemonCard pokemon={pokemon} pokemonDetailsUrl={pokemon?.url} key={pokemon?.name} />
					);
				})}
		</div>
	);
};

export default PokemonList;

import React, { useState } from 'react';
import './SearchBar.css';
import { ReactComponent as SearchIcon } from '../../asset/Icons/search.svg';
import { ReactComponent as CloseIcon } from '../../asset/Icons/closeIcon.svg';
import { useDispatch } from 'react-redux';
import { searchPokemonList } from '../../redux/actionsContainer/actionCreator/pokemonListActionCreator';
import { ConstantText } from '../../Constant/contstants';

export const SearchBar = () => {
	const [wordEntered, setWordEntered] = useState('');
	const dispatch = useDispatch();

	const handleClick = () => {
		if (wordEntered.length) {
			setWordEntered('');
			dispatch(searchPokemonList(''));
		}
	};
	const handleSearch = (searchValue) => {
		dispatch(searchPokemonList(searchValue));
	};
	return (
		<div className="search">
			<div className="searchLabel">
				<label>Search by</label>
			</div>
			<div className="searchInputs">
				<input
					type="text"
					placeholder={ConstantText.SearchPlaceHolder}
					value={wordEntered}
					onChange={(event) => {
						setWordEntered(event.target.value);

						handleSearch(event.target.value);
					}}
				/>
				<div className="searchIcon" onClick={handleClick}>
					{wordEntered.length ? <CloseIcon /> : <SearchIcon />}
				</div>
			</div>
		</div>
	);
};

export default SearchBar;

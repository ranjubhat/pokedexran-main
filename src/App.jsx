import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { fetchGenderMasterDataApiCall } from './redux/actionsContainer/actionCreator/genderMasterDataActionAcreator';
import { fetchTypesMasterDataApiCall } from './redux/actionsContainer/actionCreator/typesMasterDataActionCreator';
import Home from './Screens/Home';
import { fetchPokemonsApiCall } from './redux/actionsContainer/actionCreator/pokemonListActionCreator';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchPokemonsApiCall());
		dispatch(fetchTypesMasterDataApiCall());
		dispatch(fetchGenderMasterDataApiCall());
		// eslint-disable-next-line
	}, []);

	return (
		<div className="App">
			<Home />
		</div>
	);
}

export default App;

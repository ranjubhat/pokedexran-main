import { combineReducers } from 'redux';
import { pokemonDetailsReducer } from './pokemonDetailsReducer';
import { pokemonListReducer } from './pokemonListReducer';
import { genderMasterDataReducer } from './genderMasterDataReducer';
import { typesMasterDataReducer } from './typesMasterDataReducer';
import { filterReducer } from './filterReducer';
export const rootReducer = combineReducers({
	pokemonList: pokemonListReducer,
	pokemonDetails: pokemonDetailsReducer,
	genderMasterData: genderMasterDataReducer,
	typesMasterData:typesMasterDataReducer,
	filter:filterReducer
});

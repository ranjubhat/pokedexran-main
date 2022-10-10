import { Pokemon_Color_Codes } from '../Constant/contstants';

export const getColorCode = (types) => {
	let colorCodeArray = [];
	// eslint-disable-next-line
	types?.map((data) => {// eslint-disable-next-line
		Object.entries(Pokemon_Color_Codes).filter((pokemonColorCode) => {
			if (data.type.name === pokemonColorCode[0].toLowerCase()) {
				colorCodeArray.push(pokemonColorCode[1]);
			}
		});
	});
	if (colorCodeArray.length > 0) {
		return colorCodeArray.length > 1
			? `linear-gradient(${colorCodeArray[0]},${colorCodeArray[1]})`
			: colorCodeArray[0];
	}
};

import { GenderList } from '../../Constant/contstants';

export const convertToThreeDigits = (number) => {
	return (
		number?.toLocaleString('en-US', {
			minimumIntegerDigits: 3,
			useGrouping: false,
		}) || number
	);
};

export const formatHeight = (height) => {
	let formattedHeight = ((height / 10) * 3.2808).toFixed(1);
	formattedHeight = (formattedHeight + '').split('.');
	return `${formattedHeight[0]||""}'${formattedHeight[1]||""}"`;
};

export const FormatPokemonDetails = (
	genderMasterData,
	pokemonName,
	types,
	damageMasterData,
	pokemonDescription,
) => {
	const genderData = GenderList.reduce((FinalArray, current) => {
		if (genderMasterData[current]?.includes(pokemonName)) {
			FinalArray = [...FinalArray, current];
		}
		return FinalArray;
	}, []);
	const weakness = types?.reduce((finallArray, current) => {
		finallArray = [...new Set([...finallArray, ...damageMasterData[current?.type?.name]])];
		return finallArray;
	}, []);

	let description = pokemonDescription?.flavor_text_entries?.reduce((finalArray, current) => {
		if (current?.language?.name === 'en') {
			finalArray = [...finalArray, current?.flavor_text];
		}
		return finalArray;
	}, []);
	description = [...new Set(description)];
	description = description.reduce(
		(finalString, currentItem) => (finalString = finalString + currentItem),
		'',
	);

	return { genderData, weakness, description };
};


export const getTextLimit = (width) => {
	let limit = 150;
	switch (true) {
		case width < 500:
			limit = 150;
			break;
		case width > 500 && width < 700:
			limit = 170;
			break;
		case width >= 900 && width < 1200:
			limit = 400;
			break;
		case width >= 1200:
			limit = 600;
			break;
		default:
			limit = 250;
	}
	return limit;
};

export const getComma = (list, index) => {
	let value = '';
	if (list.length - 1 !== index) {
		value = ',';
	}
	return value;
};
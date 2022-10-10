export const filteredPokemons = (pokemonData, filterList, typesMasterData, genderMasterData) => {
	let tempData = pokemonData ? [...pokemonData] : [];
	if (
		filterList['Type']?.length === Object.keys(typesMasterData)?.length &&
		filterList['Gender']?.length === Object.keys(genderMasterData)?.length
	) {
		return tempData;
	} else {
		let genderFiltereddata = genderFilter(tempData, filterList, genderMasterData);

		let fullList = typeFilter(genderFiltereddata, filterList, typesMasterData);

		return fullList;
	}
};

const genderFilter = (data, filterList, genderMasterData) => {
	// eslint-disable-next-line
	let updatedData = data?.filter((item) => {
		for (let gender of filterList['Gender']) {
			if (genderMasterData[gender]?.includes(item.name)) {
				return item;
			}
		}
	});
	return updatedData;
};

const typeFilter = (data, filterList, typesMasterData) => {
	// eslint-disable-next-line
	let updatedData = data?.filter((item) => {
		for (let type of filterList['Type']) {
			if (typesMasterData[type]?.includes(item.name)) {
				return item;
			}
		}
	});
	return updatedData;
};

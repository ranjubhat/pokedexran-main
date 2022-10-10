import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { stat } from '../../../Constant/contstants';
import { getFilterList } from '../../../redux/selector/filterSelector';
import CustomSelect from '../../CustomSelect/CustomSelect';
import './filterDeskTop.css';

function FilterDeskTopContainer() {
	
	const [filterState, setFilterState] = useState({});
	const { filterList, completeList } = useSelector(getFilterList);


	const filterArrayMasterData = [
		['Type', [...completeList?.Type]],
		['Gender', [...completeList?.Gender]],
		['Stat', [...stat]],
	];

	useEffect(() => {
		setFilterState(filterList);
	}, [filterList]);

	return (
		<div style={{ position: 'relative' }}>
			<div className="filterDeskTopContainer">
				{filterArrayMasterData.map((filterItem, index) => {
					return (
						<CustomSelect
							filterType={filterItem[0]}
							content={filterItem[1]}
							filterState={filterState}
							setFilterState={setFilterState}
							key={filterItem[0]}
						
						/>
					);
				})}
			</div>
		</div>
	);
}
export default FilterDeskTopContainer;

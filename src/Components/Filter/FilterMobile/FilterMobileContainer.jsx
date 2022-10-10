import React, { useEffect, useState } from 'react';
import './css/filterMobileContainer.css';
import { Box } from '@mui/system';
import { ReactComponent as CloseIcon } from '../../../asset/Icons/closeIcon.svg';
import FilterMobile from './FilterMobile';
import { useDispatch, useSelector } from 'react-redux';
import {
	resetFilter,
	updateFilter,
} from '../../../redux/actionsContainer/actionCreator/filterActionCreator';
import { getFilterList } from '../../../redux/selector/filterSelector';
import { ConstantText, stat } from '../../../Constant/contstants';

function FilterMobileContainer({ handleClose }) {
	const dispatch = useDispatch();
	const [filterState, setFilterState] = useState({});
	const { filterList, completeList } = useSelector(getFilterList);

	const filterArrayMasterData = [
		['Type', [...completeList?.Type]],
		['Gender', [...completeList?.Gender]],
		['Stat', [...stat]],
	];
	const materialBoxStyle = {
		display: 'flex',
		flexDirection: 'column',
		bgcolor: '#FFFFFF',
		height: '90%',
		boxShadow: 24,
		alignItems: 'center',
		width: '90%',
		alignSelf: 'center',
		borderRadius: '8px',
		overflow: 'auto',
		overflowX: 'hidden',
	};

	useEffect(() => {
		setFilterState(filterList);
	}, [filterList]);

	return (
		<Box sx={materialBoxStyle}>
			<div className="filterMobileHeadingContainer">
				<h2 style={{ fontSize: '25px', fontWeight: 800, color: '#2E3156' }}>Filters</h2>
				<button style={{ background: 'none' }} onClick={handleClose}>
					<CloseIcon />
				</button>
			</div>
			<hr style={{ color: 'grey', width: '90%', border: '0.2px solid #2E315626' }} />
			<div className="filterMobileAllgridContainer">
				{filterArrayMasterData.map((filterItem, index) => {
					return (
						<div style={{ padding: '10px', alignSelf: 'center' }} key={filterItem[0]}>
							<FilterMobile
								filterType={filterItem[0]}
								content={filterItem[1]}
								filterState={filterState}
								setFilterState={setFilterState}
							/>
						</div>
					);
				})}
			</div>
			<div className="filterMobileButtonsContainer">
				<button
					className="filterMobileApplyResetButton"
					style={{
						color: '#2E3156',
						backgroundColor: '#FFFFFF',
					}}
					onClick={() => {
						dispatch(resetFilter());
						handleClose();
					}}
				>
					{ConstantText.Reset}
				</button>
				<button
					style={{
						backgroundColor: '#2E3156',
						color: 'white',
					}}
					className="filterMobileApplyResetButton"
					onClick={() => {
						dispatch(updateFilter(filterState));
						handleClose();
					}}
				>
					{ConstantText.Apply}
				</button>
			</div>
		</Box>
	);
}

export default FilterMobileContainer;

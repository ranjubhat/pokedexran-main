import React, { Suspense, useState } from 'react';
import { ReactComponent as DownArrowIcon } from '../../asset/Icons/downArrowIcon.svg';
import './customselect.css';
import { useDispatch } from 'react-redux';
import { updateFilter } from '../../redux/actionsContainer/actionCreator/filterActionCreator';
const FilterLabel = React.lazy(() => import('../Filter/FilterMobile/FilterLabel'));

function CustomSelect({ filterType, content, filterState, setFilterState, handleClose }) {
	const dispatch = useDispatch();
	const [expanded, setExpanded] = useState(false);

	const handleCheckBox = (value) => {
		let filterLocal = { ...filterState };
		if (!filterLocal[filterType]?.includes(value)) {
			filterLocal[filterType] = [...filterLocal[filterType], value];
		} else {
			filterLocal[filterType] = filterLocal[filterType].filter((item) => item !== value);
		}
		setFilterState(filterLocal);
	};

	return (
		<div className="customSelectContainer">
			<div className="customSelectType">
				<label>{filterType}</label>
			</div>
			<div
				style={{
					backgroundColor: expanded ? 'white' : '#C9DDE2',
				}}
				className="customSelectLabelContainer"
				onClick={() => {
					if (expanded) {
						dispatch(updateFilter(filterState));
					}
					setExpanded(!expanded);
				}}
			>
				<div className="customSelectLabel">
					<Suspense fallback={<div>Loading...</div>}>
						<FilterLabel filterState={filterState} filterType={filterType} />
					</Suspense>

					<DownArrowIcon />
				</div>
			</div>
			{expanded && (
				<div
					className="dropDownOptionContainer customBorderRadius"
					style={{ maxHeight: '200px', overflow: 'scroll' }}
				>
					{content.map((item, index) => (
						<>
							<div className="inputLableContainer checkBox ">
								<input
									type="checkbox"
									id={item}
									className="customInput"
									checked={filterState[filterType]?.includes(item)}
									onChange={() => handleCheckBox(item)}
								/>
								<label htmlFor={item} className="customInputLabel">
									{item?.toUpperCase()}
								</label>
							</div>
							<hr className="customSelectHorizontalLine" />
						</>
					))}
				</div>
			)}
		</div>
	);
}

export default CustomSelect;

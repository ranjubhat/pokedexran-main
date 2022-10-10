import React, { useState } from 'react';
import { ReactComponent as ExpandIcon } from '../../../asset/Icons/ExapndIcon.svg';
import { ReactComponent as CollapseIcon } from '../../../asset/Icons/CollapseIcon.svg';
import FilterLabel from './FilterLabel';
import './css/filterMobile.css';
function FilterMobile(props) {
	const { filterType = 'Type', content, filterState, setFilterState } = props;
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
		<div className="filterMobileIndividualRowContainer" id={filterType}>
			<div className="filterTypeRowMobile">
				<div className="filterTypeMobile">{filterType}</div>
				<div className="verticalLine"></div>
				<FilterLabel filterState={filterState} filterType={filterType} />

				{expanded ? (
					<CollapseIcon onClick={() => setExpanded(false)} />
				) : (
					<ExpandIcon
						onClick={() => {
							setExpanded(true);
						}}
					/>
				)}
			</div>
			{expanded && (
				<div className="filterMobileContentContainer">
					{content.map((item, index) => {
						return (
							<div className="filerMobileCheckBoxRow" key={index + item[0]}>
								<input
									type="checkbox"
									id={item}
									className="filerMobileCheckBox checkBox"
									checked={filterState[filterType]?.includes(item)}
									onChange={() => handleCheckBox(item)}
								/>
								<label htmlFor={item} className="filterMobileLabel">
									{item?.toUpperCase()}
								</label>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
}

export default FilterMobile;

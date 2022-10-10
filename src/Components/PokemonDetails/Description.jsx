import React, { useMemo } from 'react';
import useBreakpoint from '../../Utilities/CustomHooks/useBreakPoint';
import { getTextLimit } from '../../Utilities/FormatData/formatdata';
import './css/description.css';
function Description({ description, handleReadMore, id }) {
	const { width } = useBreakpoint();
	const limit = useMemo(() => getTextLimit(width), [width]);

	return (
		<div id={'content'} className="descriptionContainer">
			{description?.slice(0, limit)}
			{description?.length > limit && (
				<button aria-describedby={id} className="readMoreButton" onClick={handleReadMore}>
					...read more
				</button>
			)}
		</div>
	);
}

export default Description;

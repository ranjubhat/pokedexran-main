import React, { Suspense } from 'react';
import { ConstantText, Pokemon_Color_Codes } from '../../../Constant/contstants';
import { getComma } from '../../../Utilities/FormatData/formatdata';
import './css/detailsbottomContainer.css';
const Chip = React.lazy(() => import('../../Chip/Chip.jsx'));
function DetailsBottomContainer({
	genderData,
	pokemonDescription,
	pokeMonDetailsLocalState,
	weakness,
	height,
	weight,
}) {
	const HeightWeightContainer = [
		{ title: ConstantText.Height, value: height },
		{ title: ConstantText.Weight, value: weight + ConstantText.Kg },
	];
	
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<div className="bottomContainer">
				{HeightWeightContainer.map((heightWeightObj) => {
					return (
						<div className="individualGrid" key={heightWeightObj.title + 'grid'}>
							<strong className="gridTitle">{heightWeightObj.title}</strong>
							<p className="gridValue">{heightWeightObj.value}</p>
						</div>
					);
				})}

				<div className="individualGrid">
					<strong className="gridTitle">{ConstantText.Gender}</strong>
					<div style={{ display: 'flex', flexDirection: 'row' }}>
						{genderData?.map((item, index) => {
							return (
								<span className="gridValue" key={item}>
									{`${item}${getComma(genderData?.length, index)}`}
								</span>
							);
						})}
					</div>
				</div>
				<div className="individualGrid">
					<strong className="gridTitle">{ConstantText.Egg_Groups}</strong>
					<div style={{ display: 'flex', flexDirection: 'row' }}>
						{pokemonDescription?.egg_groups?.map((item, index) => {
							return (
								<p className="gridValue" key={item.name}>
									{' '}
									{`${item.name}${getComma(pokemonDescription?.egg_groups, index)}  `}
								</p>
							);
						})}
					</div>
				</div>

				<div className="individualGrid">
					<strong className="gridTitle">{ConstantText.Abilities}</strong>
					<div style={{ display: 'flex', flexDirection: 'row' }}>
						{pokeMonDetailsLocalState?.abilities?.map((abilityObj, index) => {
							return (
								<p className="gridValue" key={index + abilityObj?.ability?.name}>
									{`${abilityObj?.ability?.name}${getComma(
										pokeMonDetailsLocalState?.abilities,
										index,
									)}`}
								</p>
							);
						})}
					</div>
				</div>

				<div className="individualGrid">
					<strong className="gridTitle">{ConstantText.Types}</strong>
					<div style={{ display: 'flex', flexDirection: 'row' }}>
						{pokeMonDetailsLocalState?.types?.map((item, index) => {
							return (
								<Chip
									content={item?.type?.name}
									backgroundColor={Pokemon_Color_Codes[item?.type?.name?.toUpperCase()]}
									key={index + item?.type?.name}
								/>
							);
						})}
					</div>
				</div>

				<div className="individualGrid" style={{ gridColumnEnd: 'span 2' }}>
					<strong className="gridTitle">{ConstantText.Weak_Against}</strong>
					<div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}>
						{weakness?.map((item, index) => {
							return (
								<Chip
									content={item}
									backgroundColor={Pokemon_Color_Codes[item.toUpperCase()]}
									key={index + item}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</Suspense>
	);
}

export default DetailsBottomContainer;

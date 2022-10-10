import React from 'react';
import { Modal } from '@mui/material';
import PokemonDetailsMobile from '../PokemonDetails/PokemonDetails';
const CustomModal = (props) => {
	const { open, setOpen } = props;
	const handleClose = () => setOpen(false);

	return (
		<div>
			<Modal
				open={Boolean(open)}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					alignSelf: 'center',
				}}
			>
				<PokemonDetailsMobile handleClose={handleClose} id={open} />
			</Modal>
		</div>
	);
};

export default CustomModal;

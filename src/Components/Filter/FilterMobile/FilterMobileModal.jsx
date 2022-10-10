import React from 'react';
import { Modal } from '@mui/material';
import FilterMobileContainer from './FilterMobileContainer';
function FilterMobileModal(props) {
	const { open, setOpen } = props;
	const handleClose = () => setOpen(false);

	return (
		<Modal
			sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
			open={Boolean(open)}
			onClose={handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
			componentsProps={<div style={{ backgroundcolor: 'yellow' }}></div>}
		>
			<FilterMobileContainer handleClose={handleClose} />
		</Modal>
	);
}

export default FilterMobileModal;

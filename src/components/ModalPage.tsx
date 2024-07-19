import React from 'react';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface BasicModalProps {
  open: boolean;
  handleClose: () => void;
  game?: {
    title: string;
    description: string;
    image: string;
  };
}

const BasicModal: React.FC<BasicModalProps> = ({ open, handleClose, game }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={style}>
        {game && (
          <>
            <Box sx={{ mb: 5, textAlign: "center" }}>
            <iframe
              src="https://scratch.mit.edu/projects/1033151399/embed"
              allowFullScreen
              width="100%"
              height="500px"
              frameBorder="0"
              title="Scratch Project"
              style={{ maxWidth: '100%' }}
            ></iframe>
            </Box>
          </>
        )}
        {!game && (
          <>
            <Typography id="modal-title" variant="h6" component="h2">
              No Game Selected
            </Typography>
            <Typography id="modal-description" sx={{ mt: 2 }}>
              Please select a game to see the details.
            </Typography>
          </>
        )}
      </Box>
    </Modal>
  );
};

export default BasicModal;

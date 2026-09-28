import React from 'react';
import { Dialog, DialogContent, IconButton, useTheme, useMediaQuery } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface VideoDialogProps {
  open: boolean;
  src: string;
  title?: string;
  onClose: () => void;
}

/**
 * videodialog: full-screen popup video player, matching the ZoomImage dialog styling
 * used by LinkIcons so play-icon links open videos in place instead of a new tab
 */
const VideoDialog: React.FC<VideoDialogProps> = ({ open, src, title, onClose }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen={fullScreen}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          bgcolor: 'transparent',
          boxShadow: 'none',
          maxWidth: '90vw',
          maxHeight: '90vh',
          m: 0,
          overflow: 'hidden',
        },
      }}
    >
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: 'fixed',
          right: 16,
          top: 16,
          color: 'white',
          bgcolor: 'rgba(0, 0, 0, 0.5)',
          '&:hover': {
            bgcolor: 'rgba(0, 0, 0, 0.7)',
          },
          zIndex: 1400,
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent
        sx={{
          p: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: 'rgba(0, 0, 0, 0.8)',
          '&:hover': {
            cursor: 'pointer',
          },
        }}
        onClick={onClose}
      >
        <video
          src={src}
          autoPlay
          controls
          playsInline
          style={{
            maxWidth: '100%',
            maxHeight: '90vh',
            objectFit: 'contain',
          }}
          onClick={(e) => e.stopPropagation()}
          aria-label={title ? `Video: ${title}` : 'Video'}
        />
      </DialogContent>
    </Dialog>
  );
};

export default VideoDialog;

import React, { useCallback, useState, useRef } from 'react';
import {
  Box,
  Dialog,
  DialogContent,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';

interface ZoomImageProps {
  src: string;
  alt: string;
  size?: number;
}

const isVideo = (src: string) => {
  const videoExtensions = ['.mp4', '.webm', '.ogg'];
  return videoExtensions.some((ext) => src.toLowerCase().endsWith(ext));
};

const ZoomImage: React.FC<ZoomImageProps> = ({ src, alt, size = 120 }) => {
  const [open, setOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isVideoFile = isVideo(src);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [isMounted, setIsMounted] = useState(false);

  // Set isMounted to true after component mounts on the client side
  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    if (isVideoFile && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleMouseEnter = useCallback(() => {
    if (isVideoFile && videoRef.current) {
      videoRef.current
        .play()
        .catch((e) => console.error('Video play failed:', e));
    }
  }, [isVideoFile]);

  const handleMouseLeave = useCallback(() => {
    if (isVideoFile && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isVideoFile]);

  const containerStyle = {
    display: 'inline-block',
    width: size,
    height: size,
    minWidth: size,
    minHeight: size,
    borderRadius: 2,
    overflow: 'hidden',
    cursor: 'pointer',
    zIndex: 1,
    position: 'relative' as const,
    '&:hover': {
      '&::after': {
        opacity: 0.5,
      },
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      opacity: 0,
      transition: 'opacity 0.2s ease-in-out',
      pointerEvents: 'none' as const,
      borderRadius: 1,
    },
    backgroundColor: isVideoFile ? '#000' : 'transparent',
    '& video': {
      objectFit: 'contain' as const,
      width: '100%',
      height: '100%',
      borderRadius: 1,
    },
  };

  // Don't render anything during SSR for video to prevent hydration mismatch
  if (!isMounted && isVideoFile) {
    return null;
  }

  return (
    <>
      <Box
        component="span"
        sx={containerStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClickOpen}
        aria-label={`View larger ${isVideoFile ? 'video' : 'image'} of ${alt}`}
      >
        {isVideoFile ? (
          <video
            ref={videoRef}
            src={src}
            loop
            muted
            playsInline
            preload="metadata"
            style={{
              objectFit: 'contain',
              width: '100%',
              height: '100%',
              borderRadius: 1,
            }}
            aria-label={alt}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={size}
            height={size}
            style={{
              objectFit: 'contain',
              width: '100%',
              height: '100%',
              borderRadius: 1,
            }}
            priority={false}
            loading="lazy"
          />
        )}
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
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
          onClick={handleClose}
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
          onClick={handleClose}
        >
          {isVideoFile ? (
            <video
              src={src}
              autoPlay
              controls
              loop
              muted={false}
              playsInline
              style={{
                maxWidth: '100%',
                maxHeight: '90vh',
                objectFit: 'contain',
              }}
              onClick={(e) => e.stopPropagation()}
              aria-label={`Video: ${alt}`}
            />
          ) : (
            <Image
              src={src}
              alt={alt}
              width={1200}
              height={800}
              style={{
                maxWidth: '100%',
                maxHeight: '90vh',
                objectFit: 'contain',
              }}
              onClick={(e) => e.stopPropagation()}
              priority={false}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ZoomImage;

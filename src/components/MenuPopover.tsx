import { ReactNode } from 'react';

import { ModalProps, Popover } from '@mui/material';
import { alpha, styled, SxProps } from '@mui/system';

import { GREY } from '../theme/palette';
import { customShadows } from '../theme/shadows';

const ArrowStyle = styled('span')(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    top: -7,
    zIndex: 1,
    width: 12,
    right: 20,
    height: 12,
    content: "''",
    position: 'absolute',
    borderRadius: '0 0 4px 0',
    transform: 'rotate(-135deg)',
    background: theme.palette.background.paper,
    borderRight: `solid 1px ${alpha(theme.palette.grey[500], 0.12)}`,
    borderBottom: `solid 1px ${alpha(theme.palette.grey[500], 0.12)}`
  }
}));

interface IMenuPopover {
  children: ReactNode,
  sx: SxProps,
  open: boolean,
  onClose: ModalProps['onClose'],
  anchorEl: null | Element | ((element: Element) => Element),
};

export default function MenuPopover({ children, sx, open, onClose, anchorEl}: IMenuPopover) {
  return (
    <Popover
      anchorOrigin ={{ vertical: 'bottom', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={open}
      onClose={onClose}
      anchorEl={anchorEl}
      PaperProps={{
        sx: {
          mt: 1.5,
          ml: 0.5,
          overflow: 'inherit',
          boxShadow: (theme) => customShadows.z20,
          border: (theme) => `solid 1px ${GREY[500_8]}`,
          width: 200,
          ...sx
        }
      }}
    >
      <ArrowStyle className="arrow" />

      {children}
    </Popover>
  );
}

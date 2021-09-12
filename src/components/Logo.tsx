import { Box, SxProps } from '@mui/system';

interface ILogo {
  sx: SxProps
}

export default function Logo({ sx }: ILogo) {
  return <Box component="img" src="/static/logo.svg" sx={{ width: 40, height: 40, ...sx }} />;
}

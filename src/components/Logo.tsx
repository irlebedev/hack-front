import { Box, SxProps } from "@mui/system";
import LogoSS from "../assets/logo.png";

interface ILogo {
  sx: SxProps;
}

export default function Logo({ sx }: ILogo) {
  return (
    <Box component="img" src={LogoSS} sx={{ width: 40, height: 40, ...sx }} />
  );
}

import { customShadows } from "../shadows";

export default function Autocomplete() {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: customShadows.z20
        }
      }
    }
  };
}

import React from "react";
import {
  Box,
  Paper,
  Typography,
} from "@mui/material";

export const Widget = ({
  children,
  title,
  noBodyPadding,
  bodyClass,
  disableWidgetMenu,
  header,
  noHeaderPadding,
  headerClass,
  style,
  noWidgetShadow,
  ...props
}: any) => {

  return (
    <Box>
      <Paper>
        <Box sx={{ display: "flex" }}>
          <Typography variant="h5" color="textSecondary" noWrap>
            {title}
          </Typography>
        </Box>

        <Box>
          {children}
        </Box>
      </Paper>
    </Box>
  );
}

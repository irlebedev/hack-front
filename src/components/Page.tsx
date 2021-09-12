import React from "react";
import { Helmet } from 'react-helmet-async';
import { forwardRef } from 'react';
import { Box } from '@mui/system';

const Page = forwardRef(({ children, title = '', ...other }: any, ref) => (
  <Box ref={ref} {...other}>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    {children}
  </Box>
));

export default Page;

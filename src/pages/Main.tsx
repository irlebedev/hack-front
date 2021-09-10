import { Box, Button, Container as MuiContainer } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { useHistory } from "react-router-dom";
import { getIsAuthorized, logout } from "../redux/authSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const Container = styled(MuiContainer)`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Main: React.FC = () => {
  const isAuthorized = useAppSelector(getIsAuthorized);
  const dispatch = useAppDispatch();
  const history = useHistory();
  const onLogoutHandler = () => {
    dispatch(logout());
    history.push("/auth");
  };
  return (
    <Container>
      <Box>{isAuthorized ? "authorized" : "not authorized"}</Box>
      <Button variant="contained" onClick={onLogoutHandler}>
        logout
      </Button>
    </Container>
  );
};

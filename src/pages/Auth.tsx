import { Box, Button, Container as MuiContainer } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { useHistory } from "react-router-dom";
import { getIsAuthorized, login } from "../redux/authSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const Container = styled(MuiContainer)`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Auth: React.FC = () => {
  const isAuthorized = useAppSelector(getIsAuthorized);
  const dispatch = useAppDispatch();
  const history = useHistory();
  const onLoginHandler = () => {
    dispatch(login());
    history.push("/main");
  };
  return (
    <Container sx={{ height: "100vh" }}>
      <Box>{isAuthorized ? "authorized" : "not authorized"}</Box>
      <Button variant="contained" onClick={onLoginHandler}>
        login
      </Button>
    </Container>
  );
};

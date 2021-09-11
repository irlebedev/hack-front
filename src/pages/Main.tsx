import React, { FC, useState } from "react";
import { Box, Button, Container as MuiContainer, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { useHistory } from "react-router-dom";
import Typography from '@mui/material/Typography';
import { AppRoutes } from "../App";
import { getIsAuthorized, logout } from "../redux/authSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Cards } from "../Components/Cards";
import { DialogLogOut } from "../Components/DialogLogOut";
import { createMockCards, ICard } from "../api";


const Container = styled(MuiContainer)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Main: FC = () => {
  const isAuthorized = useAppSelector(getIsAuthorized);
  const dispatch = useAppDispatch();
  const history = useHistory();

  const [isModalLogOut, setModalLogOut] = useState<boolean>(false);

  const onCreateHandler = () => {
    history.push(AppRoutes.PLAN);
  };

  const onLogoutHandler = () => {
    dispatch(logout());
    history.push(AppRoutes.AUTH);
  };

  const toggleModalLogOut = () => setModalLogOut(!isModalLogOut);


  const mockActiveCard: ICard[] = createMockCards(1, true);
  const mockCards: ICard[] = createMockCards(6);

  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" component="div">
          Привет, Игорь Петров.
          <br />
          Добро пожаловать!
        </Typography>
      </Box>

      <Box>
        <Typography variant="h5" component="div" sx={{ mb: 1.5 }}>
          Активный ИПР:
        </Typography>
        <Cards data={mockActiveCard} />
      </Box>

      <Box>
        <Typography variant="h5" component="div" sx={{ mb: 1.5 }}>
          Завершенные ИПР:
        </Typography>
        <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap", }}>
          <Cards data={mockCards} />
        </Box>
      </Box>


      <Box>
        <Box>{isAuthorized ? "authorized" : "not authorized"}</Box>
        <Grid container spacing={2} justifyContent="flex-start" flex-direction="column" sx={{ mb: 3 }}>
          <Grid item>
            <Button variant="contained" onClick={onCreateHandler} size="large">
              Создать ИПР
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" onClick={toggleModalLogOut} size="large">
              Выйти из системы
            </Button>
          </Grid>
        </Grid>
      </Box>
      {isModalLogOut &&
        <DialogLogOut
          isActive={isModalLogOut}
          toggleModalLogOut={toggleModalLogOut}
          onLogoutHandler={onLogoutHandler}
        />
      }
    </Container>
  );
};

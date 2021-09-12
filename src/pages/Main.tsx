import React, { FC, useState, useEffect } from "react";
import { Box, Button, Container as MuiContainer, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { useHistory } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { AppRoutes } from "../App";
import { logout } from "../redux/authSlice";
import { activeCard, completedСards, deleteActiveCard, getData } from "../redux/idpSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Cards } from "../components/Cards";
import { DialogLogOut } from "../components/DialogLogOut";
import { ModalCreateIDP } from "../components/ModalCreateIDP";

const Container = styled(MuiContainer)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Main: FC = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const activeCardData = useAppSelector(activeCard);
  const completedСardsData = useAppSelector(completedСards);

  const [isModalLogOut, setModalLogOut] = useState<boolean>(false);
  const [isModalCreateIDP, setModalCreateIDP] = useState<boolean>(false);
  const [isModalDeleteIDP, setModalDeleteIDP] = useState<boolean>(false);

  const toggleModalLogOut = () => setModalLogOut(!isModalLogOut);
  const toggleModalCreateIDP = () => setModalCreateIDP(!isModalCreateIDP);
  const toggleModalDeleteIDP = () => setModalDeleteIDP(!isModalDeleteIDP);

  const handleDeleteCard = () => {
    toggleModalDeleteIDP();
    dispatch(deleteActiveCard());
  };

  const onLogoutHandler = () => {
    dispatch(logout());
    history.push(AppRoutes.AUTH);
  };

  const onCreateHandler = () => {
    if (activeCardData.length === 0) {
      history.push(AppRoutes.PLAN);
    };

    toggleModalCreateIDP();
  };

  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" component="div">
          Привет, Игорь Петров.
          <br />
          Добро пожаловать!
        </Typography>
      </Box>

      {!!activeCardData.length &&
        <Box>
          <Typography variant="h5" component="div" sx={{ mb: 1.5 }}>
            Активный ИПР:
          </Typography>
          <Cards
            data={activeCardData}
            toggleModalDeleteIDP={toggleModalDeleteIDP}
          />
        </Box>
      }

      <Box>
        <Typography variant="h5" component="div" sx={{ mb: 1.5 }}>
          Завершенные ИПР:
        </Typography>
        <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap", }}>
          <Cards data={completedСardsData} />
        </Box>
      </Box>

      <Box>
        <Grid container spacing={2} justifyContent="flex-start" flex-direction="column" sx={{ mb: 3 }}>
          <Grid item>
            <Button variant="contained" onClick={onCreateHandler} size="large">
              Создать ИПР
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              onClick={toggleModalLogOut}
              size="large"
            >
              Выйти из системы
            </Button>
          </Grid>
        </Grid>
      </Box>
      {isModalLogOut &&
        <DialogLogOut
          title="Вы действительно хотите выйти из системы?"
          isActive={isModalLogOut}
          toggleModal={toggleModalLogOut}
          handlerConfirm={onLogoutHandler}
        />
      }

      {isModalCreateIDP &&
        <ModalCreateIDP
          isActive={isModalCreateIDP}
          toggleModal={toggleModalCreateIDP}
        />
      }

      {isModalDeleteIDP &&
        <DialogLogOut
          title="Вы действительно хотите удалить ИПР?"
          isActive={isModalDeleteIDP}
          toggleModal={toggleModalDeleteIDP}
          handlerConfirm={handleDeleteCard}
        />
      }
    </Container>
  );
};

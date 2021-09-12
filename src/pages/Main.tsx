import React, { FC, useState, useEffect } from "react";
import { Box, Button, Container as MuiContainer, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { useHistory, useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { AppRoutes } from "../App";
import { logout } from "../redux/authSlice";
import { activeCard, clientInfo, completedСards, deleteActiveCard, getData } from "../redux/idpSlice";
import { getClientInfo, getClientInfoData } from "../redux/adminSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Cards } from "../components/Cards";
import { DialogLogOut } from "../components/DialogLogOut";
import { ModalInfo } from "../components/ModalInfo";

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
    dispatch(getClientInfo());
  }, [dispatch]);

  const getBasicInfoData = useAppSelector(getClientInfoData);
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
  };

  const onCreateHandler = () => {
    if (activeCardData.length === 0) {
      history.push(AppRoutes.PLAN);
    };

    toggleModalCreateIDP();
  };

  return (
    <Container>
      <Box sx={{ mt: 4, flex: "0 0 auto" }}>
        <Typography variant="h5" component="div">
          Добро пожаловать в систему ИПР!
        </Typography>
        <br />
        <Typography variant="h5" component="div">
          Cотрудник: {getBasicInfoData}
        </Typography>
      </Box>

      <Box sx={{ flex: "1 0 auto", display: "flex", flexDirection: "column", gap: "2rem" }}>
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
      </Box>

      <Box sx={{ flex: "0 0 auto" }}>
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
        <ModalInfo
          title="На текущий момент ИПР уже создан"
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

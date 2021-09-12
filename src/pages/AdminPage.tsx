import React, { FC, useState, useEffect } from "react";
import {
  Box,
  Button,
  Container as MuiContainer,
  Grid,
  Typography
} from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { logout } from "../redux/authSlice";
import { getEmployees, getIsEmployeesList } from "../redux/adminSlice";
import Widget from "../components/Widget";
import TableComponent from "../components/Table";
import { DialogLogOut } from "../components/DialogLogOut";

const Container = styled(MuiContainer)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;


export const AdminPage: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);

  const employeesListData = useAppSelector(getIsEmployeesList);

  const [isModalLogOut, setModalLogOut] = useState<boolean>(false);

  const toggleModalLogOut = () => setModalLogOut(!isModalLogOut);

  const onLogoutHandler = () => {
    dispatch(logout());
    navigate("/auth");
  };

  return (
    <Container>

      <Box sx={{ flex: "0 0 auto", mt: "3rem" }}>
        <Typography variant="h5" color="textSecondary" noWrap>
          Панель управления ИПР
        </Typography>
      </Box>

      <Box sx={{ flex: "1 0 auto" }}>
        {!!employeesListData.length && (
          <Grid item xs={12}>
            <Widget
              title="Список сотрудников"
              upperTitle
              noBodyPadding
            >
              <TableComponent data={employeesListData} />
            </Widget>
          </Grid>
        )}
      </Box>

      <Box sx={{ flex: "0 0 auto" }}>
        <Grid
          container
          spacing={2}
          justifyContent="flex-start"
          flex-direction="column"
          sx={{ mb: 3 }}
        >
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

      {
        isModalLogOut &&
        <DialogLogOut
          title="Вы действительно хотите выйти из системы?"
          isActive={isModalLogOut}
          toggleModal={toggleModalLogOut}
          handlerConfirm={onLogoutHandler}
        />
      }

    </Container >
  );
};

AdminPage.displayName = "AdminPage";
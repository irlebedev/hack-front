import {
  Box,
  Button,
  Container as MuiContainer,
  Paper,
  TextField,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Card,
} from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import AddIcon from "@mui/icons-material/Add";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  addGoal,
  getEndDate,
  getGoals,
  getStartDate,
  getSupervizorId,
  setEndDate,
  setGoals,
  setStartDate,
  setSupervizorId,
} from "../redux/planSlice";

const Container = styled(MuiContainer)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 64px;
  padding-bottom: 20px;
`;

const Content = styled(Paper)`
  width: 100%;
  min-height: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 64px;
`;

const Header = styled(Box)`
  width: 100%;
  height: 64px;
  background-color: #1976d2;
`;

const Aside = styled(Box)`
  width: 70px;
  height: 100%;
  background-color: #1976d2;
`;

const supervizors = [
  { id: 1, name: "Janetta Letty" },
  { id: 2, name: "Edwyna Lizbeth" },
];

const priorities = ["Low", "Medium", "High", "Super High"];

export const Plan: React.FC = () => {
  const dispatch = useAppDispatch();
  const startDate = useAppSelector(getStartDate);
  const endDate = useAppSelector(getEndDate);
  const supervizorId = useAppSelector(getSupervizorId);
  const goals = useAppSelector(getGoals);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ startDate, endDate, supervizorId });
  };

  return (
    <Container>
      <Header>Header</Header>
      <Box sx={{ display: "flex", width: "100%", height: "100%", gap: "64px" }}>
        <Aside>aside</Aside>
        <Content elevation={3}>
          <Box sx={{ mb: 3 }}>
            <Typography color="textPrimary" variant="h6">
              ИПР
            </Typography>
          </Box>
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Box sx={{ display: "flex", gap: "24px", width: "100%" }}>
                <DatePicker
                  label="Дата начала"
                  value={startDate}
                  onChange={(newValue) => {
                    dispatch(setStartDate(newValue?.valueOf() ?? null));
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      sx={{
                        minHeight: "80px",
                        flexGrow: 1,
                      }}
                    />
                  )}
                />
                <DatePicker
                  label="Дата окончания"
                  value={endDate}
                  onChange={(newValue) => {
                    dispatch(setEndDate(newValue?.valueOf() ?? null));
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      sx={{
                        minHeight: "80px",
                        flexGrow: 1,
                      }}
                    />
                  )}
                />
              </Box>
            </LocalizationProvider>

            <FormControl fullWidth sx={{ marginBottom: "20px" }}>
              <InputLabel id="supervizor">Руководитель</InputLabel>
              <Select
                labelId="supervizor"
                value={supervizorId ?? ""}
                label="Руководитель"
                onChange={(e) => {
                  dispatch(setSupervizorId(Number(e.target.value)));
                }}
              >
                {supervizors.map((supervizor) => (
                  <MenuItem key={supervizor.id} value={supervizor.id}>
                    {supervizor.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Typography
              color="textPrimary"
              variant="h6"
              sx={{ marginBottom: "20px" }}
            >
              Список целей
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {goals.map((goal, i) => (
                <Card
                  key={i}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    py: 4,
                    px: 2,
                    boxShadow: 4,
                  }}
                >
                  <Box sx={{ display: "flex", gap: "24px", width: "100%" }}>
                    <TextField
                      label="Цель"
                      multiline
                      fullWidth
                      value={goal.name}
                      onChange={(e) => {
                        dispatch(
                          setGoals({
                            key: "name",
                            id: i,
                            value: e.target.value,
                          })
                        );
                      }}
                    />
                    <FormControl fullWidth sx={{ marginBottom: "20px" }}>
                      <InputLabel id="supervizor">Приоритет</InputLabel>
                      <Select
                        labelId="supervizor"
                        value={goal.priority}
                        label="Приоритет"
                        onChange={(e) => {
                          dispatch(
                            setGoals({
                              key: "priority",
                              id: i,
                              value: e.target.value as string,
                            })
                          );
                        }}
                      >
                        {priorities.map((priority) => (
                          <MenuItem key={priority} value={priority}>
                            {priority}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                  <TextField
                    label="Описание"
                    multiline
                    fullWidth
                    value={goal.description}
                    onChange={(e) => {
                      dispatch(
                        setGoals({
                          key: "description",
                          id: i,
                          value: e.target.value,
                        })
                      );
                    }}
                  />
                </Card>
              ))}

              <Box
                sx={{
                  width: "fitContent",
                }}
              >
                <Button
                  color="primary"
                  size="large"
                  variant="contained"
                  startIcon={<AddIcon />}
                  onClick={() => {
                    dispatch(addGoal());
                  }}
                >
                  Добавить цель
                </Button>
              </Box>
            </Box>
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Отправить на согласование
              </Button>
            </Box>
          </form>
        </Content>
      </Box>
    </Container>
  );
};

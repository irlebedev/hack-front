import {
  Box,
  Button,
  Container as MuiContainer,
  Grid,
  Paper,
  TextField,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { styled } from "@mui/system";
import { Field, Formik } from "formik";
import React from "react";
// import { useHistory } from "react-router-dom";
// import { AppRoutes } from "../App";
// import { getIsAuthorized, logout } from "../redux/authSlice";
// import { useAppDispatch, useAppSelector } from "../redux/hooks";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
// import Select, { SelectChangeEvent } from '@mui/material/Select';
import * as Yup from "yup";
// import { useAppDispatch, useAppSelector } from "../redux/hooks";
// import { getData, setData } from "../redux/planSlice";

const Container = styled(MuiContainer)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 64px;
`;

const Content = styled(Paper)`
  width: 100%;
  height: 100%;
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

interface FormData {
  dateStart: number | null;
  dateEnd: number | null;
  supervisor: number | null;
}

const validationSchema = Yup.object().shape({
  dateStart: Yup.number().required("Дата начала обязательна"),
  dateEnd: Yup.number().required("Дата окончания обязательна"),
});

const supervizors = [
  { id: 1, name: "Janetta Letty" },
  { id: 2, name: "Edwyna Lizbeth" },
];

export const Plan: React.FC = () => {
  const initialFormValues: FormData = {
    dateStart: Date.now(),
    dateEnd: null,
    supervisor: null,
  };
  return (
    <Container>
      <Header>Header</Header>
      <Box sx={{ display: "flex", width: "100%", height: "100%", gap: "64px" }}>
        <Aside>aside</Aside>
        <Content elevation={3}>
          <Box sx={{ mb: 3 }}>
            <Typography color="textPrimary" variant="h4">
              ИЗП
            </Typography>
          </Box>
          <Formik
            initialValues={initialFormValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              const filtered = Object.fromEntries(
                Object.entries(values).filter(([_, value]) => value !== null)
              );

              console.log("values", filtered);
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values,
              setFieldValue,
              dirty,
            }) => (
              <form onSubmit={handleSubmit}>
                {console.log(errors)}
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Box sx={{ display: "flex", gap: "24px", width: "100%" }}>
                    <DatePicker
                      label="Дата начала"
                      value={values.dateStart}
                      onChange={(value) =>
                        setFieldValue("dateStart", value?.valueOf())
                      }
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          error={Boolean(touched.dateStart && errors.dateStart)}
                          helperText={touched.dateStart && errors.dateStart}
                          sx={{
                            minHeight: "80px",
                            flexGrow: 1,
                          }}
                        />
                      )}
                    />
                    <DatePicker
                      label="Дата окончания"
                      value={values.dateEnd}
                      onChange={(value) =>
                        setFieldValue("dateEnd", value?.valueOf())
                      }
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          value={values.dateEnd}
                          error={Boolean(touched.dateEnd && errors.dateEnd)}
                          helperText={touched.dateEnd && errors.dateEnd}
                          sx={{
                            minHeight: "80px",
                            flexGrow: 1,
                          }}
                        />
                      )}
                    />
                  </Box>
                </LocalizationProvider>

                <FormControl fullWidth>
                  <InputLabel id="supervizor">Руководитель</InputLabel>
                  <Field
                    name="supervizor"
                    component={({ children, form, field }: any) => {
                      const { name, value } = field;
                      const { setFieldValue } = form;
                      return (
                        <Select
                          label="Руководитель"
                          name={name}
                          value={value ?? ""}
                          onChange={(e) => {
                            setFieldValue(name, e.target.value);
                          }}
                        >
                          {children}
                        </Select>
                      );
                    }}
                  >
                    {supervizors.map((supervizor) => (
                      <MenuItem key={supervizor.id} value={supervizor.id}>
                        {supervizor.name}
                      </MenuItem>
                    ))}
                  </Field>
                </FormControl>

                <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    // disabled={
                    //   isSubmitting || !!Object.keys(errors).length || !dirty
                    // }
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Отправить на согласование
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Content>
      </Box>
    </Container>
  );
};

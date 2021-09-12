import {
  Box,
  Button,
  Container as MuiContainer,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { Formik } from "formik";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/authSlice";
import { useAppDispatch } from "../redux/hooks";
import * as Yup from "yup";

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Container = styled(MuiContainer)`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const AuthForm: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onLoginHandler = (values: any) => {
    console.log(values);
    dispatch(login());
    if (values.email === "admin@mail.ru") {
      return navigate("/main/admin");
    }
    navigate("/main");
  };
  return (
    <Wrapper>
      <Container maxWidth="sm">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email("Must be a valid email")
              .max(255)
              .required("Email is required"),
            password: Yup.string().max(255).required("Password is required"),
          })}
          onSubmit={onLoginHandler}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
            touched,
            values,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box sx={{ mb: 3 }}>
                <Typography color="textPrimary" variant="h2">
                  Авторизация
                </Typography>
              </Box>
              <TextField
                error={Boolean(touched.email && errors.email)}
                fullWidth
                helperText={touched.email && errors.email}
                label="Email Address"
                margin="normal"
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                type="email"
                value={values.email}
                variant="outlined"
                sx={{
                  minHeight: "80px",
                }}
              />
              <TextField
                error={Boolean(touched.password && errors.password)}
                fullWidth
                helperText={touched.password && errors.password}
                label="Password"
                margin="normal"
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                type="password"
                value={values.password}
                variant="outlined"
                sx={{
                  minHeight: "80px",
                }}
              />
              <Box sx={{ py: 2 }}>
                <Button
                  color="primary"
                  disabled={isSubmitting}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Войти
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Container>
    </Wrapper>
  );
};

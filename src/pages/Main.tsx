import { Container } from "@mui/material";

import Page from "../components/Page";
import { MainInfo } from "./MainInfo";

export default function MainApp() {
  return (
    <Page title="IDP System">
      <Container maxWidth="xl">
        <MainInfo />
      </Container>
    </Page>
  );
}

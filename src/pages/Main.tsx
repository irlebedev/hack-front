import { Container } from "@mui/material";

import Page from "../components/Page";
import { MainInfo } from "./MainInfo";

export default function MainApp() {
  return (
    //@ts-ignore
    <Page title="Main">
      <Container maxWidth="xl">
        <MainInfo />
      </Container>
    </Page>
  );
}

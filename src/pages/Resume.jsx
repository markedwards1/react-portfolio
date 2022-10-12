import React from "react";
import ResumeComponent from "../containers/Resume/ResumeComponent";

import BaseLayout from "../layouts/BaseLayout";
import Footer from "../layouts/footer/Footer";
import { Container } from "@mui/material";
import { Box } from "@mui/material";
import css from "./About.module.css";

export default function resume() {
  return (
    <BaseLayout>
    <Container className={css.hero} maxWidth="1g">
      <Box
        display="flex"
        flexDirect="row"
        justifyContent="center"
        flexWrap="wrap"
      >
        {/* <section  className={css.container}> */}
        <Box pt={12}>
          <ResumeComponent />
        </Box>
      

        {/* </section> */}
      </Box>
    </Container>

    <Box display="flex" justifyContent="center">
      <Footer />
    </Box>
  </BaseLayout>
  );
}

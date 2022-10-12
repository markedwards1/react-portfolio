import React from "react";
import HeroIntroduction from "../containers/About/HeroIntroduction";
import Text from "../containers/About/Text";
import BaseLayout from "../layouts/BaseLayout";
import css from "./About.module.css";
import { Container } from "@mui/material";
import { Box } from "@mui/material";
import Footer from "../layouts/footer/Footer";

export default function Home() {
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
            <HeroIntroduction />
          </Box>
          <Box pt={10} maxWidth={700} minWidth={400}>
            <Text />
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

// import { Container } from '@mui/system'
import React from "react";
import PortfolioImg from "../containers/Portfolio/PortfolioImg";
import BaseLayout from "../layouts/BaseLayout";
import Footer from "../layouts/footer/Footer";
import { Container } from "@mui/material";
import { Box } from "@mui/material";
import css from "./About.module.css";

export default function Portfolio() {
  return (
    <BaseLayout>
      <Container className={css.hero} maxWidth="1g">
        <Box
          display="flex"
          flexDirect="row"
          justifyContent="center"
          flexWrap="wrap"
        >
          <Box pt={12}>
            <PortfolioImg />
          </Box>
        </Box>
      </Container>

      <Box display="flex" justifyContent="center">
        <Footer />
      </Box>
    </BaseLayout>
  );
}

import React from "react";
import ContactForm from "../containers/Contact/ContactForm";
import BaseLayout from "../layouts/BaseLayout";
import Footer from "../layouts/footer/Footer";
import { Container } from "@mui/material";
import { Box } from "@mui/material";
import css from "./About.module.css";
import ContactText from "../containers/Contact/ContactText";

export default function Contact() {
  return (
    <BaseLayout>
      <Container className={css.hero} maxWidth="1g">
        <Box pt={10} maxWidth={700} minWidth={400}>
          <ContactText />
        </Box>
        <Box
          display="flex"
          flexDirect="row"
          justifyContent="centre"
          flexWrap="wrap"
        >
          <Box pt={3}>
            <ContactForm />
          </Box>
        </Box>
      </Container>
      <Box display="flex" justifyContent="center">
        <Footer />
      </Box>
    </BaseLayout>
  );
}

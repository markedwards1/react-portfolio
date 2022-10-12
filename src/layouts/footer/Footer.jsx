import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import css from "./Footer.module.css";
import { IconButton, Link } from "@mui/material";

export default function Footer() {
  return (
    // <div>Footer</div>
<div className={css.background}>


    <div className={css.footer}>
      <IconButton>
        <Link href="https://github.com/markedwards1">
          <GitHubIcon fontSize="large" />
        </Link>
      </IconButton>

      <IconButton>
        <Link href="https://www.linkedin.com/in/mark-edwards-873a15237/">
      <LinkedInIcon fontSize="large" />
        </Link>
      </IconButton>
    </div>
</div>
  );
}

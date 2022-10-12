import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { validateEmail } from "../../utils/helpers";

import Container from "@mui/material/Container";

import Button from "@mui/material/Button";
// or
// import { Button } from '@mui/material';

function ContactForm() {
  // Create state variable for email and set as empty string
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  //getting the value and name from the input trigged the change NEED MORE WORDS
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Set the inputVale with the inputType
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // First we check to see if the email is not valid   If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set ///an error message regarding the password.
    }
    setName("");
    setEmail("");
    setMessage("");
  };

  // export default function ContactForm() {
  return (
    <div>
  

      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: 300 },
        }}
        noValidate
        autoComplete="off"
      >
        <Container>
          <Box>
            <TextField
              required
              id="outlined-required"
              label="Name"
              value={name}
              onChange={handleInputChange}
              name="name"
              type="text"
            />
          </Box>

          <Box>
            <TextField
              required
              id="outlined-required"
              label="Email"
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
            />
          </Box>

          <Box>
            <TextField
              id="outlined-multiline-flexible"
              label="Message"
              multiline
              minRows={6}
              maxRows={10}
              value={message}
              name="message"
              onChange={handleInputChange}
              type="text"
            />
          </Box>

          <Box>
            <Button  variant="contained" onClick={handleFormSubmit}>
              Send
            </Button>
          </Box>
        </Container>
      </Box>

      {/* </form> */}
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
  // }
}

export default ContactForm;

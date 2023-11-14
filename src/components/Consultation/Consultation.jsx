import React from "react";
import Title from "../Title/Title";
import { useRef } from "react";
import { TextField, Grid, Button } from "@mui/material";
import formImg from "../../assets/images/bg-img-1.jpg";
import useStyles from "./Consultation.styles";
import emailjs from "@emailjs/browser";

export default function Consultation() {
  const classes = useStyles();
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w0mbag7",
        "template_szlk8qw",
        form.current,
        "jHO1KBT4CnFgZfX0u",
      )
      .then(
        (result) => {
          console.log("Attempting to send email");
          console.log(result.text);
        },
        (error) => {
          console.log("attempting to send email");
          console.log(error.text);
        },
      );
  };
  return (
    <React.Fragment>
      <Title text="consult us or place an order" />
      <Grid
        container
        justifyContent="center"
        className="consultation-sub-container"
        id="consult"
      >
        <Grid
          item
          element="div"
          xs={12}
          md={12}
          lg={4}
          xl={4}
          className={classes.formImageContainer}
        >
          <img src={formImg} alt="" className={classes.formImage} />
        </Grid>
        <Grid
          item
          element="div"
          xs={12}
          md={12}
          lg={4}
          xl={4}
          className={classes.formContainer}
        >
          <form onSubmit={sendEmail} ref={form} className="order-form">
            <TextField
              id="firstName"
              label="first name"
              variant="outlined"
              required
              name="from_firstName"
            />
            <TextField
              id="lastName"
              label="last name"
              variant="outlined"
              required
              name="from_lastName"
            />
            <TextField
              id="email"
              label="email address"
              variant="outlined"
              type="email"
              name="user_email"
              required
            />
            <TextField
              id="phoneNumber"
              label="phone number"
              variant="outlined"
              name="phone"
              required
            />
            <TextField
              id="serviceDescription"
              label="describe the service you want"
              variant="outlined"
              multiline
              required
              name="message"
            />
            <Button variant="contained" type="submit">
              place order
            </Button>
          </form>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

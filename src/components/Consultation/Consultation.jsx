import React, {useState} from "react";
import Title from "../Title/Title";
import { useRef } from "react";
import { TextField, Grid, Button } from "@mui/material";
import formImg from "../../assets/images/money.jpg";
import useStyles from "./Consultation.styles";
import emailjs from "@emailjs/browser";

export default function Consultation() {
  const [sendingMail, setIsSendingMail] = useState(false)
  const classes = useStyles();
  const form = useRef();
  const sendEmail = (e) => {
    setIsSendingMail(true)
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_API_KEY,
      )
      .then(
        (result) => {
          // console.log("Attempting to send email");
          // console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log("attempting to send email");
          console.log(error.text);
        },
      );

    setIsSendingMail(false)
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
            <Button variant="contained" type="submit" disabled={sendingMail} className="submit-button">
              {
                sendingMail ? "Submitting Please wait" : "Place Order"
              }
            </Button>
          </form>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

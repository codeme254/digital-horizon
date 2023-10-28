import React from "react";
import Title from "../Title/Title";
import { TextField, Grid, Button } from "@mui/material";
import formImg from "../../assets/images/bg-img-1.jpg";
import useStyles from "./Consultation.styles";

export default function Consultation() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title text="consult us or place an order" />
      <Grid
        container
        justifyContent="center"
        className="consultation-sub-container"
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
          <form action="" className="order-form">
            <TextField
              id="firstName"
              label="first name"
              variant="outlined"
              required
            />
            <TextField
              id="lastName"
              label="last name"
              variant="outlined"
              required
            />
            <TextField
              id="email"
              label="email address"
              variant="outlined"
              type="email"
            />
            <TextField
              id="phoneNumber"
              label="phone number"
              variant="outlined"
            />
            <TextField
              id="serviceDescription"
              label="describe the service you want"
              variant="outlined"
              multiline
              required
            />
            <Button variant="contained">place order</Button>
          </form>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

import React from "react";
import { Box } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import ContactElement from "./ContactElement";
import Title from "../Title/Title";
import useStyles from "./Contact.styles";

export default function Contact() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title text="talk to us" />
      <Box element="div" id="contact" className={classes.contactsContainer}>
        <ContactElement
          icon={<EmailIcon />}
          contactType="send us an email"
          contactValue="dhorizon@gmail.com"
        />
        <ContactElement
          icon={<CallIcon />}
          contactType="call us"
          contactValue="+254712345678"
        />
      </Box>
    </React.Fragment>
  );
}

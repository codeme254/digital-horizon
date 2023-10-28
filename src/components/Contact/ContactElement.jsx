import React from "react";
import { Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import useStyles from "./Contact.styles";

export default function ContactElement({ icon, contactType, contactValue }) {
  const classes = useStyles();
  return (
    <Box className={classes.contactBox}>
      {icon}
      <Typography
        variant="h3"
        gutterBottom
        mt={1}
        textTransform="capitalize"
        sx={{ color: "primary.main" }}
      >
        {contactType}
      </Typography>
      <Typography variant="body1" className={classes.contactValue}>
        {contactValue}
      </Typography>
    </Box>
  );
}

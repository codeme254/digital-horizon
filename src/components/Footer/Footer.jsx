import React from "react";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import useStyles from "./Footer.styles";

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footerMain}>
      <Grid container spacing={2} justifyContent="space-between">
        <Grid item xs={12} md={12} lg={4}>
          <Typography
            variant="h3"
            textTransform="capitalize"
            gutterBottom
            color="white"
            letterSpacing={1.5}
          >
            Laser Tech Solutions
          </Typography>
          <Typography variant="body1" align="justify" color="white">
            At Laser Tech Solutions, we are catalysts for technological
            innovation, dedicated to empowering businesses with comprehensive
            digital solutions. With a focus on excellence, we specialize in
            delivering a spectrum of IT services including WiFi installation,
            web development, mobile app creation, CCTV implementation, and more.
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} lg={1}>
          <Typography
            variant="h3"
            textTransform="capitalize"
            gutterBottom
            color="white"
            letterSpacing={1.5}
          >
            important links
          </Typography>
          <Link className={classes.footerLink}>Home</Link>
          <Link className={classes.footerLink}>about</Link>
          <Link className={classes.footerLink}>services</Link>
          <Link className={classes.footerLink}>contact us</Link>
          <Link className={classes.footerLink}>place order</Link>
        </Grid>
        <Grid item xs={12} md={12} lg={3}>
          <Typography
            variant="h3"
            textTransform="capitalize"
            gutterBottom
            color="white"
            letterSpacing={1.5}
          >
            services
          </Typography>
          <Typography variant="body1" className={classes.footerText}>
            Web design
          </Typography>
          <Typography variant="body1" className={classes.footerText}>
            mobile apps development
          </Typography>
          <Typography variant="body1" className={classes.footerText}>
            wifi installation
          </Typography>
          <Typography variant="body1" className={classes.footerText}>
            CCTV installation
          </Typography>
          <Typography variant="body1" className={classes.footerText}>
            web development
          </Typography>
          <Typography variant="body1" className={classes.footerText}>
            digital marketing
          </Typography>
          <Typography variant="body1" className={classes.footerText}>
            IT support and maintenance
          </Typography>
          <Typography variant="body1" className={classes.footerText}>
            IT infrastructure management
          </Typography>
          <Typography variant="body1" className={classes.footerText}>
            IT consultation and training
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} lg={2}>
          <Typography
            variant="h3"
            textTransform="capitalize"
            gutterBottom
            color="white"
            letterSpacing={1.5}
          >
            contact us
          </Typography>
          <Typography variant="body1" className={classes.footerText}>
            Call: +254790262807
          </Typography>
          <Typography variant="body1" className={classes.footerText}>
            email: horizondigital17@gmail.com
          </Typography>
        </Grid>
      </Grid>
      <Typography variant="body1" mt={3} textAlign="center" color="white">
        &copy; 2023 Digital Horizon. All rights reserved
      </Typography>
    </footer>
  );
}

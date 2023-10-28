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
            Digital Horizon
          </Typography>
          <Typography variant="body1" align="justify" color="white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consectetur labore dolor deserunt velit harum voluptates! Ullam
            autem repellat labore accusamus quod rem incidunt aspernatur, error
            quisquam praesentium neque, fuga accusantium aut, architecto
            suscipit? Quod quae optio eius at eligendi fugiat corrupti porro
            molestiae. Commodi voluptates atque officiis,
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
            important links
          </Typography>
          <Link className={classes.footerLink}>Home</Link>
          <Link className={classes.footerLink}>about</Link>
          <Link className={classes.footerLink}>services</Link>
          <Link className={classes.footerLink}>contact us</Link>
          <Link className={classes.footerLink}>place order</Link>
        </Grid>
        <Grid item xs={12} md={12} lg={1}>
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
            Service 1
          </Typography>
          <Typography variant="body1" className={classes.footerText}>
            Service 1
          </Typography>
          <Typography variant="body1" className={classes.footerText}>
            Service 1
          </Typography>
          <Typography variant="body1" className={classes.footerText}>
            Service 1
          </Typography>
          <Typography variant="body1" className={classes.footerText}>
            Service 1
          </Typography>
          <Typography variant="body1" className={classes.footerText}>
            Service 1
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} lg={3}>
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
            Call: +245712345678
          </Typography>
          <Typography variant="body1" className={classes.footerText}>
            email: dhorizon@gmail.com
          </Typography>
        </Grid>
      </Grid>
      <Typography variant="body1" mt={3} textAlign="center" color="white">
        &copy; 2023 Digital Horizon. All rights reserved
      </Typography>
    </footer>
  );
}

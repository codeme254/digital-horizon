import React from "react";
import Title from "../Title/Title";
import { Grid, Typography } from "@mui/material";
import aboutImg from "../../assets/images/bg-img-1.jpg";
import useStyles from "./About.stylings";

export default function About() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title text="about us" />
      <Grid
        container
        spacing={2}
        justifyContent="space-around"
        className={classes.aboutSection}
        id="about"
      >
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <Typography align="center" variant="h3">
            Who we are and what we do
          </Typography>
          <Typography variant="body1" align="justify" lineHeight={2}>
            At Digital Horizon Solutions, we are catalysts for technological
            innovation, dedicated to empowering businesses with comprehensive
            digital solutions. With a focus on excellence, we specialize in
            delivering a spectrum of IT services including WiFi installation,
            web development, mobile app creation, CCTV implementation, and more.
            <br />
            Our mission is simple: we craft tailored solutions that align with
            your unique business needs. Whether you're a startup seeking an
            online presence or an established enterprise aiming for digital
            transformation, our team of skilled professionals is committed to
            designing, developing, and implementing strategies that drive growth
            and efficiency.
            <br />
            At Digital Horizon Solutions, client satisfaction is paramount. We
            prioritize clear communication, collaboration, and a thorough
            understanding of your objectives to create solutions that exceed
            expectations. <br />
            Join us on the journey to navigate the evolving tech landscape.
            Together, let's leverage the power of technology to propel your
            business toward success
          </Typography>
        </Grid>
        <Grid item xs={11} sm={11} md={11} lg={5} xl={5}>
          <img src={aboutImg} className="about__image" />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

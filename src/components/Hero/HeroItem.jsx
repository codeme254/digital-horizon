import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import defaultHeroImg from "../../assets/images/bg-image-default.jpg";
import useStyles from "./Hero.styles";
import scrollToSection from "../../utils/scroll";

export default function HeroItem({ mainTitle, subTitle, bgImg }) {
  const classes = useStyles();
  return (
    <Box
      element="section"
      sx={{
        background: `linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .8)), url(${
          bgImg || defaultHeroImg
        })`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className={classes.hero_item}
    >
      <Box element="div" className={classes.heroTextbox}>
        <Typography variant="h2" className={classes.heroItemTitle}>
          {mainTitle}
        </Typography>
        <Typography
          variant="body2"
          className={classes.heroItemSubtitle}
          sx={{ textAlign: "center" }}
        >
          {subTitle}
        </Typography>
        <Box element="section" className={classes.heroCtas}>
          <Link
            to="#consult"
            onClick={() => scrollToSection("consult")}
            className={classes.heroCtaPri}
          >
            Get started
          </Link>
          <Link
            to="#about"
            onClick={() => scrollToSection("about")}
            className={classes.heroCtaSec}
          >
            Read more
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

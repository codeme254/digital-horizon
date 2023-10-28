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
      >
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <Typography align="center" variant="h3">
            Who we are and what we do
          </Typography>
          <Typography variant="body1" align="justify" lineHeight={2}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Exercitationem culpa, provident nostrum sapiente rerum laborum
            distinctio incidunt? Cum placeat labore velit ut commodi molestiae
            corrupti eum dolores voluptatum doloremque voluptatem atque,
            reiciendis, cupiditate eos in enim soluta explicabo vero qui
            aliquam. Nam mollitia modi saepe laboriosam temporibus? Non sequi
            voluptas est iste autem unde nulla. Molestias quo doloremque,
            obcaecati ad distinctio excepturi nesciunt. Eum deleniti tempore
            tempora consequuntur quo vel quae cumque suscipit, esse ea saepe,
            temporibus, officiis adipisci officia explicabo natus! Libero enim,
            at, totam iusto quis accusantium minima nisi unde cupiditate
            praesentium provident tempora fugit, hic aperiam molestiae? Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem
            culpa, provident nostrum sapiente rerum laborum distinctio incidunt?
            Cum placeat labore velit ut commodi molestiae corrupti eum dolores
            voluptatum doloremque voluptatem atque, reiciendis, cupiditate eos
            in enim soluta explicabo vero qui aliquam. Nam mollitia modi saepe
            laboriosam temporibus? Non sequi voluptas est iste autem unde nulla.
            Molestias quo doloremque, obcaecati ad distinctio excepturi
            nesciunt. Eum deleniti tempore tempora consequuntur quo vel quae
            cumque suscipit, esse ea saepe, temporibus, officiis adipisci
            officia explicabo natus! Libero enim, at, totam iusto quis
            accusantium minima nisi unde cupiditate praesentium provident
            tempora fugit, hic aperiam molestiae?
          </Typography>
        </Grid>
        <Grid item xs={11} sm={11} md={11} lg={5} xl={5}>
          <img src={aboutImg} className="about__image" />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

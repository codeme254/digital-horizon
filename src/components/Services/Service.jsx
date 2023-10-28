import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";
import useStyles from "./Services.styles";
import scrollToSection from "../../utils/scroll";

export default function Service({ icon, serviceName, serviceSummary }) {
  const classes = useStyles();
  return (
    <Card className={classes.cardMain}>
      <CardActionArea>
        <CardContent>
          {icon}
          <Typography
            variant="h3"
            textTransform="capitalize"
            gutterBottom
            mt={2}
          >
            {serviceName}
          </Typography>
          <Typography variant="body1" align="justify">
            {serviceSummary}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to="#consult" onClick={() => scrollToSection("consult")} className={classes.cardServiceCta}>Get consultation</Link>
      </CardActions>
    </Card>
  );
}

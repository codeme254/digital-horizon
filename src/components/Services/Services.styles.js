import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  cardMain: {
    borderBottom: `3px solid ${theme.palette.primary.main}`,
    [theme.breakpoints.down("sm")]: {
      width: "98%",
      margin: theme.spacing(2, "auto"),
    },
  },
  cardServiceCta: {
    textDecoration: "none",
    color: theme.palette.primary.main,
    textTransform: "capitalize",
    fontWeight: "bold",
    borderBottom: "1px solid transparent",
    transition: "all .4s ease",
    "&:hover": {
      borderBottom: `1px solid ${theme.palette.primary.main}`,
    },
  },
}));

export default useStyles;

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  footerMain: {
    backgroundColor: theme.palette.primary.main,
    marginTop: theme.spacing(8),
    padding: theme.spacing(1, 3),
  },
  footerLink: {
    textDecoration: "none",
    display: "block",
    marginBottom: theme.spacing(1),
    color: theme.palette.common.white,
    textTransform: "capitalize",
    width: "max-content",
  },
  footerText: {
    color: theme.palette.common.white,
    marginBottom: theme.spacing(1),
  },
}));

export default useStyles;

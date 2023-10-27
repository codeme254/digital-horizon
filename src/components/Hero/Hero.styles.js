import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  hero_item: {
    padding: theme.spacing(5, 8),
    marginTop: theme.spacing(8),
    minHeight: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  heroTextbox: {
    width: "60%",
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
  },
  heroItemTitle: {
    fontSize: "3.5rem",
    textAlign: "center",
    marginBottom: theme.spacing(6),
    color: theme.palette.common.white,
    textTransform: "capitalize",
    letterSpacing: "1.8px",
  },
  heroItemSubtitle: {
    color: theme.palette.common.white,
    fontSize: "1.8rem",
    textAlign: "center",
    marginBottom: theme.spacing(6),
    fontWeight: theme.typography.fontWeightLight,
    letterSpacing: "1px",
  },
  heroCtas: {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
  },
  heroCtaPri: {
    display: "inline-block",
    padding: theme.spacing(2, 4),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    borderRadius: "5px",
  },
  heroCtaSec: {
    display: "inline-block",
    padding: theme.spacing(2, 4),
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.common.white,
    borderRadius: "5px",
  },
}));
export default useStyles;

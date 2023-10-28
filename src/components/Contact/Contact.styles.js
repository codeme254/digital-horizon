import { makeStyles } from "@mui/styles";

const SVGSIZE = "4rem";
const useStyles = makeStyles((theme) => ({
  contactsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(2),
    flexWrap: "wrap",
    marginTop: theme.spacing(2),
  },
  contactBox: {
    minWidth: "35rem",
    maxWidth: "max-content",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& svg": {
      width: SVGSIZE,
      height: SVGSIZE,
      fill: theme.palette.primary.main,
    },
  },
  contactValue: {
    display: "inline-block",
    padding: theme.spacing(1, 2),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    borderRadius: "3px",
  },
}));

export default useStyles;

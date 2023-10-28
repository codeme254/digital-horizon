import { makeStyles } from "@mui/styles";

const BORDER_RADIUS = 10;
const BOX_SHADOW = `-1px 1px 6px 0px rgba(0,0,0,0.75)`;
const useStyles = makeStyles((theme) => ({
  formImageContainer: {
    borderTopLeftRadius: `${BORDER_RADIUS}px`,
    borderBottomLeftRadius: `${BORDER_RADIUS}px`,
    overflow: "hidden",
    boxShadow: BOX_SHADOW,
  },
  formImage: {
    width: "100%",
    height: "100%",
    display: "block",
    objectFit: "cover",
  },
  formContainer: {
    padding: theme.spacing(3),
    borderTopRightRadius: `${BORDER_RADIUS}px`,
    borderBottomRightRadius: `${BORDER_RADIUS}px`,
    overflow: "hidden",
    boxShadow: BOX_SHADOW,
  },
}));

export default useStyles;

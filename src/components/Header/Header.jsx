import {
  AppBar,
  Toolbar,
  Box,
  CssBaseline,
  useMediaQuery,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/styles";
import { Link } from "react-router-dom";
import useStyles from "./Header.styles";
import HeaderDrawer from "./HeaderDrawer";
import scrollToSection from "../../utils/scroll";

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const navItems = [
    { label: "home", to: "#home" },
    { label: "about us", to: "#about" },
    { label: "services", to: "#services" },
    { label: "contact", to: "#contact" },
    { label: "why us", to: "#why-us" },
    { label: "consult", to: "#consult" },
  ];
  return (
    <AppBar elevation={1}>
      <CssBaseline />
      <Toolbar
        className={classes.toolbar}
        sx={{ background: theme.palette.background.paper }}
      >
        <Link to="/">
          <Typography variant="h1">Digital Horizon Solutions</Typography>
        </Link>
        {isMatch ? (
          // <AppBarDrawer linkItems={navItems} />
          <HeaderDrawer linkItems={navItems} />
        ) : (
          <Box>
            {navItems.map((item, index) => (
              <Link to={item.to} key={index} className={classes.linkItem} onClick={() => scrollToSection(item.to.substring(1))}>
                {item.label}
              </Link>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};
export default Header;

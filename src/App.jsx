import { makeStyles } from "@mui/styles";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from "./Pages/Home/Home";

const useStyles = makeStyles((theme) => ({
  color_test: {
    color: theme.palette.primary.main,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

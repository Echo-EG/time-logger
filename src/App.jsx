import './App.scss';
import {useSelector} from "react-redux";
import { CssBaseline } from '@mui/material';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {Header , InputWindow} from "./components";


const App = () => {

  return (
    <CssBaseline>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<InputWindow/>} />
        </Routes>
      </BrowserRouter>  
    </CssBaseline>
  );
}

export default App;

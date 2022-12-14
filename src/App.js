import Button1 from './Button1';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';

import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

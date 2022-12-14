import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LogoutIcon from '@mui/icons-material/Logout';
import Tooltip from '@mui/material/Tooltip';

const Navbar = () => {
 
  const loggedIn = false;

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          {!loggedIn ? <div className="item">
            <Tooltip title="Login">
              <LoginIcon className="icon" />
            </Tooltip>
          </div> : <div></div>}
          {!loggedIn ? <div className="item">
            <Tooltip title="Register">
              <HowToRegIcon className="icon" />
            </Tooltip>
          </div> : 
            <div className="item">
            <Tooltip title="Logout">
              <LogoutIcon className="icon" />
            </Tooltip>
          </div>}
          {loggedIn ? <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div> : <div></div>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

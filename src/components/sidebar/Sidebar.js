import "./Sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SupportIcon from '@mui/icons-material/Support';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import LanguageIcon from '@mui/icons-material/Language';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Greenstitch</span>
      </div>
      <hr />
      <div className="center">
        <p className="title">DASHBOARD</p>
        <ul>
          <li>
            <DashboardIcon></DashboardIcon>
            <span className="ptext">Dashboard</span>
            <KeyboardArrowUpIcon className="keyup"></KeyboardArrowUpIcon>
          </li>
        </ul>
        <ul>
          <li>
            <span className="dash">Records</span>
          </li>
        </ul>
        <ul>
          <li>
            <span className="dash">Reports</span>
          </li>
        </ul>
        <ul>
          <li>
            <span className="dash">Analyze</span>
          </li>
        </ul>
        <ul>
          <li>
            <span className="dash">Learn</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <p className="title">PAGES</p>
        <div className="page">
            <SupportIcon></SupportIcon>
            <span className="ptext">Help Center</span>
            <KeyboardArrowDownIcon className="help-down"></KeyboardArrowDownIcon>
        </div>
        <div className="page">
            <FolderOpenIcon></FolderOpenIcon>
            <span className="ptext">File Manager</span>
            <KeyboardArrowDownIcon className="file-down"></KeyboardArrowDownIcon>
        </div>
      </div>
      <div className="bottom-logo">
        <span className="b-logo">
          <SwapHorizIcon></SwapHorizIcon>
        </span>
        <span className="b-logo">
          <LogoutIcon></LogoutIcon>
        </span>
        <span className="b-logo">
          <LanguageIcon></LanguageIcon>
        </span>
      </div>
    </div>
  );
};

export default Sidebar;

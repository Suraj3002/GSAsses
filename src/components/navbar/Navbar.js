import './Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import GridViewIcon from '@mui/icons-material/GridView';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="wrapper">
            <div className="search">
                <input type="text" placeholder='Search...'  />
                <SearchIcon></SearchIcon>
            </div>
            <div className="items">
                <div className="item">
                    <NotificationsNoneIcon className='icon'></NotificationsNoneIcon>
                    <div className="counter"></div>
                </div>
                <div className="item">
                    <CalendarTodayIcon className='icon'></CalendarTodayIcon>
                </div>
                <div className="item">
                    <GridViewIcon className='icon'></GridViewIcon>
                </div>
                <div className="item">
                    <img src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="pic"
                     className='avatar'
                     />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
import './home.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widgets/Widget'
import Featured from '../../components/featured/Featured'
import Chart from '../../components/chart/Chart'

const Home = () => {
  return (
    <div className='home'>
        <Sidebar></Sidebar>
        <div className="homeContainer">
          <Navbar></Navbar>
          <div className="widgets">
            <Widget name="Carbon FootPrint" number="2,412,314t" gas="CO2e" growth="-45%" ></Widget>
            <Widget name="Emissions By Spinning" number="72,3694t" gas="CO2e" growth="-60%" ></Widget>
            <Widget name="Emission By Transportations" number="361,874t" gas="CO2e" growth="0.00" ></Widget>
            <Widget name="Emission By Carding" number="241,231" gas="CO2e" growth="+0.6%"></Widget>
          </div>
          <div className="charts">
            <Chart></Chart>
            <Featured></Featured>
          </div>
        </div>
    </div>
  )
}

export default Home
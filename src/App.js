import './App.css';
import logo from './asserts/logo.png';
import firstPic from './asserts/1.png';
import secondPic from './asserts/2.png';
import thirdPic from './asserts/3.png';

const App = () => {
  return (
    <div className="main1">

      <header className="header">
        <img src={logo} alt="Logo" className="logo" />
      </header>

      <div class="flex-container">
        <div class="flex-item-left">
          <img src={firstPic} alt="img" className="img" />
        </div>

        <div class="flex-item-right">
          <div>
            <h3>
              C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.
            </h3>
            <ul>
              <li>
                C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.
              </li>
              <li>
                C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.
              </li>
            </ul>
          </div>
          <img src={secondPic} alt="img" className="img" />
          <p>Government of India has awarded the <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
        </div>
      </div>

      <div className="main2">
        <p style={{ margin: "15px" }}>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
        
        <div className="section">
          <img src={thirdPic} alt="img" className="img" />
          <p style={{ margin: "1rem" }}>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
          <hr />
          <h3>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h3>

          <div className="lists">
            <span>CHEMICALS & PROCESSCHEMICALS & PROCESS</span>
            <span>POWER</span>
            <span>WATER & WASTE WATER</span>
            <span>OILS & GAS</span>
            <span>PHARMA</span>
            <span>SUGARS & DISTILLERIES</span>
            <span>PAPER & PULP</span>
            <span>MARINE & DEFENCE</span>
            <span>METAL & MINING</span>
            <span>FOOD & BEVERAGE</span>
            <span>PETROCHEMICAL & REFINERIES</span>
            <span>SOLAR</span><br />
            <span>BUILDING</span>
            <span>HVAC</span>
            <span>FIRE FIGHTING</span>
            <span>AGRICULTURE & RESIDENTIAL</span>
          </div>
        </div>

      </div>

      <div class="footer">
        <p><span style={{ fontSize: "larger" }}>✆</span>
          Troll free <b>1800 200 1234</b></p>
        <p><span style={{ fontSize: "larger" }}>𝗳</span>
          www.facebook.com/cripumps</p>
        <p>www.crigroups.com</p>
      </div>

    </div>
  )
}

export default App;
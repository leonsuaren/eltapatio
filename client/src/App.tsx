import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/navbar";
import * as utils from "./utils";
import { Home } from "./views/home";
import { Menu } from "./views/menu";
import { Services } from './views/services';
import { ContactUs } from "./views/contactus";
import { AboutUs } from "./views/aboutus";
import SidePanel from "./components/side-panel/SidePanel";

function App() {
  return (
    <>
      <utils.GlobalStyles />
      <Router>
        <Navbar />
        <SidePanel />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="menu" element={<Menu />}/>
          <Route path="services" element={<Services />}/>
          <Route path="contactus" element={<ContactUs />}/>
          <Route path="aboutus" element={<AboutUs />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

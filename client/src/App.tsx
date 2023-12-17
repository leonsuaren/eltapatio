import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SidePanelContextProvider from "./context/side-panel-context/SidePanelContext";

import { Navbar } from "./components/navbar";
import * as utils from "./utils";
import WrappedHome from './views/home/Home.tsx';
import { Menu } from "./views/menu";
import { Services } from './views/services';
import { ContactUs } from "./views/contactus";
import { AboutUs } from "./views/aboutus";
import SidePanel from "./components/side-panel/SidePanel";

function App() {
  return (
    <SidePanelContextProvider>
      <utils.GlobalStyles />
      <Router>
        <Navbar />
        <SidePanel />
        <Routes>
          <Route path="/" element={<WrappedHome />} />
          <Route path="menu" element={<Menu />}/>
          <Route path="services" element={<Services />}/>
          <Route path="contactus" element={<ContactUs />}/>
          <Route path="aboutus" element={<AboutUs />}/>
        </Routes>
      </Router>
    </SidePanelContextProvider>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SidePanelContextProvider from "./context/side-panel-context/SidePanelContext";
import { ThemeProvider } from "styled-components";
import { defaultTheme as theme } from '../src/utils/theme'

import * as utils from "./utils";
import WrappedHome from "./views/home/Home.tsx";
import SidePanel from "./components/side-panel/SidePanel";
import Navbar from "./components/navbar/Navbar.tsx";
import AboutUs from "./views/aboutus/AboutUs.tsx";
import ContactUs from "./views/contactus/ContactUs.tsx";
import Menu from "./views/menu/Menu.tsx";
import Services from "./views/services/Services.tsx";
import Footer from "./components/footer/Footer.tsx";

function App() {
  return (
    <SidePanelContextProvider>
      <ThemeProvider theme={theme}>
        <utils.GlobalStyles />
        <Router>
          <Navbar />
          <SidePanel />
          <Routes>
            <Route path="/" element={<WrappedHome />} />
            <Route path="menu" element={<Menu />} />
            <Route path="services" element={<Services />} />
            <Route path="contactus" element={<ContactUs />} />
            <Route path="aboutus" element={<AboutUs />} />
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    </SidePanelContextProvider>
  );
}

export default App;

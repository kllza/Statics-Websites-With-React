import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePagePage from "./Pages/HomePage/HomePage";
import EventInfoPage from "./Pages/InfoPage/InfoPage";
import TicketsPage from "./Pages/TicketPage/TicketPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import Navbar from "./Molecules/Navabr/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePagePage />} />
          <Route path="/event-info" element={<EventInfoPage />} />
          <Route path="/tickets" element={<TicketsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

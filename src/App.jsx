import { HashRouter , Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from "./pages/Dashboard";
import Event from './components/Event';
import Report from './components/Report';
import Footer from "./components/Footer";

function App() {

  return (
    <HashRouter basename="/admin-dashboard/">
      <Sidebar />
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/#event" element={<Event />} />
        <Route path="/#report" element={<Report />} />
      </Routes>
      <Footer />
    </HashRouter >
  )
}

export default App

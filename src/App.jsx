import JobBoard from "./components/JobBoard";
import Navbar from "./components/Navbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contacts";
import Map from "./pages/Map";
import Metric from "./pages/Metrics";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <DndProvider backend={HTML5Backend}>
        <Routes>
          <Route path="/" element={<JobBoard />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/map" element={<Map />} />
          <Route path="/metrics" element={<Metric />} />
        </Routes>
      </DndProvider>
    </BrowserRouter>
  );
}

export default App;

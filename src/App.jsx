import JobBoard from "./components/JobBoard";
import Navbar from "./components/Navbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app-container">
        <Navbar />
        <JobBoard />
      </div>
    </DndProvider>
  );
}

export default App;

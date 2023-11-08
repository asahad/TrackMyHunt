import JobBoard from "./components/JobBoard";
import Navbar from "./components/Navbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import JobForm from "./components/JobForm";

function App() {
  return (
    <>
      <div className="app-container">
        <Navbar />
        <DndProvider backend={HTML5Backend}>
          <JobBoard />
        </DndProvider>

        {/* <JobForm /> */}
      </div>
    </>
  );
}

export default App;

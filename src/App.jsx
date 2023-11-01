import JobBoard from "./components/JobBoard";
import Navbar from "./components/Navbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="app-container">
      <h1>Job Board</h1>
      <Navbar />
      <JobBoard />
    </div>
  );
}

export default App;

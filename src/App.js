import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>React.js Hooks</h1>
      <nav>
        <Link to="/reactjs-hooks/">Home</Link> <br />
        <Link to="/reactjs-hooks/useState">useState</Link>
      </nav>
      <Routes>
        <Route path="/reactjs-hooks/" element={<>Home</>} />
        <Route path="/reactjs-hooks/useState" element={<>useState</>} />
      </Routes>
    </div>
  );
}

export default App;

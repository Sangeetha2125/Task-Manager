import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./components/Home";
import EditTask from "./components/EditTask";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/:id" element={<EditTask />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

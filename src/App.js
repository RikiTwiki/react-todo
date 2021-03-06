import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todos from "./pages/Todos";
import TodoEdit from "./pages/TodoEdit";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Todos />} />
          <Route path="/:id" element={<TodoEdit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Categories from "./Containers/Categories";
import Header from "./Containers/Header";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;

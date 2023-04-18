import { Route, Routes } from "react-router-dom";
import "./App.css";
import Articles from "./component/Main/Articles";
import Header from "./component/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </div>
  );
}

export default App;

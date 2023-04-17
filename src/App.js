import { Route,Routes } from 'react-router-dom';
import './App.css';
import Articles from './component/Articles';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </div>
  );
}

export default App;

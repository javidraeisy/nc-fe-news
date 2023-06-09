import { Route, Routes } from "react-router-dom";
import "./App.css";
import Articles from "./component/Main/Articles";
import Header from "./component/Header/Header";
import { SingleArticle } from "./component/Main/SingleArticle";
import { Topics } from "./component/Main/Topics";

function App() {
  const loggedInUser = "happyamy2016";
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/articles" element={<Articles />} />
        <Route
          path="/articles/:article_id"
          element={<SingleArticle loggedInUser={loggedInUser} />}
        />
        <Route path="/topics" element={<Topics />} />
        <Route path="/topics/:topic_name" element={<Articles />} />
      </Routes>
    </div>
  );
}

export default App;

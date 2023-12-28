import TopBar from "./TopBar";
import Article from "./Article";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <TopBar />

        <main>
          <Routes>
            <Route path="/" element={<Article />} />
            <Route path="/platformer" element={<Article index={1} />} />
            <Route path="/c" element={<Article index={2} />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;

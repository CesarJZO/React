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
            <Route path="/article/:id" element={<Article />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;

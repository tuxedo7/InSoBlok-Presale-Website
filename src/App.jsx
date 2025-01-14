import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import HomeV10 from "./pages/HomeV10";
import RoadmapPage from "./pages/RoadmapPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/">
          <Route index element={<HomeV10 />} />
          <Route path="roadmap" element={<RoadmapPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

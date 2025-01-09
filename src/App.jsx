import { HashRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import HomeV10 from "./pages/HomeV10";

function App() {

  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomeV10 />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

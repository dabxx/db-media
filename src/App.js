import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Layout from "./Pages/Layout";
import LandingPage1 from "./Pages/LandingPage1";
import LandingPage2 from "./Pages/LandingPage2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />

          <Route path="gatiLanding1" element={<LandingPage1 />} />
          <Route path="dabx" element={<LandingPage2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

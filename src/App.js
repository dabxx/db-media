import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Layout from "./Pages/Layout";
import LandingPage1 from "./Pages/LandingPage1";
import LandingPage2 from "./Pages/LandingPage2";
import ErrorPage from "./Pages/ErrorPage";
import LandingPage3 from "./Pages/LandingPage3";
import PricingPage from "./Pages/Pricing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="gatiLanding1" element={<LandingPage1 />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="Landing2" element={<LandingPage2 />} />
          <Route path="Landing3" element={<LandingPage3 />} />
          <Route path="*" element={<ErrorPage />} /> {/* Catch-all route */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

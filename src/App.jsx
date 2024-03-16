import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Farmers from "./pages/Farmers";
import FarmerManage from "./pages/FarmerManage";
import CropDetection from "./pages/CropDetection";
import CropImages from "./pages/CropImages";
import Chatbot from "./pages/Chatbot";
import Assets from "./pages/Assets";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard>
              <Farmers />
            </Dashboard>
          }
        />
        <Route
          path="/farmer/:id"
          element={
            <Dashboard>
              <FarmerManage />
            </Dashboard>
          }
        />
        <Route
          path="/farmer/add"
          element={
            <Dashboard>
              <FarmerManage />
            </Dashboard>
          }
        />
        <Route
          path="/farmer/edit/:id"
          element={
            <Dashboard>
              <FarmerManage />
            </Dashboard>
          }
        />
        <Route
          path="/crop-detection"
          element={
            <Dashboard>
              <CropDetection />
            </Dashboard>
          }
        />
        <Route
          path="/crop-images"
          element={
            <Dashboard>
              <CropImages />
            </Dashboard>
          }
        />
        <Route
          path="/chatbot"
          element={
            <Dashboard>
              <Chatbot />
            </Dashboard>
          }
        />
        <Route
          path="/assets"
          element={
            <Dashboard>
              <Assets />
            </Dashboard>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

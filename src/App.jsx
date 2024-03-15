import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Farmers from "./pages/Farmers";
import FarmerManage from "./pages/FarmerManage";

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
              <></>
            </Dashboard>
          }
        />
        <Route
          path="/crop-images"
          element={
            <Dashboard>
              <></>
            </Dashboard>
          }
        />
        <Route
          path="/chatbot"
          element={
            <Dashboard>
              <></>
            </Dashboard>
          }
        />
        <Route
          path="/assets"
          element={
            <Dashboard>
              <></>
            </Dashboard>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

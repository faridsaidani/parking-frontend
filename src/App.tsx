import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Layout from "./pages/Layout";
import ProfilePage from "./pages/ProfilePage";
import Synchronize from "./pages/Synchronize";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="synchronize" element={<Synchronize />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route path="profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

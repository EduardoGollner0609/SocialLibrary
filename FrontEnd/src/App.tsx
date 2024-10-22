import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./routes/HomePage";
import LoginPage from "./routes/LoginPage";
import MoreDetails from "./routes/MoreDetails";
import RegisterPage from "./routes/RegisterPage";
import SocialPage from "./routes/SocialPage";
import SocialHome from "./routes/SocialHome";
import ProfilePage from "./routes/ProfilePage";
import ReadingCorner from "./routes/ReadingCorner";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<LoginPage />} />
          <Route path="more-details" element={<MoreDetails />} />
        </Route>

        <Route path="register" element={<RegisterPage />} />

        <Route path="social" element={<SocialPage />}>
          <Route path="home" element={<SocialHome />} />
          <Route path="profile" element={<ProfilePage />} />
        <Route path="reading-corner" element={<ReadingCorner />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

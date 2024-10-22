import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./routes/HomePage";
import LoginPage from "./routes/LoginPage";
import MoreDetails from "./routes/MoreDetails";
import RegisterPage from "./routes/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<LoginPage />} />
          <Route path="more-details" element={<MoreDetails />} />
        </Route>

        <Route path="register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

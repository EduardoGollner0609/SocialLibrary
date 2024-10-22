import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./routes/HomePage";
import LoginPage from "./routes/LoginPage";
import MoreDetails from "./routes/MoreDetails";

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<HomePage />}>
<Route index element={<LoginPage />} />
<Route path="/more-details" element={<MoreDetails />} />
  </Route>
</Routes>
</BrowserRouter>
  );
}

export default App;

import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Recommendations from "./pages/Recommendations";
import SchemeDetails from "./pages/SchemeDetails";
import Chat from "./pages/Chat";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/profile" element={<Profile />} />

      <Route
        path="/recommendations"
        element={<Recommendations />}
      />

      <Route
        path="/scheme-details"
        element={<SchemeDetails />}
      />

      <Route
        path="/chat"
        element={<Chat />}
      />

      <Route
        path="/about"
        element={<About />}
      />

      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />
    </Routes>
  );
}

export default App;
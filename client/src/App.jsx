import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DiscoverRoute from "./pages/DiscoverPage";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/discover" element={<DiscoverRoute />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

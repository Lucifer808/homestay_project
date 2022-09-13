import "./App.css";
import Loader from "./components/child/Loader";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import FooterCopyright from "./components/layout/Home/FooterCopyright";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import Loginpage from "./pages/Loginpage";
import Registerpage from "./pages/Registerpage";
import RoomListpage from "./pages/RoomListpage";
import QuickSearch from "./components/child/QuickSearch";
import RoomDetailpage from "./pages/RoomDetailpage";
function App() {
  return (
    <>
      <Header />
      <QuickSearch />
      <Routes>
        <Route path="/" index element={<Homepage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/register" element={<Registerpage />} />
        <Route path="/roomlist" element={<RoomListpage />} />
        <Route path="/roomdetail" element={<RoomDetailpage />} />
      </Routes>
      <Footer />
      <FooterCopyright />
    </>
  );
}

export default App;

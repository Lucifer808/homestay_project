import "./App.css";
import Loader from "./components/child/Loader";
import { useLocation } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import FooterCopyright from "./components/layout/Home/FooterCopyright";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import Loginpage from "./pages/Loginpage";
import Registerpage from "./pages/Registerpage";
import RoomListpage from "./pages/RoomListpage";
import RoomDetailpage from "./pages/RoomDetailpage";
import Paymentpage from "./pages/Paymentpage";
function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/payment" ? <Header /> : ""}
      <Routes>
        <Route path="/" index element={<Homepage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/register" element={<Registerpage />} />
        <Route path="/roomlist" element={<RoomListpage />} />
        <Route path="/roomdetail" element={<RoomDetailpage />} />
        <Route path="/payment" element={<Paymentpage />} />
      </Routes>
      <Footer />
      <FooterCopyright />
    </>
  );
}

export default App;

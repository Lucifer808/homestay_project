import "./App.css";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import Loginpage from "./pages/Loginpage";
import Registerpage from "./pages/Registerpage";
import RoomListpage from "./pages/RoomListpage";
import RoomDetailpage from "./pages/RoomDetailpage";
import Paymentpage from "./pages/Paymentpage";
import MainLayout from "./components/layout/MainLayout";
import ProviderLayout from "./components/layout/ProviderLayout";
import ProviderWelcomepage from "./pages/ProviderWelcomepage";
import ProviderMainpage from "./pages/ProviderMainpage";
import ProviderInfopage from "./pages/ProviderInfopage";
import EnterpriseInfopage from "./pages/EnterpriseInfopage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Homepage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/register" element={<Registerpage />} />
          <Route path="/roomlist" element={<RoomListpage />} />
          <Route path="/roomdetail" element={<RoomDetailpage />} />
          <Route path="/payment" element={<Paymentpage />} />
        </Route>
        <Route path="/provider" element={<ProviderLayout />}>
          <Route index element={<ProviderWelcomepage />} />
          <Route path="/provider/homes" element={<ProviderMainpage />} />
          <Route path="/provider/contract" element={<ProviderInfopage />} />
          <Route path="/provider/enterprise" element={<EnterpriseInfopage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

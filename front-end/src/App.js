import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { store } from "./store";
import { loadUser, selectUser } from "./features/userSlice";
import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import Registerpage from "./pages/Registerpage";
import RoomListpage from "./pages/RoomListpage";
import RoomDetailpage from "./pages/RoomDetailpage";
import Paymentpage from "./pages/Paymentpage";
import MainLayout from "./components/layout/MainLayout";
import ProviderLayout from "./components/layout/ProviderLayout";
import ProviderWelcomepage from "./pages/ProviderWelcomepage";
import ProviderMainpage from "./pages/ProviderMainpage";
import ProviderDesc from "./components/layout/Provider/ProviderDesc";
import ProviderLocation from "./components/layout/Provider/ProviderLocation";
import ProviderInfo from "./components/layout/Provider/ProviderInfo";
import ProviderService from "./components/layout/Provider/ProviderService";
import ProviderPriceSetUp from "./components/layout/Provider/ProviderPriceSetUp";
import ProviderImage from "./components/layout/Provider/ProviderImage";
import ProviderFile from "./components/layout/Provider/ProviderFile";
import EnterpriseInfo from "./components/layout/Enterprise/EnterpriseInfo";
import EnterpriseLocation from "./components/layout/Enterprise/EnterpriseLocation";
import EnterpriseService from "./components/layout/Enterprise/EnterpriseService";
import EnterpriseRoomDetail from "./components/layout/Enterprise/EnterpriseRoomDetail";
import EnterpriseImage from "./components/layout/Enterprise/EnterpriseImage";
import EnterpriseLayout from "./components/layout/EnterpriseLayout";
import EnterpriseFile from "./components/layout/Enterprise/EnterpriseFile";
import AdminProtectedRoute from "./routes/AdminProtectedRoute";
import AdminHomepage from "./components/admin/AdminHomepage";
function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  const selectData = useSelector(selectUser);
  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Homepage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/register" element={<Registerpage />} />
          <Route path="/roomlist" element={<RoomListpage />} />
          <Route path="/roomdetail" element={<RoomDetailpage />} />
          <Route path="/payment" element={<Paymentpage />} />
        </Route>
        <Route path="/homes" element={<ProviderWelcomepage />} />
        <Route path="/homes/choice" element={<ProviderMainpage />} />
        <Route path="/provider" element={<ProviderLayout />}>
          <Route path="/provider" index element={<ProviderInfo />} />
          <Route path="/provider/desc" element={<ProviderDesc />} />
          <Route path="/provider/location" element={<ProviderLocation />} />
          <Route path="/provider/service" element={<ProviderService />} />
          <Route path="/provider/price" element={<ProviderPriceSetUp />} />
          <Route path="/provider/image" element={<ProviderImage />} />
          <Route path="/provider/file" element={<ProviderFile />} />
        </Route>
        <Route path="/enterprise" element={<EnterpriseLayout />}>
          <Route path="/enterprise" index element={<EnterpriseInfo />} />
          <Route path="/enterprise/location" element={<EnterpriseLocation />} />
          <Route path="/enterprise/service" element={<EnterpriseService />} />
          <Route
            path="/enterprise/roomdetail"
            element={<EnterpriseRoomDetail />}
          />
          <Route path="/enterprise/image" element={<EnterpriseImage />} />
          <Route path="/enterprise/file" element={<EnterpriseFile />} />
        </Route>
        <Route
          path="/admin"
          element={<AdminProtectedRoute isAdmin={selectData} />}
        >
          <Route path="/admin/ecommerce" index element={<AdminHomepage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

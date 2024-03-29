import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import customerApi from "./api/customerApi";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { store } from "./store";
import { Elements } from "@stripe/react-stripe-js";
import {
  loadUser,
  selectUser,
  selectIsAutheticated,
} from "./features/userSlice";
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
import ProviderSuccessSetUp from "./components/layout/Provider/ProviderSuccessSetUp";
import EnterpriseInfo from "./components/layout/Enterprise/EnterpriseInfo";
import EnterpriseLocation from "./components/layout/Enterprise/EnterpriseLocation";
import EnterpriseService from "./components/layout/Enterprise/EnterpriseService";
import EnterpriseRoomDetail from "./components/layout/Enterprise/EnterpriseRoomDetail";
import EnterpriseImage from "./components/layout/Enterprise/EnterpriseImage";
import EnterpriseLayout from "./components/layout/EnterpriseLayout";
import EnterpriseFile from "./components/layout/Enterprise/EnterpriseFile";
import AdminProtectedRoute from "./routes/AdminProtectedRoute";
import AdminHomepage from "./components/admin/AdminHomepage";
import AdminEcommercepage from "./components/admin/pages/AdminEcommercepage";
import AdminServicespage from "./components/admin/pages/AdminServicespage";
import AdminTypeOfServicespage from "./components/admin/pages/AdminTypeOfServicespage";
import AdminTypeOfAccommodationpage from "./components/admin/pages/AdminTypeOfAccommodationpage";
import AdminAccommodationspage from "./components/admin/pages/AdminAccommodationpage";
import MyRoomListpage from "./pages/MyRoomListpage";
import MyRoompage from "./pages/MyRoompage";
import EditMyRoompage from "./pages/EditMyRoompage";
import MyRoomListByIdpage from "./pages/MyRoomListByIdpage";
import { loadStripe } from "@stripe/stripe-js";
import PaymentFristStep from "./components/layout/Payment/PaymentFristStep";
import PaymentSeccondStep from "./components/layout/Payment/PaymentSeccondStep";
import PaymentSuccess from "./components/layout/Payment/PaymentSuccess";
import PaymentLayout from "./components/layout/Payment/PaymentLayout";
import NotFoundRoute from "./routes/NotFoundRoute";
import MyOrderspage from "./pages/MyOrderspage";
import AccountLayout from "./components/child/AccountLayout";
import MyRoomOrdersListpage from "./pages/MyRoomOrdersListpage";
import MyWishListpage from "./pages/MyWishListpage";
import MyInfopage from "./pages/MyInfopage";
function App() {
  const selectData = useSelector(selectUser);
  const isAuthenticated = useSelector(selectIsAutheticated);
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await customerApi.customerGetStripeKey();
    console.log(data);
    setStripeApiKey(data.stripeApiKey);
  }
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  useEffect(() => {
    getStripeApiKey();
  }, [isAuthenticated]);
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
          <Route path="/search" element={<RoomListpage />} />
          <Route path="/roomdetail/:id" element={<RoomDetailpage />} />
        </Route>
        <Route path="/payment" element={<PaymentLayout />}>
          <Route path="/payment" index element={<PaymentFristStep />} />
          <Route path="/payment/success" element={<PaymentSuccess />} />
          {stripeApiKey && (
            <Route
              path="/payment/checkout"
              element={
                <Elements stripe={loadStripe(stripeApiKey)}>
                  <PaymentSeccondStep />
                </Elements>
              }
            />
          )}
        </Route>
        <Route path="/homes" element={<ProviderWelcomepage />} />
        <Route path="/homes/choice" element={<ProviderMainpage />} />
        <Route path="/account" element={<AccountLayout />}>
          <Route path="/account/login" element={<Loginpage />} />
          <Route path="/account/register" element={<Registerpage />} />
          <Route path="/account/orders" element={<MyOrderspage />} />
          <Route path="/account/wishlist" element={<MyWishListpage />} />
          <Route path="/account/myinfo" element={<MyInfopage />} />
        </Route>
        <Route path="/provider" element={<ProviderLayout />}>
          <Route path="/provider" index element={<ProviderInfo />} />
          <Route path="/provider/desc" element={<ProviderDesc />} />
          <Route path="/provider/location" element={<ProviderLocation />} />
          <Route path="/provider/services" element={<ProviderService />} />
          <Route path="/provider/price" element={<ProviderPriceSetUp />} />
          <Route path="/provider/image" element={<ProviderImage />} />
          <Route path="/provider/file" element={<ProviderFile />} />
          <Route path="/provider/sucess" element={<ProviderSuccessSetUp />} />
          <Route path="/provider/myroomlist" element={<MyRoomListpage />} />
          <Route
            path="/provider/my-room-order-list/:id"
            element={<MyRoomOrdersListpage />}
          />
          <Route
            path="/provider/roombyid/:id"
            element={<MyRoomListByIdpage />}
          />
          <Route path="/provider/myroom/:id" element={<MyRoompage />} />
          <Route path="/provider/editmyroom/:id" element={<EditMyRoompage />} />
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
          <Route path="/admin" index element={<AdminHomepage />} />
          <Route path="/admin/ecommerce" element={<AdminEcommercepage />} />
          <Route path="/admin/services" element={<AdminServicespage />} />
          <Route
            path="/admin/type-of-services"
            element={<AdminTypeOfServicespage />}
          />
          <Route
            path="/admin/type-of-accommodation"
            element={<AdminTypeOfAccommodationpage />}
          />
          <Route
            path="/admin/accommodation"
            element={<AdminAccommodationspage />}
          />
        </Route>
        <Route path="*" element={<NotFoundRoute />} />
      </Routes>
    </>
  );
}

export default App;

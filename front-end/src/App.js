import "./App.css";
import Loader from "./components/child/Loader";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import FooterCopyright from "./components/layout/Home/FooterCopyright";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="App">
      <Header />
      <Homepage />
      {/* <Loader /> */}
      <Footer />
      <FooterCopyright />
    </div>
  );
}

export default App;

import "./App.css";
import Loader from "./components/child/Loader";
import Header from "./components/layout/Header";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="App">
      <Header />
      <Homepage />
      {/* <Loader /> */}
    </div>
  );
}

export default App;

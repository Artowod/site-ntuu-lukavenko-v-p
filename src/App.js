import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Spinner from "./shared/Spinner";
import spinnerImage from "./images/mechstars.png";

function App() {
  return (
    <div className="App">
      <Spinner image={spinnerImage} />
      <Header />
      <Body />
      <Footer />
      <div className="back"></div>
    </div>
  );
}

export default App;

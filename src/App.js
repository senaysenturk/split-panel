import logo from "./logo.svg";
import "./App.css";
import "./utilities.scss";
import Header from "./components/shared/header/Header";
import ResizeablePanel from "./components/resizeable-panel/ResizeablePanel";
import Footer from "./components/shared/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <ResizeablePanel />
      <Footer />
    </div>
  );
}

export default App;

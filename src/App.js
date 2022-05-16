import logo from "./logo.svg";
// import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Testimonials from "./components/Testimonials/Testimonials";
import Content from "./components/Testimonials/Content";

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;

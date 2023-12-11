import Header from "./components/Header";
import Main from "./components/Main";
import Cards from "./components/Cards";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./css/header.css";
import "./css/main.css";
import "./css/cards.css";
import "./css/gallery.css";
import "./css/footer.css";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Cards />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;

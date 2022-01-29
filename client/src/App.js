import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Page/Header";
import Body from "./components/Page/Body";
import Footer from "./components/Page/Footer";
import MainPage from "./pages/MainPage";
import CatalogPage from "./pages/CatalogPage";
import CatalogIdPage from "./pages/CatalogIdPage";
import AboutPage from "./pages/AboutPage";
import ContactsPage from "./pages/ContactsPage";
import CartPage from "./pages/CartPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Router>
      <Header />
      <Body>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/catalog" element={<CatalogPage />} />
          <Route exact path="/catalog/:id" element={<CatalogIdPage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/contacts" element={<ContactsPage />} />
          <Route exact path="/cart" element={<CartPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Body>
      <Footer />
    </Router>
  );
}

export default App;

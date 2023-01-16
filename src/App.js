import "./App.css";
import "./index.css";
import "../src/StyledComponents/rootclassnames.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sharedlayout from "./SharedLayout";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart/Cart";
import Women from "./Pages/Women";
import Mens from "./Pages/Men";
import Kids from "./Pages/Kids";
import Contact from "./Pages/Contact";
import Wishlist from "./Pages/Wishlist";
import AppState from "./GlobalStates/AppState";

function App() {
  return (
    <AppState>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Sharedlayout />}>
              <Route index element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/Wishlist" element={<Wishlist />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Kids" element={<Kids />} />
              <Route path="/Mens" element={<Mens />} />
              <Route path="/Womens" element={<Women />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AppState>
  );
}

export default App;

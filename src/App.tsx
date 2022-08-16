import { ShopPage, ContactPage } from "./pages";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ShopPage />} />
        <Route path="/AboutUs" element={<ShopPage />} />
        <Route path="/Statistics" element={<ShopPage />} />
        <Route path="/Contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;

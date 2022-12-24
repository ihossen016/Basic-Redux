import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

// Pages
import Cart from "./pages/Cart";
import Home from "./pages/Home";

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Navbar />

                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/cart" element={<Cart />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

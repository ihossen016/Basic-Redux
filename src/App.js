import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import store from "./store/store";

// Pages
import Cart from "./pages/Cart";
import Home from "./pages/Home";

function App() {
    return (
        <div className="app">
            <Provider store={store}>
                <BrowserRouter>
                    <Navbar />

                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/cart" element={<Cart />}></Route>
                    </Routes>
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;

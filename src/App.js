
import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Korzinka from "./pages/Korzinka";
import { BrowserRouter, Routes,  Route} from "react-router-dom";

export const ShopContext = React.createContext();


function App() {
  const [cart, setCart] = useState([]);

  const addProduct = (el) => {
    setCart([...cart, el]);
  }

  return (
 <div>
   <ShopContext.Provider value={{
          cart,
          addProduct
        }}>
           <BrowserRouter>
            <Header/>
            <Routes>
              <Route path="/" element={ <Home/>}  />
              <Route path="/cart" element={<Korzinka/>} />
            </Routes>
           
      </BrowserRouter>
   </ShopContext.Provider>
 </div>
  );
}

export default App;

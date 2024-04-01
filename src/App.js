import './App.css';
import {Routes,Route} from "react-router-dom";
import HomeScreen from "./screens/User/home/HomeScreen";
import ProductListScreen from "./screens/User/product/ProductListScreen";

function App() {
  return (
    <Routes>
        <Route path={'/'} element={<HomeScreen/>}/>
        <Route path={'/product'} element={<ProductListScreen/>}/>
    </Routes>
  );
}

export default App;

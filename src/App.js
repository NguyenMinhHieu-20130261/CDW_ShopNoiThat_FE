import './App.css';
import {Routes,Route} from "react-router-dom";
import HomeScreen from "./screens/User/HomeScreen/HomeScreen";
import ProductListScreen from "./screens/User/ProductListScreen/ProductListScreen";
import ProductDetailScreen from "./screens/User/ProductDetailScreen/ProductDetailScreen";
import SearchScreen from "./screens/User/SearchScreen/SearchScreen";
import RegisterScreen from "./screens/User/RegisterScreen/RegisterScreen";
import LoginScreen from "./screens/User/LoginScreen/LoginScreen";
import AccountDetailScreen from "./screens/User/AccountDetailScreen/AccountDetailScreen";

function App() {
  return (
    <Routes>
        <Route path={'/'} element={<HomeScreen/>}/>
        <Route path={'/product'} element={<ProductListScreen/>}/>
        <Route path={'/detail'} element={<ProductDetailScreen/>}/>
        <Route path={'/search'} element={<SearchScreen/>}/>
        <Route path={'/login'} element={<LoginScreen/>}/>
        <Route path={'/register'} element={<RegisterScreen/>}/>
        <Route path={'/account'} element={<AccountDetailScreen/>}/>
    </Routes>
  );
}

export default App;

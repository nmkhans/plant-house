import Home from './../pages/Home/Home';
import Category from './../pages/Category/Category';
import Search from './../pages/Search/Search';
import Shop from './../pages/Shop/Shop';
import Login from './../pages/Login/Login';
import Register from '../pages/Register/Register';
import ProductDetail from './../pages/ProductDetail/ProductDetail';
import PlantCare from './../pages/PlantCare/PlantCare';

const publicRoutes = [
    { name: "Home", path: "/", Element: Home },
    { name: "Login", path: "/login", Element: Login },
    { name: "Register", path: "/register", Element: Register },
    { name: "Shop", path: "/shop", Element: Shop },
    { name: "Category", path: "/category/:category", Element: Category },
    { name: "Search", path: "/search/:search", Element: Search },
    { name: "ProductDetail", path: "/product/:id", Element: ProductDetail },
    { name: "PlantCare", path: "/plant-care", Element: PlantCare },
]

export default publicRoutes;
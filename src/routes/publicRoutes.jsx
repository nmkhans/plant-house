import Home from './../pages/Home/Home';
import Category from './../pages/Category/Category';
import Search from './../pages/Search/Search';
import Shop from './../pages/Shop/Shop';
import ProductDetail from './../pages/ProductDetail/ProductDetail';

const publicRoutes = [
    { name: "Home", path: "/", Element: Home },
    { name: "Shop", path: "/shop", Element: Shop },
    { name: "Category", path: "/category/:id", Element: Category },
    { name: "Search", path: "/search/:id", Element: Search },
    { name: "ProductDetail", path: "/product/:id", Element: ProductDetail },
]

export default publicRoutes;
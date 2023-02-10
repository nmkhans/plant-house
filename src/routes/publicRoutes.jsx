import Home from './../pages/Home/Home';
import Products from './../pages/Products/Products';

const publicRoutes = [
    { name: "Home", path: "/", Element: Home },
    { name: "Products", path: "/products", Element: Products }
]

export default publicRoutes;
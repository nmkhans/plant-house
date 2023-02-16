import AdminDashboard from "../Dashboards/AdminDashboard/AdminDashboard"
import AdminProducts from "../Dashboards/AdminProducts/AdminProducts";
import CreateProduct from "../Dashboards/CreateProduct/CreateProduct";
import AdminOrders from './../Dashboards/AdminOrders/AdminOrders';



const adminRoute = [
    { name: "AdminDashboard", path: "dashboard", Element: AdminDashboard },
    { name: "AdminOrder", path: "orders", Element: AdminOrders },
    { name: "AdminProducts", path: "products", Element: AdminProducts },
    { name: "CreateProduct", path: "product/create", Element: CreateProduct },
]

export default adminRoute
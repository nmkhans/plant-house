import AdminDashboard from "../Dashboards/AdminDashboard/AdminDashboard";
import AdminProducts from "../Dashboards/AdminProducts/AdminProducts";
import CreateProduct from "../Dashboards/CreateProduct/CreateProduct";
import AdminOrders from "./../Dashboards/AdminOrders/AdminOrders";
import CreateCategory from "./../Dashboards/CreateCategory/CreateCategory";
import AdminCategories from './../Dashboards/AdminCategories/AdminCategories';

const adminRoute = [
  { name: "AdminDashboard", path: "dashboard", Element: AdminDashboard },
  { name: "AdminOrder", path: "orders", Element: AdminOrders },
  { name: "AdminProducts", path: "products", Element: AdminProducts },
  { name: "CreateProduct", path: "product/create", Element: CreateProduct },
  { name: "AdminCategories", path: "categories", Element: AdminCategories },
  { name: "CreateCategory", path: "category/create", Element: CreateCategory },
];

export default adminRoute;

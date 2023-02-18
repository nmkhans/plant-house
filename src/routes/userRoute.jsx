import UserDashboard from './../Dashboards/UserDashboard/UserDashboard';
import SellerDashboard from './../Dashboards/SellerDashboard/SellerDashboard';
import UserOrder from './../Dashboards/UserOrder/UserOrder';

const userRoutes = [
    { name: "Dashboard", path: "dashboard", Element: UserDashboard },
    { name: "Order", path: "order", Element: UserOrder },
    { name: "Seller", path: "seller-dashboard", Element: SellerDashboard },
]

export default userRoutes;
import UserDashboard from './../Dashboards/UserDashboard/UserDashboard';
import SellerDashboard from './../Dashboards/SellerDashboard/SellerDashboard';

const userRoutes = [
    { name: "Dashboard", path: "dashboard", Element: UserDashboard },
    {name: "Seller", path: "seller-dashboard", Element: SellerDashboard}
]

export default userRoutes;
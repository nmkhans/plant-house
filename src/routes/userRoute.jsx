import UserDashboard from './../Dashboards/UserDashboard/UserDashboard';
import SellerDashboard from './../Dashboards/SellerDashboard/SellerDashboard';
import UserOrder from './../Dashboards/UserOrder/UserOrder';
import Review from './../Dashboards/Review/Review';

const userRoutes = [
    { name: "Dashboard", path: "dashboard", Element: UserDashboard },
    { name: "Order", path: "order", Element: UserOrder },
    { name: "Seller", path: "seller-dashboard", Element: SellerDashboard },
    { name: "Review", path: "review/:id", Element: Review },
]

export default userRoutes;
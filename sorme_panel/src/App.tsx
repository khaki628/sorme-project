import SignIn from "./login/signIn";

import Customer_Dashboard from "./customerPanel/Dashboard";
import Customer_Orders from "./customerPanel/Orders";
import Customer_Favorites from "./customerPanel/Favorites";
import Customer_wallet from "./customerPanel/wallet";
import Customer_support from "./customerPanel/support";
import Customer_setting from "./customerPanel/setting";

import Admin_Dashboard from "./adminpanel/Dashboard";
import Admin_Seller from "./adminpanel/Seller";
import Admin_Financial from "./adminpanel/Financial";
import Admin_users from "./adminpanel/users";
import Admin_Support from "./adminpanel/support";
import Admin_setting from "./adminpanel/setting";

import Seller_Dashboard from "./sellerpanel/Dashboard";
import Seller_product from "./sellerpanel/product";
import Seller_setting from "./sellerpanel/setting";

import { RecoilRoot } from "recoil";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./login/signUp";
import ForgetPass from "./login/forgetPass";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignIn />,
    },
    {
      path: "/sign-up",
      element: <SignUp />,
    },
    {
      path: "/forget-pass",
      element: <ForgetPass />,
    },

    // routs of customer panel

    {
      path: "/customer/dashboard",
      element: <Customer_Dashboard />,
    },
    {
      path: "/Customer/Orders",
      element: <Customer_Orders />,
    },
    {
      path: "/Customer/favorites",
      element: <Customer_Favorites />,
    },
    {
      path: "/Customer/wallet",
      element: <Customer_wallet />,
    },
    {
      path: "/Customer/support",
      element: <Customer_support />,
    },
    {
      path: "/Customer/setting",
      element: <Customer_setting />,
    },

    // routes of admin panel

    {
      path: "/admin/dashboard",
      element: <Admin_Dashboard />,
    },
    {
      path: "/admin/users",
      element: <Admin_users />,
    },
    {
      path: "/admin/seller",
      element: <Admin_Seller />,
    },
    {
      path: "/admin/financial",
      element: <Admin_Financial />,
    },
    {
      path: "/admin/support",
      element: <Admin_Support />,
    },
    {
      path: "/admin/setting",
      element: <Admin_setting />,
    },

    // routes of seller panel

    {
      path: "/seller/dashboard",
      element: <Seller_Dashboard />,
    },
    {
      path: "/seller/products",
      element: <Seller_product />,
    },
    {
      path: "/seller/setting",
      element: <Seller_setting />,
    },
  ]);
  return (
    <div>
      <RecoilRoot>
        <RouterProvider router={router} />
      </RecoilRoot>
    </div>
  );
}

export default App;

import { Link } from "react-router-dom";

const Aside = (props: {
  Dashboard: string;
  Orders: string;
  favorites: string;
  wallet: string;
  support: string;
  setting: string;
}) => {
  return (
    <div className="w-[422px] h-screen shadow-lg">
      {/* user info */}
      <div className="w-full h-[215px] flex flex-col items-center ">
        <div className="w-[119px] h-[119px] bg-[#ECECEC] rounded-full mt-8"></div>
        <p className="text-[24px] font-semibold">Hardy Oppenheimer</p>
        <p className="text-[20px] text-[#777777] ">Hardy.Oppenh@gmail.com</p>
      </div>
      <ul className="w-full ">
        <Link to={"/customer/dashboard"}>
          <button className={props.Dashboard}>
            <li className="w-full h-[122px] flex flex-row items-center">
              <img
                src="/src/assets/svg/dashboard_icon.svg"
                alt=""
                className="ml-24 w-[75px]"
              />
              <p className="text-[36px] font-semibold ml-3">Dashboard</p>
            </li>
          </button>
        </Link>
        <Link to={"/Customer/Orders"}>
          <button className={props.Orders}>
            <li className=" h-[122px] flex flex-row items-center">
              <img
                src="/src/assets/svg/orders_icon.svg"
                alt=""
                className="ml-24"
              />
              <p className="text-[36px]  font-semibold ml-3">Orders</p>
            </li>
          </button>
        </Link>
        <Link to={"/Customer/favorites"}>
          <button className={props.favorites}>
            <li className="h-[122px] flex flex-row items-center  ">
              <img
                src="/src/assets/svg/heart_icon.svg"
                alt=""
                className="ml-24"
              />
              <p className="text-[36px]  font-semibold ml-3">Favorites</p>
            </li>
          </button>
        </Link>
        <Link to={"/Customer/wallet"}>
          <button className={props.wallet}>
            <li className="h-[122px] flex flex-row items-center  ">
              <img
                src="/src/assets/svg/wallet_icon.svg"
                alt=""
                className="ml-24"
              />
              <p className="text-[36px]  font-semibold ml-3">wallet</p>
            </li>
          </button>
        </Link>
        <Link to={"/Customer/support"}>
          <button className={props.support}>
            <li className="h-[122px] flex flex-row items-center  ">
              <img
                src="/src/assets/svg/customer_support.svg"
                alt=""
                className="ml-24"
              />
              <p className="text-[36px]  font-semibold ml-3">Support</p>
            </li>
          </button>
        </Link>
        <Link to={"/Customer/setting"}>
          <button className={props.setting}>
            <li className="h-[122px] flex flex-row items-center  ">
              <img
                src="/src/assets/svg/setting_icon.svg"
                alt=""
                className="ml-24"
              />
              <p className="text-[36px]  font-semibold ml-3">Settings</p>
            </li>
          </button>
        </Link>
      </ul>
    </div>
  );
};

export default Aside;

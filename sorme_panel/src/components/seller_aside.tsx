import { Link } from "react-router-dom";

const Aside = (props: {
  Dashboard: string;
  product: string;
  setting: string;
}) => {
  return (
    <div className="w-[422px] h-full shadow-lg">
      {/* user info */}
      <div className="w-full h-[215px] flex flex-col items-center ">
        <div className="w-[119px] h-[119px] bg-[#ECECEC] rounded-full mt-8"></div>
        <p className="text-[24px] font-semibold">Hardy Oppenheimer</p>
        <p className="text-[20px] text-[#777777] ">Hardy.Oppenh@gmail.com</p>
      </div>
      <ul className="w-full ">
        <Link to={"/seller/dashboard"}>
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
        <Link to={"/seller/products"}>
          <button className={props.product}>
            <li className="w-full h-[122px] flex flex-row items-center">
              <img
                src="/src/assets/svg/product-box-icon.svg"
                alt=""
                className="ml-24 w-[75px]"
              />
              <p className="text-[36px] font-semibold ml-3">product</p>
            </li>
          </button>
        </Link>
        <Link to={"/seller/setting"}>
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

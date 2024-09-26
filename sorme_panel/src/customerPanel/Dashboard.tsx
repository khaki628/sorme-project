import Header from "../components/header";
import Aside from "../components/costomer_aside";

const Customer_Dashboard = () => {
  return (
    <div className="w-full h-screen ">
      <Header />
      <div className="w-full flex flex-row items-center">
        <Aside
          Dashboard={
            " flex flex-row items-center bg-[url('/src/assets/svg/sidepicker_icon.svg')] text-[#F29AA7] bg-no-repeat "
          }
          Orders=""
          favorites=""
          wallet=""
          support=""
          setting=""
        />
        <div className="w-[1200px] h-[550px] flex flex-wrap justify-around mx-auto">
          <div className="w-[402px] h-[151px] border border-[#F29AA7] rounded-[14px] shadow-md shadow-[#F29AAF] relative">
            <img
              src="/src/assets/svg/orders_icon.svg"
              alt=""
              className="w-[144px] absolute bottom-14 right-80 rotate-[340deg]"
            />
            <p className="text-[40px] text-end font-semibold mr-7">20 Orders</p>
            <p className="text-[40px] text-end font-semibold mr-7">
              Active Orders
            </p>
          </div>
          <div className="w-[402px] h-[151px] border border-[#F29AA7] rounded-[14px] shadow-md shadow-[#F29AAF] relative">
            <img
              src="/src/assets/svg/wallet_icon.svg"
              alt=""
              className="w-[144px] absolute bottom-16 right-80 rotate-[340deg]"
            />
            <p className="text-[40px] text-end font-semibold mr-7">
              20 transaction
            </p>
            <p className="text-[40px] text-end font-semibold mr-7">
              Bank transactions
            </p>
          </div>
          <div className="w-[402px] h-[151px] border border-[#F29AA7] rounded-[14px] shadow-md shadow-[#F29AAF] relative">
            <img
              src="/src/assets/svg/heart_icon.svg"
              alt=""
              className="w-[144px] absolute bottom-14 right-80 rotate-[340deg]"
            />
            <p className="text-[40px] text-end font-semibold mr-7">
              20 Favorites
            </p>
            <p className="text-[40px] text-end font-semibold mr-7">
              Favorites to order
            </p>
          </div>
          <div className="w-[402px] h-[151px] border border-[#F29AA7] rounded-[14px] shadow-md shadow-[#F29AAF] relative">
            <img
              src="/src/assets/svg/customer_support.svg"
              alt=""
              className="w-[144px] absolute bottom-14 right-80 rotate-[340deg]"
            />
            <p className="text-[40px] text-end font-semibold mr-7">20 Active</p>
            <p className="text-[40px] text-end font-semibold mr-7">
              Support tickets
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer_Dashboard;

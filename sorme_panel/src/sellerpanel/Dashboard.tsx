import Header from "../components/header";
import Aside from "../components/seller_aside";

const Seller_Dashboard = () => {
  return (
    <div className="w-full h-screen ">
      <Header />
      <div className="w-full h-full flex flex-row">
        <Aside
          Dashboard={
            " flex flex-row items-center bg-[url('/src/assets/svg/sidepicker_icon.svg')] text-[#F29AA7] bg-no-repeat "
          }
          product=""
          setting=""
        />
        <div className="w-[1200px] h-[550px]">
          <div className="w-[402px] h-[151px] border border-[#F29AA7] rounded-[14px] shadow-md shadow-[#F29AAF] relative m-32">
            <img
              src="/src/assets/svg/product-box-icon.svg"
              alt="user-icon"
              className="w-[144px] absolute bottom-14 right-80 rotate-[340deg]"
            />
            <p className="text-[40px] font-semibold ml-32">20 Users</p>
            <p className="text-[40px] font-semibold ml-32">Sellers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seller_Dashboard;

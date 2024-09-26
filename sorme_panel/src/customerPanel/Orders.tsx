import Header from "../components/header";
import Aside from "../components/costomer_aside";

const Customer_Orders = () => {
  return (
    <div className="w-full h-screen ">
      <Header />
      <div className="w-full flex flex-row ">
        <Aside
          Dashboard=""
          Orders={
            "flex flex-row items-center bg-[url('/src/assets/svg/sidepicker_icon.svg')] text-[#F29AA7] bg-no-repeat "
          }
          favorites=""
          wallet=""
          support=""
          setting=""
        />
        <div className="w-[1251px] h-[313px] bg-[#FFF1F3] flex flex-col items-center justify-center rounded-[17px] mx-auto mt-32">
          <div className="w-[1181px] h-[103px] text-[40px] font-semibold flex flex-row items-center justify-between ">
            <p>Order</p>
            <p>Date</p>
            <p>Condition</p>
            <p>Total</p>
          </div>
          <div className="w-[1181px] h-[103px] text-[40px] font-semibold flex flex-row items-center justify-between border-t-[2px] border-black ">
            <p>#2546</p>
            <p>2022/02/01 </p>
            <p>Awaiting review</p>
            <p>$60</p>
          </div>
          <div className="w-[1181px] h-[103px] text-[40px] font-semibold flex flex-row items-center justify-between border-t-[2px] border-black ">
            <p>#2546</p>
            <p>2022/02/01 </p>
            <p>Awaiting review</p>
            <p>$60</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer_Orders;

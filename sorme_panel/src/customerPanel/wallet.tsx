import Header from "../components/header";
import Aside from "../components/costomer_aside";
const Customer_wallet = () => {
  return (
    <div className="w-full h-screen ">
      <Header />
      <div className="w-full flex flex-row ">
        <Aside
          Dashboard=""
          Orders=""
          favorites=""
          wallet=" flex flex-row items-center bg-[url('/src/assets/svg/sidepicker_icon.svg')] text-[#F29AA7] bg-no-repeat "
          support=""
          setting=""
        />
        <div className="w-[1251px] h-[600px] flex flex-row items-center justify-around rounded-[20px] bg-[#FFF0F3] mx-auto mt-32 ">
          <div className="w-[338px] h-[533px] bg-white flex flex-col items-center justify-around rounded-[20px]">
            <div className="w-[315px] h-[125px] bg-[#FFF0F3] flex flex-row items-center justify-around rounded-[20px]">
              <img
                src="/src/assets/svg/increase-up.svg"
                alt="increase-up-icon"
              />
              <p className="text-[36px] font-semibold">Inventory increase</p>
            </div>
            <div className="w-[315px] h-[125px] bg-[#FFF0F3] flex flex-row items-center justify-around rounded-[20px]">
              <img
                src="/src/assets/svg/data-transfer.svg"
                alt="data-transfer-icon"
              />
              <p className="text-[36px] font-semibold">Inventory transfer</p>
            </div>
            <div className="w-[315px] h-[125px] bg-[#FFF0F3] flex flex-row items-center justify-around rounded-[20px]">
              <img
                src="/src/assets/svg/increase-down.svg"
                alt="increase-down-icon"
              />
              <p className="text-[36px] font-semibold">Inventory withdrawal</p>
            </div>
          </div>
          <div className="w-[810px] h-[533px] flex flex-col justify-between">
            <div className="w-full h-[98px] flex flex-row items-center justify-between rounded-[20px] bg-white">
              <p className="text-[36px] font-semibold ml-5">balece of money</p>
              <p className="text-[36px] font-semibold mr-5">60$</p>
            </div>
            <div className="w-full h-[425px] flex flex-col items-center bg-white rounded-[20px]">
              <div className="w-[85%] h-[100px] flex flex-row items-center text-[40px] font-semibold">
                <p className="w-[170px]">Order</p>
                <p className="w-[350px]">Date</p>
                <p className="w-[170px]">Total</p>
              </div>
              <div className="w-[85%] h-[100px] flex flex-row items-center text-[40px] font-semibold border-t border-black ">
                <p className="w-[170px]">#2546</p>
                <p className="w-[350px]">2022/02/01</p>
                <p className="w-[170px]">-$60 </p>
              </div>
              <div className="w-[85%] h-[100px] flex flex-row items-center text-[40px] font-semibold border-t border-black ">
                <p className="w-[170px]">#2546</p>
                <p className="w-[350px]">2022/02/01</p>
                <p className="w-[170px]">+$60</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer_wallet;

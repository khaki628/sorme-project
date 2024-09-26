import Header from "../components/header";
import Aside from "../components/seller_aside";

const Seller_product = () => {
  return (
    <div className="w-full h-screen ">
      <Header />
      <div className="w-full h-full flex flex-row ">
        <Aside
          Dashboard=""
          product=" flex flex-row items-center bg-[url('/src/assets/svg/sidepicker_icon.svg')] text-[#F29AA7] bg-no-repeat "
          setting=""
        />
        <div className="w-[1251px] h-[666px] flex flex-col  mx-auto mt-32 ">
          <div className="w-[50%] h-full flex flex-col items-start justify-around font-semibold">
            <div className="w-full justify-around flex flex-row items-center text-[36px]">
              <p>Product photo : </p>
              <button className="w-[171px] h-[70px] bg-[#FFF0F3] rounded-[20px]">
                Add file
              </button>
            </div>
            <div className="w-full justify-around flex flex-row items-center text-[36px]">
              <p>Product Name : </p>
              <input
                type="text"
                className="w-[230px] h-[70px] bg-[#FFF0F3] rounded-[20px]"
              />
            </div>
            <div className="w-full justify-around flex flex-row items-center text-[36px]">
              <p>About product : </p>
              <input
                type="text"
                className="w-[230px] h-[70px] bg-[#FFF0F3] rounded-[20px]"
              />
            </div>
            <div className="w-full justify-around flex flex-row items-center text-[36px]">
              <p>price product : </p>
              <input
                type="text"
                className="w-[230px] h-[70px] bg-[#FFF0F3] rounded-[20px]"
              />
            </div>
            <div className="w-full justify-around flex flex-row items-center text-[36px]">
              <p>Product discount : </p>
              <input
                type="text"
                className="w-[230px] h-[70px] bg-[#FFF0F3] rounded-[20px]"
              />
            </div>
            <div className="w-full justify-around flex flex-row items-center text-[36px]">
              <p>Product brand : </p>
              <input
                type="text"
                className="w-[230px] h-[70px] bg-[#FFF0F3] rounded-[20px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seller_product;

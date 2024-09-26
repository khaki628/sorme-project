import Header from "../components/header";
import Aside from "../components/seller_aside";

const Seller_setting = () => {
  return (
    <div className="w-full h-screen ">
      <Header />
      <div className="w-full h-full flex flex-row ">
        <Aside
          Dashboard=""
          product=""
          setting=" flex flex-row items-center bg-[url('/src/assets/svg/sidepicker_icon.svg')] text-[#F29AA7] bg-no-repeat "
        />
        <div className="w-[1251px] h-[666px] flex flex-col items-center justify-around rounded-[20px] bg-[#FFF0F3] mx-auto mt-32 ">
          <form
            action="submit"
            className="w-[1193px] h-[549px] flex flex-wrap justify-between bg-white rounded-[20px]"
          >
            <div className="w-[50%] h-[80%] flex flex-col items-center justify-around">
              <div className="flex flex-row items-center text-[36px]">
                <p>Add profile :</p>
                <button className="w-[171px] h-[70px] bg-[#FFF0F3] rounded-[20px]">
                  Add file
                </button>
              </div>
              <div className="flex flex-row items-center text-[36px]">
                <p>full name :</p>
                <input
                  type="text"
                  className="w-[230px] h-[70px] bg-[#FFF0F3] rounded-[20px]"
                />
              </div>
              <div className="flex flex-row items-center text-[36px]">
                <p>Date of birth :</p>
                <input
                  type="text"
                  className="w-[230px] h-[70px] bg-[#FFF0F3] rounded-[20px]"
                />
              </div>
            </div>
            <div className="w-[50%] h-[80%] flex flex-col items-center justify-around">
              <div className="flex flex-row items-center text-[36px]">
                <p>Current password :</p>
                <input
                  type="text"
                  className="w-[230px] h-[70px] bg-[#FFF0F3] rounded-[20px]"
                />
              </div>
              <div className="flex flex-row items-center text-[36px]">
                <p>New password :</p>
                <input
                  type="text"
                  className="w-[230px] h-[70px] bg-[#FFF0F3] rounded-[20px]"
                />
              </div>
              <div className="flex flex-row items-center text-[36px]">
                <p>Confirm password :</p>
                <input
                  type="text"
                  className="w-[230px] h-[70px] bg-[#FFF0F3] rounded-[20px]"
                />
              </div>
            </div>
            <div className="w-[805px] h-[70px] flex flex-row items-center justify-between text-[36px] m-2 ">
              <p>Address :</p>
              <input
                type="text"
                className="w-[630px] h-[70px] bg-[#FFF0F3] rounded-[20px]"
              />
            </div>
            <button className="w-[160px] h-[70px] text-[36px] bg-[#FFF0F3] rounded-[20px] mr-14">
              confirm
            </button>
          </form>
          <button className="w-[230px] h-[70px] bg-white text-[36px] rounded-[20px]">
            log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Seller_setting;

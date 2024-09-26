import Header from "../components/header";
import Aside from "../components/costomer_aside";

const customer_support = () => {
  return (
    <div className="w-full h-screen ">
      <Header />
      <div className="w-full flex flex-row ">
        <Aside
          Dashboard=""
          Orders=""
          favorites=""
          wallet=""
          support=" flex flex-row items-center bg-[url('/src/assets/svg/sidepicker_icon.svg')] text-[#F29AA7] bg-no-repeat "
          setting=""
        />
        <div className="w-[1251px] h-[600px] flex flex-row items-center justify-around rounded-[20px] bg-[#FFF0F3] mx-auto mt-32 ">
          <div className="w-[402px] h-[533px] bg-white flex flex-col items-center rounded-[20px]">
            <p className="text-[36px] font-semibold">support ticket</p>
            <div className="w-[95%] flex flex-row justify-between items-center mt-14">
              <div className="w-[167px] h-[61px] flex justify-center items-center border-[2.5px] border-[#F29AA7] rounded-[10px] relative ">
                <p className="text-[16px] font-medium absolute bottom-12 left-4 bg-white">
                  Name
                </p>
                <input
                  type="text"
                  placeholder="Soroush Rasouli"
                  className="w-full h-full text-[24px] pl-2 font-light placeholder:text-[#C0C0C0] placeholder:font-light  rounded-[10px] focus:outline-none"
                />
              </div>
              <div className="w-[207px] h-[61px] flex justify-center items-center border-[2.5px] border-[#F29AA7] rounded-[10px] relative ">
                <p className="text-[16px] font-medium absolute bottom-12 left-4  bg-white">
                  Email
                </p>
                <input
                  type="text"
                  placeholder="admin@gmail.com"
                  className="w-full h-full text-[24px] pl-2 font-light placeholder:text-[#C0C0C0] placeholder:font-light  rounded-[10px] focus:outline-none"
                />
              </div>
            </div>
            <div className="w-[95%] h-[169px] mt-14 flex flex-col-reverse border-[2.5px] border-[#F29AA7] rounded-[10px] relative">
              <p className="text-[16px] font-normal absolute bottom-[155px] left-5 bg-white ">
                your massage
              </p>
              <textarea
                name="your_massage"
                placeholder="Hello, in my opinion..."
                id=""
                className="w-full h-[85%] focus:outline-none text-[24px] placeholder:font-light pl-2 placeholder:text-[#C0C0C0] "
              ></textarea>
            </div>
            <button className="w-[171px] h-[40px] text-white text-[32px] flex items-center justify-center bg-[#F29AA7] rounded-[23px] mt-10">
              Send
            </button>
          </div>
          <div className="w-[758px] h-[533px] flex flex-col justify-between">
            <div className="w-full h-[98px] flex flex-row items-center justify-between rounded-[20px] bg-white">
              <p className="text-[36px] font-semibold ml-5">Active ticket</p>
              <p className="text-[36px] font-semibold mr-5">10</p>
            </div>
            <div className="w-full h-[425px] flex flex-col items-center bg-white rounded-[20px]">
              <div className="w-[85%] h-[100px] flex flex-row items-center justify-between text-[40px] font-semibold">
                <p>Title</p>
                <p>Date</p>
                <p>Condition </p>
              </div>
              <div className="w-[85%] h-[100px] flex flex-row items-center justify-between text-[40px] border-t border-black ">
                <p>cashback</p>
                <p>1402/2/26</p>
                <p>active</p>
              </div>
              <div className="w-[85%] h-[100px] flex flex-row items-center justify-between text-[40px] border-t border-black ">
                <p>cashback</p>
                <p>1402/2/26</p>
                <p>active</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default customer_support;

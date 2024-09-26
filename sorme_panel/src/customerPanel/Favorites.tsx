import Header from "../components/header";
import Aside from "../components/costomer_aside";

const Customer_Favorites = () => {
  return (
    <div className="w-full h-screen ">
      <Header />
      <div className="w-full flex flex-row ">
        <Aside
          Dashboard=""
          Orders=""
          favorites={
            " flex flex-row items-center bg-[url('/src/assets/svg/sidepicker_icon.svg')] text-[#F29AA7] bg-no-repeat"
          }
          wallet=""
          support=""
          setting=""
        />
        <div className="w-[1200px] h-[550px]  flex flex-wrap justify-around mx-auto mt-32">
          <div className="w-[513px] h-[178px] bg-[#FFF0F3] rounded-[20px] flex flex-row items-center justify-around">
            <img src="/src/assets/img/product_cream.png" alt="product" />
            <p className="text-[28px] w-[260px]">
              Estee Lauder double wear powder cream
            </p>
            <div className="h-[90%] flex flex-col justify-between">
              <img
                src="/src/assets/svg/heart.svg"
                alt="heart-icon"
                className="w-[50px] h-[50px] p-[4px] rounded-[14px] bg-white"
              />
              <img
                src="/src/assets/svg/aye.svg"
                alt="aye-icon"
                className="w-[50px] h-[50px] p-[4px] rounded-[14px] bg-white"
              />
            </div>
          </div>
          <div className="w-[513px] h-[178px] bg-[#FFF0F3] rounded-[20px] flex flex-row items-center justify-around">
            <img src="/src/assets/img/product_cream.png" alt="product" />
            <p className="text-[28px] w-[260px]">
              Estee Lauder double wear powder cream
            </p>
            <div className="h-[90%] flex flex-col justify-between">
              <img
                src="/src/assets/svg/heart.svg"
                alt="heart-icon"
                className="w-[50px] h-[50px] p-[4px] rounded-[14px] bg-white"
              />
              <img
                src="/src/assets/svg/aye.svg"
                alt="aye-icon"
                className="w-[50px] h-[50px] p-[4px] rounded-[14px] bg-white"
              />
            </div>
          </div>
          <div className="w-[513px] h-[178px] bg-[#FFF0F3] rounded-[20px] flex flex-row items-center justify-around">
            <img src="/src/assets/img/product_cream.png" alt="product" />
            <p className="text-[28px] w-[260px]">
              Estee Lauder double wear powder cream
            </p>
            <div className="h-[90%] flex flex-col justify-between">
              <img
                src="/src/assets/svg/heart.svg"
                alt="heart-icon"
                className="w-[50px] h-[50px] p-[4px] rounded-[14px] bg-white"
              />
              <img
                src="/src/assets/svg/aye.svg"
                alt="aye-icon"
                className="w-[50px] h-[50px] p-[4px] rounded-[14px] bg-white"
              />
            </div>
          </div>
          <div className="w-[513px] h-[178px] bg-[#FFF0F3] rounded-[20px] flex flex-row items-center justify-around">
            <img src="/src/assets/img/product_cream.png" alt="product" />
            <p className="text-[28px] w-[260px]">
              Estee Lauder double wear powder cream
            </p>
            <div className="h-[90%] flex flex-col justify-between">
              <img
                src="/src/assets/svg/heart.svg"
                alt="heart-icon"
                className="w-[50px] h-[50px] p-[4px] rounded-[14px] bg-white"
              />
              <img
                src="/src/assets/svg/aye.svg"
                alt="aye-icon"
                className="w-[50px] h-[50px] p-[4px] rounded-[14px] bg-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer_Favorites;

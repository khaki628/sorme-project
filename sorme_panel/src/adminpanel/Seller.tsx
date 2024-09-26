import Header from "../components/header";
import Aside from "../components/admin_aside";

const Admin_Seller = () => {
  return (
    <div className="w-full h-screen ">
      <Header />
      <div className="w-full flex flex-row">
        <Aside
          Dashboard=""
          users=""
          seller="flex flex-row items-center bg-[url('/src/assets/svg/sidepicker_icon.svg')] text-[#F29AA7] bg-no-repeat"
          Financial=""
          support=""
          setting=""
        />
        <div className="w-[1251px] h-[313px] bg-[#FFF1F3] flex flex-col items-center justify-center rounded-[17px] mx-auto mt-32">
          <div className="w-[1181px] h-[103px] text-[40px] font-semibold flex flex-row items-center justify-between ">
            <p>User Name</p>
            <p>registery date</p>
            <p>email address</p>
            <p>delete</p>
          </div>
          <div className="w-[1181px] h-[103px] text-[40px] font-semibold flex flex-row items-center justify-between border-t-[2px] border-black ">
            <p>Hardy</p>
            <p>2022/02/01</p>
            <p>vbbb@gmail.com</p>
            <button className="w-[57px] h-[57px] bg-white rounded-lg">
              <img src="/src/assets/svg/close-x-icon.svg" alt="close-icon" />
            </button>
          </div>
          <div className="w-[1181px] h-[103px] text-[40px] font-semibold flex flex-row items-center justify-between border-t-[2px] border-black ">
            <p>Hardy</p>
            <p>2022/02/01</p>
            <p>vbbb@gmail.com</p>
            <button className="w-[57px] h-[57px] bg-white rounded-lg">
              <img src="/src/assets/svg/close-x-icon.svg" alt="close-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin_Seller;

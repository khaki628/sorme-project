import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="w-full h-[83px] flex flex-row justify-between items-center shadow-lg ">
      <img
        src="/src/assets/svg/logo_icon.svg"
        alt="logo-icon"
        className="w-[177px] h-[40px] ml-14"
      />
      <div className="flex flex-row-reverse ">
        <button className="relative w-[45px] h-[40px] mr-14  bg-[#ECECEC] flex items-center justify-center rounded-[4px]">
          <img
            src="/src/assets/svg/card-icon.svg"
            alt="card-icon"
            className="relative"
          />

          <p className="absolute px-2 text-white text-[20px] bg-[#F29AA7] rounded-full bottom-6 right-7">
            0
          </p>
        </button>
        {/* line ----- */}
        <hr className="h-[33px] w-[2px] bg-black  mr-5 ml-5" />
        {/* sign-up-btn --- */}
        <Link to={"/"}>
          <button className="flex flex-row-reverse justify-center items-center h-[40px] w-[184px] rounded-[6px] border border-black ">
            <img src="/src/assets/svg/user-icon.svg" alt="user-icon" />
            <p className="text-[20px] font-semibold">Sign In / SingUp</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;

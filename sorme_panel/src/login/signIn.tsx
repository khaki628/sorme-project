import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <main className="w-full h-screen flex items-center justify-center">
      <div className="w-[878px] h-[878px] bg-[#F29AA7] flex flex-col items-center rounded-[50px] ">
        <div className="w-full h-[122px] flex flex-row items-center justify-between bg-[url('/src/assets/svg/left-tag-icon.svg')] bg-no-repeat mt-14">
          <p className="text-white text-[48px] font-semibold ml-16">
            Sign In / Sign Up
          </p>
          <img
            src="/src/assets/svg/white_logo.svg"
            alt="logo-icon"
            className="mr-14"
          />
        </div>
        <p className="text-white text-[45px] font-semibold">
          Enter username and password
        </p>
        <div className="w-[771px] h-[104px] flex flex-row items-center border-[7px] rounded-[7px] border-white relative mt-16">
          <p className="text-[43px] w-[197px] bg-[#F29AA7] text-white font-semibold absolute bottom-16 left-4 ">
            username
          </p>
          <input
            type="text"
            className="w-[650px] h-full bg-[#F29AA7] text-[36px] text-white placeholder:text-white outline-none pl-4"
            placeholder="Hardy.Oppenh@gmail.com"
          />
          <img
            src="/src/assets/svg/white-user-icon.svg"
            alt=""
            className="w-[78px]"
          />
        </div>
        <div className="w-[771px] h-[104px] flex flex-row items-center border-[7px] rounded-[7px] border-white relative mt-12">
          <p className="text-[43px] w-[197px] bg-[#F29AA7] text-white font-semibold absolute bottom-16 left-4 ">
            password
          </p>
          <input
            type="password"
            className="w-[650px] h-full bg-[#F29AA7] text-[36px] text-white placeholder:text-white outline-none pl-4"
            placeholder="**********"
          />
          <img
            src="/src/assets/svg/hide-icon.svg"
            alt=""
            className="w-[78px]"
          />
        </div>
        <div className="w-[771px] h-[104px] flex flex-row items-center justify-between mt-14">
          <Link to={"/customer/dashboard"}>
            <button className="w-[366px] h-[100px] bg-white text-[#F29AA7] text-[44px] font-bold rounded-[10px]">
              Login to account
            </button>
          </Link>
          <Link to={"/forget-pass"}>
            <button className="w-[366px] h-[100px] bg-[#F29AA7] text-white text-[44px] font-bold rounded-[10px]">
              forgot password
            </button>
          </Link>
        </div>
        <hr className="w-[771px] border border-white border-dashed my-6" />
        <Link to={"/sign-up"}>
          <p className="text-[48px] text-white font-bold">Sing In</p>
        </Link>
      </div>
    </main>
  );
};

export default SignIn;

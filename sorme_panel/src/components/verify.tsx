import { useState } from "react";
import { Link } from "react-router-dom";
import CountdownTimer from "./verify_Timer";

const Verify = () => {
  const [Step, setStep] = useState(false);
  const creatacc = () => {
    setStep(true);
  };
  if (Step === false) {
    return (
      <>
        <div className="w-[771px] h-[104px] flex flex-row items-center border-[7px] rounded-[7px] border-white relative mt-8">
          <p className="text-[43px]  bg-[#F29AA7] text-white font-semibold absolute bottom-16 left-4 ">
            username
          </p>
          <input
            type="text"
            className="w-[650px] h-full bg-[#F29AA7] text-[36px] text-white placeholder:text-white outline-none pl-4"
            placeholder="Hardy.Oppenh"
          />
          <img
            src="/src/assets/svg/white-user-icon.svg"
            alt=""
            className="w-[78px]"
          />
        </div>
        <div className="w-[771px] h-[104px] flex flex-row items-center border-[7px] rounded-[7px] border-white relative mt-8">
          <p className="text-[43px] bg-[#F29AA7] text-white font-semibold absolute bottom-16 left-4 ">
            Email Address
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
        <div className="w-[771px] h-[104px] flex flex-row items-center border-[7px] rounded-[7px] border-white relative mt-8">
          <p className="text-[43px]  bg-[#F29AA7] text-white font-semibold absolute bottom-16 left-4 ">
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
        <button
          onClick={creatacc}
          className="w-[771px] h-[100px] bg-white text-[#F29AA7] text-[44px] font-bold rounded-[10px] mt-8"
        >
          Create an account
        </button>
        <hr className="w-[771px] border border-white border-dashed my-6" />
        <Link to={"/"}>
          <p className="text-[48px] text-white font-bold">Sing In</p>
        </Link>
      </>
    );
  } else {
    return (
      <>
        <p className="w-[85%] text-start text-white text-[48px] font-semibold ">
          Enter the code sent
        </p>
        <form action="" method="post" className="w-full mt-32">
          <div className="flex flex-col space-y-16">
            <div className="flex flex-row items-center justify-around mx-auto w-[90%] ">
              <div className="w-[158px] h-[158px] ">
                <input
                  className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-[48px] bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                  type="text"
                  name=""
                  id=""
                ></input>
              </div>
              <div className="w-[158px] h-[158px] ">
                <input
                  className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-[48px] bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                  type="text"
                  name=""
                  id=""
                ></input>
              </div>
              <div className="w-[158px] h-[158px] ">
                <input
                  className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-[48px] bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                  type="text"
                  name=""
                  id=""
                ></input>
              </div>
              <div className="w-[158px] h-[158px] ">
                <input
                  className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-[48px] bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                  type="text"
                  name=""
                  id=""
                ></input>
              </div>
            </div>
          </div>
        </form>
        <div className="w-[85%] flex flex-row items-center mt-10">
          <p className="text-[48px] text-white ">Until resend:</p>
          <CountdownTimer />
        </div>
        <Link to={"/customer/dashboard"}>
          <p className="text-[44px] text-white font-bold mt-10">Confirm </p>
        </Link>
      </>
    );
  }
};

export default Verify;
{
}

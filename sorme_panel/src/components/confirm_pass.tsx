import { useState } from "react";
import CountdownTimer from "../components/verify_Timer";
import { Link } from "react-router-dom";

const Confirm_pass = () => {
  const [Confirm, setConfirm] = useState(false);

  const submit = () => {
    setConfirm(true);
  };

  if (Confirm === false) {
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
            <button
              onClick={submit}
              className="text-[44px] text-white font-bold mt-10"
            >
              Confirm
            </button>
          </>
        </div>
      </main>
    );
  } else {
    return (
      <main className="w-full h-screen flex items-center justify-center">
        <div className="w-[878px] h-[730px] bg-[#F29AA7] flex flex-col items-center rounded-[50px] ">
          <div className="w-full h-[122px] flex flex-row items-center justify-between bg-[url('/src/assets/svg/left-tag-icon.svg')] bg-no-repeat mt-14">
            <p className="text-white text-[48px] font-semibold ml-16">
              forget password
            </p>
            <img
              src="/src/assets/svg/white_logo.svg"
              alt="logo-icon"
              className="mr-14"
            />
          </div>
          <div className="w-[771px] h-[104px] flex flex-row items-center border-[7px] rounded-[7px] border-white relative mt-12">
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
          <div className="w-[771px] h-[104px] flex flex-row items-center border-[7px] rounded-[7px] border-white relative mt-12">
            <p className="text-[43px]  bg-[#F29AA7] text-white font-semibold absolute bottom-16 left-4 ">
              Confirm password
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
          <Link to={"/customer/dashboard"}>
            <button className="w-[771px] h-[100px] bg-white text-[#F29AA7] text-[44px] font-bold rounded-[10px] mt-12">
              Confirm
            </button>
          </Link>
        </div>
      </main>
    );
  }
};

export default Confirm_pass;

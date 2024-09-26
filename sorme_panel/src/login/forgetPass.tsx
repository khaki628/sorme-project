import { useState } from "react";
import Confirm_pass from "../components/confirm_pass";

const ForgetPass = () => {
  const [Forget, setForget] = useState(false);

  const submit = () => {
    setForget(true);
  };

  if (Forget === false) {
    return (
      <main className="w-full h-screen flex items-center justify-center">
        <div className="w-[878px] h-[578px] bg-[#F29AA7] flex flex-col items-center rounded-[50px] ">
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
          <button
            onClick={submit}
            className="w-[771px] h-[100px] bg-white text-[#F29AA7] text-[44px] font-bold rounded-[10px] mt-12"
          >
            confirm
          </button>
        </div>
      </main>
    );
  } else {
    return <Confirm_pass />;
  }
};

export default ForgetPass;

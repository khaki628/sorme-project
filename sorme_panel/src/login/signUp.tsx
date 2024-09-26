import Verify from "../components/verify";
const SignUp = () => {
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
        <Verify />
      </div>
    </main>
  );
};

export default SignUp;

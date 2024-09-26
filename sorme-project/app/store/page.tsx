import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";
import NextBreadcrumb from "../components/NextBreadcrumb";

const Page = () => {
  return (
    <div>
      <p className="text-semibold text-48">
        <NextBreadcrumb
          homeElement={"Home"}
          separator={
            <img
              src="/svg/rightarow-icon.svg"
              alt="right-arrow-con"
              className="w-[24px]"
            />
          }
          activeClasses="text-[#0000008A] text-[32px]"
          containerClasses="w-[89%] mx-auto flex flex-row items-center py-5  "
          listClasses="hover:underline mx-2 font-bold"
          capitalizeLinks
        />
      </p>
      <p>
        <Link href={"/store/SkinCare"}>Skin Care</Link>
      </p>
    </div>
  );
};

export default Page;

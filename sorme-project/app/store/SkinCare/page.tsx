import Link from "next/link";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import NextBreadcrumb from "@/app/components/NextBreadcrumb";
import Store_articel from "./storeArticle/Store_articel";

const Page = () => {
  return (
    <main className="w-full h-screen flex flex-col">
      <Header />
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
      <Store_articel />
      <Footer />
    </main>
  );
};

export default Page;

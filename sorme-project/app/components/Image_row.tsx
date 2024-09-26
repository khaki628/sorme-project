import Image from "next/image";
import React from "react";

const Image_row = () => {
  return (
    <div className="w-[90%] h-[328px] mt-20 mx-auto  flex flex-row justify-between">
      <Image
        src={"/img/picture1.jpg"}
        width={359}
        height={328}
        alt="articel-picture"
        className=" rounded-[2.5rem]"
      />
      <Image
        src={"/img/picture2.jpg"}
        width={359}
        height={328}
        alt="articel-picture"
        className=" rounded-[2.5rem]"
      />
      <Image
        src={"/img/picture3.jpg"}
        width={359}
        height={328}
        alt="articel-picture"
        className=" rounded-[2.5rem]"
      />
      <Image
        src={"/img/picture4.jpg"}
        width={359}
        height={328}
        alt="articel-picture"
        className=" rounded-[2.5rem]"
      />
    </div>
  );
};

export default Image_row;

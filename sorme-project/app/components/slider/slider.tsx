"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./style.css";

import { Autoplay, Navigation, Scrollbar } from "swiper/modules";
import Link from "next/link";

const Slider = () => {
  return (
    <div className="h-[638px] w-full mt-24  mx-auto  ">
      <Swiper
        navigation={true}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Scrollbar, Autoplay]}
        scrollbar={{ draggable: true }}
        className="mySwiper "
      >
        <SwiperSlide>
          <Link href={"/store/SkinCare"}>
            <Image
              src={"/img/slide2.jpg"}
              width={1678}
              height={638}
              alt="slide2-img"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/store/SkinCare"}>
            <Image
              src={"/img/slide1.jpg"}
              width={1678}
              height={638}
              alt="slide1-img"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/store/SkinCare"}>
            <Image
              src={"/img/slide3.jpg"}
              width={1678}
              height={638}
              alt="slide3-img"
            />
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;

"use client";

import Image from "next/image";
import Link from "next/link";

interface CTA {
  props: any;
}

const CTA = ({ props }: CTA) => {
  return props?.map((item: any) => (
    <div className="relative h-[60vh] w-full text-white flex justify-center">
      <div className="absolute z-10 text-center gap-10 m-auto w-full h-full flex justify-center items-center flex-col">
        <div className="mb-2">
          {!item.sub_under_title && (
            <h3 className="text-[16px] mb-5 text-[#CFEDC6]">{item.subtitle}</h3>
          )}
          <h2 className="text-[35px] max-w-[40%] mx-auto">{item.title}</h2>
          {item.sub_under_title && (
            <h3 className="text-[16px] mt-0 text-[#CFEDC6]">{item.subtitle}</h3>
          )}
          {item.content && (
            <p className="max-w-[40%] mx-auto p-5 text-[18px]">
              {item.content}
            </p>
          )}
        </div>
        <Link href="" className="button border border-white rounded-xl">
          {item.btn}
        </Link>
      </div>
      <div
        className={`${item.two_images ? "w-1/2" : "w-full"} h-full relative`}
      >
        <Image
          src={item.bg_image.filename}
          alt={item.bg_image.alt}
          fill
          className={`object-cover left-0`}
        />
      </div>
      {item.two_images && (
        <div className="w-1/2 h-full relative">
          <Image
            src={item.bg_image_2.filename}
            alt={item.bg_image_2.alt}
            fill
            className="object-cover w-1/2 left-0"
          />
        </div>
      )}

      <div className="bg-black opacity-30 absolute h-full w-full" />
    </div>
  ));
};

export default CTA;

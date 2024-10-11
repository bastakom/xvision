"use client";

import Image from "next/image";
import Link from "next/link";

interface CTA {
  props: any;
}

const CTA = ({ props }: CTA) => {
  return props.CTA.map((item: any) => (
    <div className="relative h-[60vh] w-full text-white flex flex-col items-center justify-center">
      <div className="absolute z-10 text-center gap-10">
        <div className="mb-10">
          {!item.sub_under_title && (
            <h3 className="text-[16px] mb-5 text-[#CFEDC6]">{item.subtitle}</h3>
          )}
          <h2 className="text-[35px] max-w-[40%] mx-auto">{item.title}</h2>
          {item.sub_under_title && (
            <h3 className="text-[16px] mt-5 text-[#CFEDC6]">{item.subtitle}</h3>
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
      <Image
        src={item.bg_image.filename}
        alt={item.bg_image.alt}
        fill
        className="object-cover"
      />
      <div className="bg-black opacity-30 absolute h-full w-full" />
    </div>
  ));
};

export default CTA;

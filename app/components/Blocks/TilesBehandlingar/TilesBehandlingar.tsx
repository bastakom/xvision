"use client";

import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  props?: any;
  operations?: any;
}

export default function TilesBehandlingar({ props, operations }: Props) {
  return (
    <section
      className={`${
        props?.light_color
          ? "bg-[#F5F7F3] text-[#000000]"
          : "bg-[#1D383F] text-white"
      } py-14 lg:py-24 px-4`}
    >
      <div className="max-w-[100%] lg:max-w-[80%] mx-auto">
        <div className="text-left lg:text-center mb-5 lg:mb-12">
          <h4
            className={`text-sm uppercase tracking-wider mb-6 ${
              props?.light_color ? "" : "text-[#CFEDC6]"
            }`}
          >
            {props?.usp_title}
          </h4>
          <h2 className="text-[35px] font-medium mb-4">{props?.title}</h2>
          <p className="max-w-2xl mx-auto">{props?.text}</p>
        </div>
        <div className="grid mb-2 grid-cols-1 lg:grid-cols-3 items-center justify-center gap-5 text-white">
          {operations?.map((op: any) => (
            <Link
              href={`/${op.full_slug}`}
              className={`lg:p-10 min-h-[390px] flex flex-col justify-center rounded-[37px] text-center mb-2 lg:mb-0 lg:m-2 bg-[#172D32] transition-all hover:bg-[#A9C1BD] hover:cursor-pointer`}
              key={op.content._uid}
            >
              {op.content?.icon_img?.filename && (
                <Image
                  src={`${op.content?.icon_img?.filename}`}
                  width={34}
                  height={50}
                  className="mx-auto my-10"
                  alt="icon"
                />
              )}
              <h3 className="text-xl font-semibold mb-4 uppercase">
                {op.name}
              </h3>
              <p className="mb-4 max-w-[80%] mx-auto m-0 ">
                {op.content.short_description
                  ? op.content.short_description
                  : " För dig under 40 år. Särskilt lämplig för dig med tunna hornhinnor."}
              </p>
              <span className="hover:text-white p-0 underline underline-offset-8">
                Läs mer
              </span>
            </Link>
          ))}
        </div>
        <div className="flex justify-center">
          <button
            className={`text-center mt-10 lg:mt-20 py-2 px-10 border font-normal ${
              props?.light_color ? "border-[#1D383F]" : "border-white"
            } rounded-[23px]`}
          >
            {props.btn_threatment}
          </button>
        </div>
      </div>
    </section>
  );
}

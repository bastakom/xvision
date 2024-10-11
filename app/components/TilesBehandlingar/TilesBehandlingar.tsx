"use client";

import { Eye } from "lucide-react";
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
          ? "bg-[#CDD8C3] text-[#000000]"
          : "bg-[#1D383F] text-white"
      } py-24 px-4`}
    >
      <div className="max-w-[80%] mx-auto">
        <div className="text-center mb-12">
          <h2
            className={`text-sm uppercase tracking-wider mb-6 ${
              props?.light_color ? "" : "text-[#CFEDC6]"
            }`}
          >
            {props?.usp_title}
          </h2>
          <h1 className="text-4xl font-semibold mb-4">{props?.title}</h1>
          <p className="max-w-2xl mx-auto">{props?.text}</p>
        </div>
        <div className="grid mb-2 grid-cols-3 items-center justify-center text-white">
          {operations?.map((op: any) => (
            <Link
              href={`/${op.full_slug}`}
              className={`p-10 min-h-[320px] flex flex-col justify-center rounded-[37px] text-center m-2 bg-[#172D32] transition-all hover:bg-[#A9C1BD] hover:cursor-pointer`}
              key={op.content._uid}
            >
              <Eye className="w-10 h-10 mb-5 text-teal-200 mx-auto m-0" />
              <h3 className="text-xl font-semibold mb-4">{op.name}</h3>
              <p className="mb-4 max-w-[80%] mx-auto m-0 ">
                {op.content.description
                  ? op.content.description
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
            className={`text-center mt-20 py-2 px-10 border ${
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

"use client";

import Link from "next/link";
import { IoMdCheckmark } from "react-icons/io";
import { render } from "storyblok-rich-text-react-renderer";

const PrisBlock = ({ props }: any) => {
  return (
    <div className="my-10 lg:my-20 px-5 lg:px-0">
      <h2 className="text-center pb-10 text-[35px]">{props.title}</h2>
      <div className="flex flex-wrap justify-center gap-5 text-center">
        {props.pris.map((item: any, index: number) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-5 bg-[#1D383F] px-14 py-20 text-white rounded-[37px] w-full lg:w-1/4 2xl:w-1/5"
            >
              <h3 className="text-[22px]">{item.title}</h3>
              <div className="mx-auto">
                {item.uspar.map((usp: any, index: number) => (
                  <span
                    key={index}
                    className="text-[16px] text-left flex gap-2 items-center"
                  >
                    <IoMdCheckmark color="#CFEDC6" /> {render(usp.title)}
                  </span>
                ))}
              </div>
              <div className="h-[1px] w-full bg-[#CFEDC6]" />
              <div className="flex flex-col">
                <span className="line-through text-[20px]">
                  {item.rea && item.rea_pris}
                </span>
                {item.otherprice && (
                  <span className="text-[16px]">
                    {render(item.otherprice)}
                  </span>
                )}
                <span className="text-[35px]">{item.pris}</span>
                <span className="max-w-[250px] mt-2 text-[12px]">
                  Dela upp din betalning räntefritt i 2 år eller till en
                  månadskostnad som passar dig.
                </span>
              </div>
              <Link
                className="button mx-auto max-w-[200px] bg-[#CFEDC6] text-black mt-5"
                href="/boka-konsultation"
              >
                Boka konsultation
              </Link>
              <div className="flex flex-col gap-2">
                {item.link.length < 0 ? (
                  item.link.map((ahref: any, index: number) => (
                    <Link
                      key={index}
                      href={`/delbetalning`}
                      className="underline underline-offset-2"
                    >
                      {ahref.title}
                    </Link>
                  ))
                ) : (
                  <>
                    <Link
                      href={`/ogonoperationer/prk-lasek`}
                      className="underline underline-offset-2"
                    >
                      Läs mer om {item.title}
                    </Link>
                    <Link
                      href={`/delbetalning`}
                      className="underline underline-offset-2"
                    >
                      Läs mer om delbetalning
                    </Link>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PrisBlock;

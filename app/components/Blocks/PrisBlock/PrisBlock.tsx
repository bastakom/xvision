"use client";

import Link from "next/link";
import { render } from "storyblok-rich-text-react-renderer";

const PrisBlock = ({ props }: any) => {
  return (
    <div className=" my-20">
      <h2 className="text-center pb-10 text-[35px]">{props.title}</h2>
      <div className="flex flex-wrap justify-center gap-5 text-center">
        {props.pris.map((item: any) => {
          return (
            <div className="flex flex-col gap-5 bg-[#1D383F] px-14 py-20 text-white rounded-[37px] w-1/5">
              <h3 className="text-[22px]">{item.title}</h3>
              <div className="mx-auto">
                {item.uspar.map((usp: any) => (
                  <span className="text-[16px] text-left">
                    {render(usp.title)}
                  </span>
                ))}
              </div>
              <div className="h-[1px] w-full bg-[#CFEDC6]" />
              <div className="flex flex-col">
                <span className="line-through text-[20px]">
                  {item.rea && item.rea_pris}
                </span>
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
                Boka Konsultation
              </Link>
              <div className="flex flex-col gap-2">
                {item.link.length > 0 ? (
                  item.link.map((ahref: any) => (
                    <Link
                      href={`/${ahref.link.cached_url}`}
                      className="underline underline-offset-2"
                    >
                      {ahref.title}
                    </Link>
                  ))
                ) : (
                  <>
                    <Link href={`/ogonoperationer/prk-lasek`} className="underline underline-offset-2">
                      Läs mer om PRK-LASEK
                    </Link>
                    <Link href={`/delbetalning`} className="underline underline-offset-2">
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

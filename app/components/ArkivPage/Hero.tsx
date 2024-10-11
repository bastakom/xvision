"use client";

import Link from "next/link";
import scss from "./arkivpage.module.scss";

interface Hero {
  title?: string;
  content?: string;
  bg?: string;
  btns?: any;
  subtitle?: string;
}

const Hero = ({ title, content, bg, btns, subtitle }: Hero) => {
  return (
  <div className={`${bg ? `bg-[${bg}]` : 'bg-[#1D383F]'} min-h-[50vh] flex items-center`}>
      <div className="max-w-[50%] text-center m-auto flex flex-col gap-10 text-white">
        {subtitle && <h2 className="mt-14">{subtitle}</h2>}
        <h1>{title}</h1>
        <p>{content}</p>
        <div className={scss.hero_btns}>
          {btns?.map((el: any, index: number) => {
            return (
              <Link
                key={index}
                href=""
                className={`button ${
                  index === 0 ? scss.button : "border-white border"
                }`}
              >
                {el?.link_title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;

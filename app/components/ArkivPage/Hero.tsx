"use client";

import Link from "next/link";
import scss from "./arkivpage.module.scss";

interface Hero {
  data: {
    bg: string;
    title_hero: string;
    content_text: string;
    buttons: [
      {
        link: {
          url: string;
        };
        link_title: string;
      }
    ];
  };
}

const Hero = ({ data }: Hero) => {
  return (
    <div className={`bg-[${data.bg}] min-h-[50vh] flex items-center`}>
      <div className="max-w-[50%] text-center m-auto flex flex-col gap-10 text-white">
        <h1>{data.title_hero}</h1>
        <p>{data.content_text}</p>
        <div className={scss.hero_btns}>
          {data.buttons.map((el: any, index: number) => {
            return (
              <Link
                key={index}
                href=""
                className={`button ${index === 0 ? scss.button : "border-white border"}`}
              >
                {el.link_title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;

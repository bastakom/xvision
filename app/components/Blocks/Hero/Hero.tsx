"use client";

import Image from "next/image";
import { render } from "storyblok-rich-text-react-renderer";
import Link from "next/link";
import { GoDotFill } from "react-icons/go";

interface HeroProps {
  title?: string;
  text?: string;
  img?: any;
  buttons?: any;
  uspar?: any;
  no_image_hero?: boolean;
  subtitle?: string;
  text_center?: any;
}

const Hero = ({
  buttons,
  img,
  text,
  title,
  uspar,
  subtitle,
  no_image_hero,
  text_center,
}: HeroProps) => {
  return (
    <section
      className={`${
        no_image_hero ? "bg-[#1D383F]" : "h-[80vh] mt-20"
      } relative overflow-hidden`}
    >
      {!no_image_hero && (
        <Image
          src={img?.filename}
          fill
          alt={img?.alt}
          className="object-cover object-top"
        />
      )}
      <div className="h-full w-full absolute top-0 bg-[#1D383F] opacity-30" />

      <div
        className={` ${
          !no_image_hero ? "mx-auto container px-4" : ""
        } h-full flex flex-col justify-between`}
      >
        <div
          className={`flex flex-col lg:flex-row items-center  ${
            no_image_hero
              ? "justify-center text-center pt-56 pb-24"
              : `${
                  text_center ? "text-center justify-center" : "justify-between"
                } pt-20 lg:pt-0`
          }  h-full`}
        >
          <div className="lg:w-1/2 z-10 text-white">
            {subtitle && (
              <h2 className="text-[16px] mb-5 text-[#CFEDC6]">{subtitle}</h2>
            )}
            <h1 className={`font-serif mb-4 ${!no_image_hero && "pt-14"}`}>
              {title}
            </h1>
            <p
              className={`text-lg mb-6 ${
                no_image_hero && "max-w-[80%] mx-auto"
              }`}
            >
              {text}
            </p>
            <div className="space-x-4 mt-16">
              {buttons &&
                buttons?.map((el: any, index: number) => {
                  return (
                    <Link
                      key={index}
                      href={`/${el.link.url}`}
                      className={`button ${
                        index === 0
                          ? "bg-green-200 text-black hover:bg-[#1D383F] hover:text-white button"
                          : "bg-gray-400 text-white hover:bg-gray-500 border-none button"
                      }`}
                    >
                      {el.link_title}
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>

        {uspar.length > 0 && (
          <div
            className={`bg-[#FFF8E7] ${
              no_image_hero ? "" : "rounded-3xl mb-10"
            } p-6 mt-8 lg:mt-0 z-10`}
          >
            <div className="flex justify-around text-center items-center">
              {uspar?.map((el: any) => {
                return (
                  <div
                    className="font-bold flex items-center gap-2"
                    key={el._uid}
                  >
                    <GoDotFill /> {render(el.title)}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;

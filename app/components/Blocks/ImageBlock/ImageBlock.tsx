"use client";

import Image from "next/image";
import Link from "next/link";
import { render } from "storyblok-rich-text-react-renderer";
import scss from "./imageblock.module.scss";

const ImageBlock = ({ props }: any) => {
  return (
    <div className="flex justify-center max-w-[100%] lg:max-w-[80%] m-auto">
      {!props.image_left ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center w-full gap-10 px-5 items-center my-5 lg:my-20">
          <div
            className={`flex flex-col gap-5 ${
              props?.bg &&
              "bg-[#e6ebe1] h-full lg:h-[600px] justify-center py-10 lg:py-24 px-5 lg:px-20"
            }`}
          >
            {props?.subtitle && (
              <span className="text-[16px] text-[#1d383f]">{props?.subtitle}</span>
            )}
            {props?.title && (
              <h3 className="text-[35px] leading-[45px]">{props?.title}</h3>
            )}
            {props?.content && (
              <span className={`max-w-[100%] text-[18px] ${scss.trygghet}`}>
                {render(props?.content)}
              </span>
            )}
            <div className="mt-5">
              {props?.button && props.button && (
                <Link
                  href={props?.link?.cached_url || "/"}
                  className="border-[#1D383F] border text-center button mt-5 text-[18px] hover:bg-[#1D383F] hover:text-white"
                >
                  {props.button}
                </Link>
              )}
            </div>
          </div>
          <div className="flex h-[350px] lg:h-[606px] w-[100%] relative">
            <Image
              src={props?.image?.filename}
              alt={props?.image?.alt}
              fill
              className="lg:object-contain"
            />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center w-full gap-10 px-5 items-center my-5 lg:my-20">
          {props?.image?.filename && (
            <div className="flex h-[400px] lg:h-[600px] w-[100%] relative">
              <Image
                src={props?.image?.filename}
                alt={props?.image?.alt}
                fill
                className="lg:object-contain"
              />
            </div>
          )}
          <div
            className={`flex flex-col gap-5 ${
              props?.bg &&
              "bg-[#CDD8C3] h-full lg:h-[600px] justify-center py-10 lg:py-24 px-5 lg:px-20"
            }`}
          >
            {props?.subtitle && (
              <span className="text-[16px]">{props.subtitle}</span>
            )}
            <h3 className="text-[35px] leading-[45px]">{props?.title}</h3>
            <span className={`max-w-[100%] text-[18px] ${scss.linkcontent}`}>
              {render(props?.content)}
            </span>
            {props?.button && props?.button && (
              <Link
                href={props?.link?.cached_url || "/"}
                className="border-[#1D383F] border max-w-[350px] text-center button mt-5 hover:bg-[#1D383F] hover:text-white"
              >
                {props?.button}
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageBlock;

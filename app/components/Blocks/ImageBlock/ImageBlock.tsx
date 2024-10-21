"use client";


import Image from "next/image";
import Link from "next/link";
import { render } from "storyblok-rich-text-react-renderer";
import scss from './imageblock.module.scss'

const ImageBlock = ({ props }: any) => {
  return (
    <div className="flex justify-center max-w-[80%] m-auto">
      {!props.image_left ? (
        <div className="grid grid-cols-2 justify-center w-full gap-10 px-5 items-center my-20">
          <div
            className={`flex flex-col gap-5 ${
              props?.bg &&
              "bg-[#CDD8C3] lg:h-[600px] justify-center py-24 px-20"
            }`}
          >
            {props?.subtitle && (
              <span className="text-[16px]">{props.subtitle}</span>
            )}
            <span className="text-[35px]">{render(props?.title)}</span>
            <span className={`max-w-[100%] text-[18px] ${scss.trygghet}`}>{render(props?.content)}</span>
            {props?.button && props.button && (
              <Link
                href="/"
                className="border-[#1D383F] border max-w-[350px] text-center button mt-5"
              >
                {props.button}
              </Link>
            )}
          </div>
          <div className="flex h-[606px] w-[100%] relative">
            <Image src={props?.image?.filename} alt={props?.image?.alt} fill />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 justify-center gap-14 w-full gap-10 px-5 items-center my-20">
          <div className="flex h-[650px] w-[100%] relative">
            <Image src={props?.image?.filename} alt={props?.image?.alt} fill />
          </div>
          <div
            className={`flex flex-col gap-5 ${
              props?.bg &&
              "bg-[#CDD8C3] lg:h-[600px] justify-center py-24 px-20"
            }`}
          >
            {props?.subtitle && (
              <span className="text-[16px]">{props.subtitle}</span>
            )}
            <span className="text-[35px]">{render(props?.title)}</span>
            <span className="max-w-[100%] text-[18px]">{render(props?.content)}</span>
            {props?.button && props.button && (
              <Link
                href="/"
                className="border-[#1D383F] border max-w-[350px] text-center button mt-5"
              >
                {props.button}
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageBlock;

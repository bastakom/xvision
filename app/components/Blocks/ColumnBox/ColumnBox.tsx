"use client";

import { render } from "storyblok-rich-text-react-renderer";

const ColumnBox = ({ props }: any) => {
  console.log(props);
  return (
    <div className="flex flex-wrap gap-10 container m-auto">
      {props.block.map((el: any) => {
        return (
          <div className="w-[48%] px-10 flex flex-col gap-5">
            <h2 className="text-[44px]">{el.title}</h2>
            <span className="text-[20px] flex flex-col gap-5">{render(el.text)}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ColumnBox;

"use client";

import { GoDotFill } from "react-icons/go";
import { render } from "storyblok-rich-text-react-renderer";

const Uspar = ({ props }: any) => {
  return (
    <div className="w-full p-10 bg-[#F6EEDC] flex justify-center gap-24">
      {props?.map((usp: { title: string }) => {
        return <span className="flex gap-2 text-[20px] items-center"><GoDotFill /> {render(usp.title)}</span>;
      })}
    </div>
  );
};

export default Uspar;

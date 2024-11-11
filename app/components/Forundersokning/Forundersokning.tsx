"use client"

import Form from "./Form";
import { render } from "storyblok-rich-text-react-renderer";

const Forundersokning = ({props}: any) => {
  return (
    <div className="py-24 bg-[#f0f2e9] mt-8">
      <div className="max-w-6xl text-center m-auto py-16 flex flex-col gap-5">
        <h2 className="">{props.subtitle}</h2>
        <h1 className="text-[35px] max-w-[50%] leading-[45px] m-auto">{props.title}</h1>
        <span className="max-w-4xl mx-auto open-sans">
          {render(props.content)}
        </span>
      </div>
      <Form />
    </div>
  );
};

export default Forundersokning;

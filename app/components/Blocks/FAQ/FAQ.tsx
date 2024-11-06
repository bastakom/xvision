"use client";

import Image from "next/image";

interface FAQ {
  props: any;
  title?: string
}

const FAQ = ({ props, title }: FAQ) => {
  return (
    <div className="bg-white px-5 mx-5 lg:px-8 py-20 rounded-3xl lg:max-w-[80%] lg:mx-auto border-2 border-black my-5 lg:my-24">
      <h2 className="text-2xl font-medium text-center mb-8">
        {title}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-0 lg:px-10">
        {props?.map((item: any, index: number) => (
          <div key={index} className="flex  space-x-4 py-5 lg:py-10 lg:px-5">
            <div className="flex-shrink-0">
              <Image
                src="https://a.storyblok.com/f/304820/55x55/f9892efa1d/group-1396.svg"
                alt="FAQ"
                className="lg:-mt-4 w-[40px]"
                width={55}
                height={50}
              />
            </div>
            <div>
              <h3 className="font-medium mb-2 text-[22px]">{item.title}</h3>
              <p className="text-sm text-gray-600 text-[16px]">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

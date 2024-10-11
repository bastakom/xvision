"use client";

import Image from "next/image";

interface FAQ {
  props: any;
  title?: string
}

const FAQ = ({ props, title }: FAQ) => {
  return (
    <div className="bg-white px-8 py-20 rounded-3xl max-w-[80%] mx-auto border-2 border-black my-24">
      <h2 className="text-2xl font-semibold text-center mb-8">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-10">
        {props.map((item: any, index: number) => (
          <div key={index} className="flex space-x-4 py-10 px-5">
            <div className="flex-shrink-0">
              <Image
                src="https://a.storyblok.com/f/304820/55x55/f9892efa1d/group-1396.svg"
                alt="FAQ"
                className="-mt-4"
                width={55}
                height={50}
              />
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-[22px]">{item.title}</h3>
              <p className="text-sm text-gray-600 text-[16px]">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

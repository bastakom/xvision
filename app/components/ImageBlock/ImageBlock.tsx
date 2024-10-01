"use client";

import Image from "next/image";

const ImageBlock = ({ props }: any) => {
  const { button, content, subtitle, title, image } = props;
  console.log(image);

  return (
    <div className="flex justify-center max-w-[80%] m-auto">
      <div className="grid grid-cols-2 justify-center px-5 items-center my-20">
        <div className="flex flex-col gap-5">
          <span className="text-[16px]">{subtitle}</span>
          <h2 className="text-[35px]">{title}</h2>
          <p className="max-w-[50%]">{content}</p>
        </div>

        <div className="flex h-[606px] w-[100%] relative">
          <Image
            src={image.filename}
            alt={image.alt}
            fill
           
          />
        </div>
      </div>
    </div>
  );
};

export default ImageBlock;

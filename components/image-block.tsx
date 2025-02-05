import ImageBlock from "@/app/components/Blocks/ImageBlock/ImageBlock";
import { storyblokEditable } from "@storyblok/react";

export const ImageBlockComponent = ({ blok }: any) => {
  return (
    <div {...storyblokEditable}>
      <ImageBlock props={blok} />;
    </div>
  );
};

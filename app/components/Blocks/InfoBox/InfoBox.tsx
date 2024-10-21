import Link from "next/link";
import { render } from "storyblok-rich-text-react-renderer";

interface InfoBox {
  title?: string;
  content?: any;
  link?: any;
  slug_name?: string;
}

const InfoBox = ({ title, content, link, slug_name }: InfoBox) => {
  return (
    <div className="py-32 flex items-center relative">
      <div className="flex flex-wrap px-20">
        <div className="w-1/2">
          <span className="absolute top-16 uppercase text-[16px] font-semibold">
            {slug_name}
          </span>
          <h2 className="text-[44px] max-w-[60%]">{title}</h2>
        </div>
        <div className="w-1/2 flex flex-col gap-10 pr-20 ">
          <span className="text-[18px]">{render(content)}</span>
          {link && (
            <Link href="" className="underline underline-offset-8">
              Läs mer
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default InfoBox;

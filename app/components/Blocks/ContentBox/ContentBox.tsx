import { render } from "storyblok-rich-text-react-renderer";
import scss from './contentbox.module.scss'

const ContentBox = ({ props }: any) => {
  return (
    <div className="flex bg-[#F0F0F0] max-w-[80%] mx-auto my-14 p-20">
      <div className={`text-[18px] ${scss.contentBox}`}>{render(props.content)}</div>
    </div>
  );
};

export default ContentBox;

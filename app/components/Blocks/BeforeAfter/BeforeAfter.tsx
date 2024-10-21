import { render } from "storyblok-rich-text-react-renderer";

const BeforeAfter = ({ props }: any) => {
  return (
    <div className="m-auto pt-24 pb-32 bg-[#1D383F] text-white">
      <h2 className="text-center mb-24 text-[35px]">{props.before_after_title}</h2>
      <div className="grid grid-cols-2 gap-24 max-w-[80%] mx-auto">
        <div>
          <h3 className="mb-10 text-[22px]">{props.before_title}</h3>
          <span className="text-[18px]">{render(props.before_content)}</span>
        </div>
        <div>
          <h3 className="mb-10 text-[22px]">{props.after_title}</h3>
          <span className="text-[18px]">{render(props.after_content)}</span>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfter;

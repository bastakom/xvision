import { PiWarningCircleThin } from "react-icons/pi";
import { render } from "storyblok-rich-text-react-renderer";

export const PartialPayment = ({ props }: any) => {
  return (
    <div className="flex justify-center p-4 lg:pb-16 lg:pt-0 w-[80%] lg:w-[80%] mx-auto mb-6 lg:mb-0 mt-8 lg:mt-0">
      <div className="flex flex-col items-center">
        <div>
          <PiWarningCircleThin fontSize={40} />
        </div>
        <div className="text-center">
          <h2 className="font-bold pb-2 text-[20px]">{props.payment_title}</h2>
          <div className="lg:w-[800px] partial-content">
            {render(props.payment_content)}
          </div>
        </div>
      </div>
    </div>
  );
};

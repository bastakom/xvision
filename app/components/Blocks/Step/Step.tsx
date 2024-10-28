import { ChevronRight } from "lucide-react";
import { IoIosArrowDroprightCircle } from "react-icons/io";


const Step = ({ props }: any) => {
  return (
    <div className="lg:max-w-[80%] mx-auto p-4 mb-10 lg:mb-24 mt-5 lg:mt-14">
      <h1 className="text-2xl font-bold text-center mb-2">
        {props.step_title}
      </h1>
      <p className="text-center mb-14">
        {props.step_subtitle}
      </p>
      <div className="flex flex-wrap gap-10 lg:space-x-12 justify-center">
        {props.steps.map((step: any, index: number) => (
          <div key={index} className="w-[100%] lg:w-[28%] relative">
            <div className="bg-[#e6eff0] rounded-[37px] p-8 h-[350px] text-center flex flex-col">
              <h4 className="text-lg font-bold mb-2">STEG {index + 1}</h4>
              <h5 className="text-xl font-medium mb-3">{step.title}</h5>
              <p className="text-sm flex-grow">{step.content}</p>
            </div>
            {index < props.steps.length - 1 && index !== 2 && (
              <div className="absolute top-1/2 -right-[70px] transform -translate-y-1/2 hidden lg:block">
                <IoIosArrowDroprightCircle fontSize={50} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Step;

import React from 'react';
import { render } from 'storyblok-rich-text-react-renderer';

const ProgressBar = ({ current, total, showPercentage = true, height = 20, color = '#3b82f6', backgroundColor = '#fff', animated = true }) => {
  const safeTotal = total || 1;
  const safeCurrent = current || 0;

  const percentage = Math.min(Math.max((safeCurrent / safeTotal) * 100, 0), 100);

  return (
    <div className="w-full">
      <div
        className="relative rounded-full overflow-hidden"
        style={{
          height: `30px`,
          backgroundColor: backgroundColor
        }}
      >
        <div
          className={`h-full rounded-full transition-all duration-500 ease-out ${animated ? 'transform' : ''}`}
          style={{
            width: `${percentage}%`,
            backgroundColor: color
          }}
        />
        {showPercentage && (
          <div className="absolute inset-0 flex items-center justify-center text-lg font-medium text-[#32373e]">
            {Math.round(percentage)}%
          </div>
        )}
      </div>
    </div>
  );
};

export const Progress = ({ blok }: any) => {
  // Parse values safely with fallbacks
  const currentValue = parseInt(blok?.current_value) || 0;
  const maxValue = parseInt(blok?.max_value) || 100;

  return (
    <div className="container-section mx-24 px-8 space-y-8">
      <div className="text-center">
        <h2 className="text-2xl">{blok?.title || 'Progress Bar'}</h2>
        {blok.content &&
          <span className="text-gray-600">{render(blok?.content)}</span>
        }
      </div>

      <div className="bg-[#cfedc6] p-6 rounded-lg shadow-sm border space-y-4">
        <div className="space-y-4">
          <div>
            <div className="flex justify-end items-center mb-2">
              <span className="text-lg text-gray-700">
                {currentValue} / {maxValue}
              </span>
            </div>
            <ProgressBar
              current={currentValue}
              total={maxValue}
              color={blok?.color || "#23373e"}
              height={parseInt(blok?.height) || 18}
              showPercentage={blok?.show_percentage !== false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

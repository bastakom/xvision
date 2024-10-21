"use client";

import Image from "next/image";
import React from "react";

export default function PartnerLogos({ images }: any) {
  const repeatedImages = [];
  while (repeatedImages.length < 20) {
    repeatedImages.push(...images);
  }

  return (
    <section className="bg-[#e0e8e0] py-16 mb-10 overflow-hidden">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-10">
          VÅRA SAMARBETSPARTNERS
        </h2>
        <div className="relative">
          <div className="flex space-x-12 animate-scroll">
            {repeatedImages.map((item: any, index: number) => (
              <Image
                key={index}
                src={item.filename}
                width={150}
                height={500}
                alt={item.alt}
              />
            ))}
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
          display: flex;
          width: calc(200% + 12px);
        }
      `}</style>
    </section>
  );
}

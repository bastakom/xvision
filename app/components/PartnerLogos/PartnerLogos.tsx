'use client'

import React from 'react'

const logos = [
  { name: 'Rayner', style: 'font-serif' },
  { name: 'SULCOflex', style: 'font-sans' },
  { name: 'Rayner', style: 'font-serif' },
  { name: 'SULCOflex', style: 'font-sans' },
  { name: 'Rayner', style: 'font-serif' },
  { name: 'SULCOflex', style: 'font-sans' },
  { name: 'Rayner', style: 'font-serif' },
  { name: 'SULCOflex', style: 'font-sans' },
]

export default function PartnerLogos() {
  return (
    <section className="bg-[#e0e8e0] py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">
          VÅRA SAMARBETSPARTNERS
        </h2>
        <div className="relative">
          <div className="flex space-x-12 animate-scroll">
            {logos.concat(logos).map((logo, index) => (
              <div key={index} className="flex-shrink-0">
                <span
                  className={`text-2xl ${logo.style} ${
                    logo.name === 'SULCOflex'
                      ? 'text-blue-600'
                      : 'text-gray-800'
                  }`}
                  aria-label={`${logo.name} logo`}
                >
                  {logo.name}
                </span>
                {logo.name === 'SULCOflex' && (
                  <span className="text-sm text-blue-400 block">TRIFOCAL</span>
                )}
              </div>
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
          animation: scroll 30s linear infinite;
          min-width: 200%;
        }
      `}</style>
    </section>
  )
}

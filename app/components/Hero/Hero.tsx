'use client'

import Image from 'next/image'
import heroExample from '@/public/exampleImages/Headerbild.png'
import { render } from 'storyblok-rich-text-react-renderer'
import { renderRichText } from '@storyblok/react'

interface HeroProps {
  title?: string
  text?: string
  img?: string
  buttons?: any
  uspar?: any
}

const Hero = ({ buttons, img, text, title, uspar }: HeroProps) => {
  console.log(text, 'props')
  return (
    <section className="relative h-[80vh] bg-gray-200 overflow-hidden">
      <Image src={heroExample} fill alt="" className="object-cover" />
      <div className="container mx-auto px-4 h-full flex flex-col justify-between ">
        <div className="flex flex-col lg:flex-row items-center justify-between pt-20 lg:pt-0 h-full">
          <div className="lg:w-1/2 z-10 text-white">
            <h1 className="font-serif mb-4">{title}</h1>
            <p className="text-lg mb-6">{text}</p>
            <div className="space-x-4">
              <button className="bg-green-200 text-black hover:bg-[#1D383F] hover:text-white button">
                Boka konsultation
              </button>
              <button className="bg-gray-400 text-white hover:bg-gray-500 border-none button">
                Om ögonlaser
              </button>
            </div>
          </div>
        </div>

        {/* usp block */}
        <div className="bg-[#FFF8E7] rounded-3xl p-6 mt-8 lg:mt-0 z-10 mb-10">
          <div className="flex justify-around text-center items-center">
            {uspar?.map((el: any) => {
              return (
                <div className="font-bold flex flex-col" key={el._uid}>
                  {render(el.title)}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

import Image from 'next/image'
import placeholder from '@/public/placeholder.jpg'

export default function AboutBlock() {
  return (
    <div className="bg-[#1e3a3a] text-white min-h-screen p-8 flex flex-col md:flex-row items-center justify-center gap-20">
      <div className="md:w-1/2 space-y-6 md:pr-8">
        <blockquote className="text-4xl font-serif leading-tight max-w-[80%]">
          "Varje öga är unikt men lösningen sällan långt borta".
        </blockquote>
        <p className="text-xl">Dr. Khash Memarzadeh</p>
      </div>

      <div className="md:w-1/2 relative mt-8 md:mt-0">
        <div className="relative z-10">
          <Image
            src={placeholder}
            alt="Dr. Memarzadeh"
            width={450}
            height={600}
            className="rounded-lg"
          />
        </div>
        <div className="absolute bottom-0 left-10 z-0 transform -translate-x-1/4 translate-y-1/4">
          <Image
            src={placeholder}
            alt="Medical equipment"
            width={400}
            height={300}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import { Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#1D383F] text-white py-12 px-6 relative">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Company Information */}
        <div>
          <h3 className="font-bold text-lg mb-4">X-Vision Ögonklinik</h3>
          <p>Hyllie Stationstorg 2</p>
          <p>215 32 Malmö</p>
          <p className="mt-4">Org. Nr: 559001-0178</p>
          <p className="mt-4">Telefon +46103001008</p>
          <p>info@xvisionkliniken.se</p>
          <div className="flex space-x-4 mt-4">
            <Facebook size={20} />
            <Instagram size={20} />
          </div>
        </div>

        {/* Column 2: Services */}
        <div>
          <h3 className="font-bold text-lg mb-4">Operationer & behandlingar</h3>
          <ul className="space-y-2">
            {[
              'Ögonlaser',
              'Linsoperation',
              'Modern teknologi',
              'Priser',
              'Referenser',
              'Trygghetspaketet',
              'Om X-Vision',
            ].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h3 className="font-bold text-lg mb-4">Kontakt</h3>
          <p>Boka fri konsultation</p>
          <p className="mt-4">Privacy policy</p>
          <p>Cookies</p>
        </div>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-4 right-4 grid grid-cols-4 gap-1">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-cream rounded-full"></div>
        ))}
      </div>

      {/* Bottom section */}
      <div className="mt-12 pt-6 border-t border-teal-800 flex justify-between items-center">
        <div className="text-2xl font-bold">
          X<span className="text-blue-400">VISION</span>
        </div>
        <div className="text-sm">© 2025 X-Vision Ögonklinik. All rights</div>
        <img
          src="/placeholder.svg?height=30&width=100"
          alt="Resurs logo"
          className="h-8"
        />
      </div>
    </footer>
  )
}

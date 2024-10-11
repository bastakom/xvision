import React from "react";
import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FooterSection({ props }: any) {
  const {
    story: {
      content: { footer_logo, footer_image },
    },
  } = props;
  return (
    <footer className="bg-[#1D383F] text-white py-5 relative">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
        <Image src={footer_image.filename} width={150} height={150} alt={footer_image.alt} className="absolute right-10 top-10" />
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
              "Ögonlaser",
              "Linsoperation",
              "Modern teknologi",
              "Priser",
              "Referenser",
              "Trygghetspaketet",
              "Om X-Vision",
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
      <div className=" top-4 right-4 grid grid-cols-4 gap-1">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-cream rounded-full"></div>
        ))}
      </div>

      {/* Bottom section */}
      <div className="mt-5 pt-6 flex justify-between  h-[108px] px-10 items-center">
        <div className="text-2xl font-bold">
          <Link className="flex items-center" href="/">
            <Image src={footer_logo.filename} width={180} height={50} alt={footer_logo.alt} />
          </Link>
        </div>
        <div className="text-sm absolute bottom-5 right-10 text-white">© 2025 X-Vision Ögonklinik. All rights</div>
      </div>
    </footer>
  );
}

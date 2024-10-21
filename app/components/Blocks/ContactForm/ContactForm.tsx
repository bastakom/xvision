import Image from "next/image";
import placeholder from "@/public/exampleImages/contact.png";

export default function ContactForm() {
  return (
    <div className="max-w-[100%] xl:max-w-[70%] mx-auto p-6 bg-white py-24">
      <div className="grid md:grid-cols-[2fr_1fr] gap-20">
        <div className="space-y-6">
          <h1 className="text-4xl">
            Kontakta oss för en kostnadsfri telefonrådgivning
          </h1>
          <p className="text-gray-600 text-[18px] pb-10 pt-5 max-w-[90%]">
            Hos oss på X-Vision ögonklinik i Malmö är kvalitet vår högsta
            prioritet. Med gedigen erfarenhet och modern teknik står vi redo att
            hjälpa dig att se skarpare. Vill du veta mer? Kontakta oss idag för
            en kostnadsfri telefonrådgivning.
          </p>
          <form className="space-y-4 form">
            <div className="grid grid-cols-2 gap-4 ">
              <div>
                <label htmlFor="name" className="block text-gray-700">
                  Namn
                </label>
                <input id="name" placeholder="Maria Vette" className="w-full" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700">
                  Telefon
                </label>
                <input id="phone" className="w-full" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700">
                E-post
              </label>
              <input id="email" className="w-full" type="email" />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700">
                Meddelande
              </label>
              <textarea id="message" rows={4} />
            </div>
            <div className="flex space-x-2">
              <input id="terms" type="checkbox" className="h-[30px] checkbox" />
              <label
                htmlFor="terms"
                className="terms flex flex-col text-gray-600"
              >
                Jag godkänner att ni hanterar mina personuppgifter enligt ovan.
                <a href="#" className="hover:underline text-[14px]">
                  Läs mer om hur vi behandlar dina personuppgifter här
                </a>
              </label>
            </div>
            <button className="button">Skicka</button>
          </form>
        </div>
        <div className="space-y-10 ">
          <div className="rounded-lg overflow-hidden">
            <Image
              src={placeholder}
              alt="X-Vision Ögonklinik Interior"
              width={600}
              height={600}
              className="w-full max-h-[450px] object-left object-contain"
            />
          </div>
          <div className="space-y-2 flex flex-col gap-5 text-[18px] font-bold">
            <div>
            <h2 className=" mb-2">X-Vision Ögonklinik</h2>
              <p>Hyllie Stationstorg 2</p>
              <p>215 32 Malmö</p>
            </div>
            <div>
              <p>Tel: +46103001008</p>
              <p>Mail: info@xvisionkliniken.se</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

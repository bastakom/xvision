import Image from "next/image";
import Link from "next/link";

export default function ContactForm({ global }: any) {
  const data = global?.story?.content;
  return (
    <div className="max-w-[100%] xl:max-w-[70%] mx-auto p-6 bg-white py-10 lg:py-24">
      <div className="grid md:grid-cols-[2fr_1fr] gap-20">
        <div className="space-y-6">
          <h2 className="text-4xl">
            Kontakta oss för en kostnadsfri telefonrådgivning
          </h2>
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
                <input
                  id="name"
                  placeholder="För- och efternamn"
                  className="w-full"
                />
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
              <label className="block text-gray-700">
                Önskemål att bli kontaktad
              </label>
              <div className="flex gap-5">
                <input
                  id="text"
                  className="w-full"
                  type="text"
                  placeholder="Tidsintervall"
                />
                <input id="date" className="w-full" type="date" />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700">
                Meddelande
              </label>
              <textarea id="message" rows={4} placeholder="" />
            </div>
            <div className="flex space-x-2">
              <input id="terms" type="checkbox" className="h-[30px] checkbox" />
              <label
                htmlFor="terms"
                className="terms flex flex-col text-gray-600"
              >
                Jag godkänner att ni hanterar mina personuppgifter enligt ovan.
                <a href="#" className="hover:underline text-[14px] open-sans">
                  Läs mer om hur vi behandlar dina personuppgifter här
                </a>
              </label>
            </div>
            <button className="button light text-[18px]">Skicka</button>
          </form>
        </div>
        <div className="space-y-10 ">
          <div className="rounded-lg overflow-hidden">
            <Image
              src="https://a.storyblok.com/f/304820/892x1072/9921c903af/ja1a3716-redigera-2x.png?cv=1730801960171"
              alt="X-Vision Ögonklinik Interior"
              width={600}
              height={600}
              className="w-full max-h-[450px] object-left object-contain"
            />
          </div>
          <div className="space-y-2 flex flex-col gap-5 text-[18px] font-medium">
            <div>
              <h4 className=" mb-2">X-Vision Ögonklinik</h4>
              <p>Hyllie Stationstorg 2</p>
              <p>215 32 Malmö</p>
            </div>
            <div className="flex flex-col open-sans">
              <Link className="open-sans" href={`tel:${data?.number}`}>Tel: {data?.number}</Link>
              <Link className="open-sans" href={`mailto:${data?.mail}`}>Mail: {data?.mail}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from 'next/image'
import placeholder from '@/public/placeholder.jpg'

export default function ContactForm() {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">
            Kontakta oss för en kostnadsfri telefonrådgivning
          </h1>
          <p className="text-gray-600">
            Hos oss på X-Vision ögonklinik i Malmö är kvalitet vår högsta
            prioritet. Med gedigen erfarenhet och modern teknik står vi redo att
            hjälpa dig att se skarpare. Vill du veta mer? Kontakta oss idag för
            en kostnadsfri telefonrådgivning.
          </p>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Namn
                </label>
                <input id="name" placeholder="Maria Vette" />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Telefon
                </label>
                <input id="phone" />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                E-post
              </label>
              <input id="email" type="email" />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Meddelande
              </label>
              <textarea id="message" rows={4} />
            </div>
            <div className="flex items-center space-x-2">
              <input id="terms" type="checkbox" />
              <label htmlFor="terms" className="text-sm text-gray-600">
                Jag godkänner att ni hanterar mina personuppgifter enligt ovan.
                <a href="#" className="text-blue-600 hover:underline">
                  {' '}
                  Läs mer om hur vi behandlar dina personuppgifter här
                </a>
              </label>
            </div>
            <button className="bg-[#c1e1c1] text-black hover:bg-[#a1d1a1]">
              Skicka
            </button>
          </form>
        </div>
        <div className="space-y-6">
          <div className="rounded-lg overflow-hidden">
            <Image
              src={placeholder}
              alt="X-Vision Ögonklinik Interior"
              width={600}
              height={400}
              className="w-full object-cover"
            />
          </div>
          <div className="space-y-2 text-sm">
            <h2 className="font-bold">X-Vision Ögonklinik</h2>
            <p>Hyllie Stationstorg 2</p>
            <p>215 32 Malmö</p>
            <p>Tel: +46103001008</p>
            <p>Mail: info@xvisionkliniken.se</p>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client";

import { useState } from "react";
import scss from "./forundersokning.module.scss";

const Form = ({ lang }: any) => {
  const [sent, setSent] = useState(false);
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    tid: "",
    message: "",
    beskriv: "",
    consent: false,
    questions: Array(6).fill(""),
  });

  const questions = [
    "Använder du glasögon?",
    "Använder du kontaktlinser?",
    "Ser du bra med dina kontaktlinser och/eller glasögon?",
    "Har du någon autoimmun sjukdom?",
    "Tar du några mediciner?",
    "Har du tidigare gjort någon ögonoperation?",
  ];

  const translate = (text: string, lang: string): string => {
    const translations: { [key: string]: { [key: string]: string } } = {
      "Svara gärna på nedan frågor.": {
        da: "Svar venligst på følgende spørgsmål",
        en: "Please answer the following questions",
        sv: "Svara gärna på nedan frågor.",
      },
      Yes: {
        da: "Ja",
        en: "Yes",
        sv: "Ja",
      },
      No: {
        da: "Nej",
        en: "No",
        sv: "Nej",
      },

      "Använder du glasögon?": {
        da: "Bruger du briller?",
        en: "Do you wear glasses?",
        sv: "Använder du glasögon?",
      },
      "Använder du kontaktlinser?": {
        da: "Bruger du kontaktlinser?",
        en: "Do you wear contact lenses?",
        sv: "Använder du kontaktlinser?",
      },
      "Ser du bra med dina kontaktlinser och/eller glasögon?": {
        da: "Ser du godt med dine kontaktlinser og/eller briller?",
        en: "Do you see well with your contact lenses and/or glasses?",
        sv: "Ser du bra med dina kontaktlinser och/eller glasögon?",
      },
      "Har du någon autoimmun sjukdom?": {
        da: "Har du en autoimmun sygdom?",
        en: "Do you have an autoimmune disease?",
        sv: "Har du någon auto",
      },
      "Tar du några mediciner?": {
        da: "Tager du medicin?",
        en: "Do you take any medication?",
        sv: "Tar du några mediciner?",
      },
      "Har du tidigare gjort någon ögonoperation?": {
        da: "Har du tidligere fået foretaget en øjenoperation?",
        en: "Have you had any eye surgery before?",
        sv: "Har du tidigare gjort någon ögonoperation?",
      },

      Namn: {
        da: "Navn",
        en: "Name",
        sv: "Namn",
      },
      Telefon: {
        da: "Telefon",
        en: "Phone",
        sv: "Telefon",
      },
      "E-post": {
        da: "E-mail",
        en: "E-mail",
        sv: "E-post",
      },
      Meddelande: {
        da: "Besked",
        en: "Message",
        sv: "Meddelande",
      },
      "Jag godkänner att ni hanterar mina personuppgifter enligt ovan": {
        da: "Jeg accepterer, at I behandler mine personoplysninger som beskrevet ovenfor",
        en: "I accept that you handle my personal data as described above",
        sv: "Jag godkänner att ni hanterar mina personuppgifter enligt ovan",
      },
      "Läs mer om hur vi behandlar dina personuppgifter här": {
        da: "Læs mere om, hvordan vi behandler dine personoplysninger her",
        en: "Read more about how we handle your personal data here",
        sv: "Läs mer om hur vi behandlar dina personuppgifter här",
      },
      Skicka: {
        da: "Sende",
        en: "Send",
        sv: "Skicka",
      },
      "Tack för ditt meddelande, vi återkommer så fort vi kan!": {
        da: "Tak for din besked, vi vender tilbage så hurtigt som muligt!",
        en: "Thank you for your message, we will get back to you as soon as possible!",
        sv: "Tack för ditt meddelande, vi återkommer så fort vi kan!",
      },

      "Vad vill du uppnå med en ögonoperation?": {
        da: "7. Hvad vil du opnå med en øjenoperation?",
        en: "7. What do you want to achieve with an eye surgery?",
        sv: "7. Vad vill du uppnå med en ögonoperation?",
      },
      "Vilken tid skulle du vilja bli uppringd?": {
        da: "8. Hvornår vil du gerne ringes op?",
        en: "8. What time would you like to be called?",
        sv: "8. Vilken tid skulle du vilja bli uppringd?",
      },
      "Förmiddag / Eftermiddag / Kväll / Tid": {
        da: "Formiddag / Eftermiddag / Aften / Tid",
        en: "Morning / Afternoon / Evening / Time",
        sv: "Förmiddag / Eftermiddag / Kväll / Tid",
      },
      "Beskriv i fritext": {
        da: "Beskriv i fritekst",
        en: "Describe in free text",
        sv: "Beskriv i fritext",
      },
    };

    return translations[text] ? translations[text][lang] || text : text;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string, index: number) => {
    setFormData((prev) => {
      const newQuestions = [...prev.questions];
      newQuestions[index] = value;
      return { ...prev, questions: newQuestions };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formattedQuestions = questions.map((question, index) => ({
      question,
      answer: formData.questions[index],
    }));

    const dataToSend = {
      ...formData,
      questions: formattedQuestions,
    };

    try {
      const response = await fetch("/api/bokning", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        setStatus("success");
        setSent(true);
      } else {
        setStatus("error");
        setSent(false);
      }
    } catch (error) {
      console.error("Error sending message.", error);
      setStatus("error");
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6">
      {!sent ? (
        <form
          onSubmit={handleSubmit}
          className={`grid grid-cols-1 md:grid-cols-2 gap-14 ${scss.form}`}
        >
          <div className="space-y-4 flex flex-col">
            <h2 className="text-xl font-semibold">
              {translate("Svara gärna på nedan frågor.", lang)}
            </h2>
            {questions.map((question, index) => (
              <div key={index}>
                <p className="mb-2">{`${index + 1}. ${translate(
                  question,
                  lang
                )}`}</p>
                <div className="flex space-x-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value="Ja"
                      onChange={() => handleRadioChange("Ja", index)}
                      className="hidden peer"
                    />
                    <div
                      className="w-8 h-8 border-2 border-gray-300 rounded-full
          peer-checked:border-[#1d383f] peer-checked:bg-[#1d383f]"
                    ></div>
                    <span>{translate("Yes", lang)}</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value="Nej"
                      onChange={() => handleRadioChange("Nej", index)}
                      className="hidden peer"
                    />
                    <div
                      className="w-8 h-8 border-2 border-gray-300 rounded-full
          peer-checked:border-[#1d383f] peer-checked:bg-[#1d383f]"
                    ></div>
                    <span>{translate("No", lang)}</span>
                  </label>
                </div>
              </div>
            ))}
            <label>
              {translate("Vad vill du uppnå med en ögonoperation?", lang)}
            </label>
            <textarea
              placeholder={`${translate("Beskriv i fritext", lang)}`}
              className="p-4"
              id="beskriv"
              name="beskriv"
              value={formData.beskriv}
              onChange={handleInputChange}
            />

            <label>
              {translate("Vilken tid skulle du vilja bli uppringd?", lang)}
            </label>
            <textarea
              placeholder={`${translate(
                "Förmiddag / Eftermiddag / Kväll / Tid",
                lang
              )}`}
              className="p-4"
              name="tid"
              value={formData.tid}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <div className="flex flex-wrap gap-5 global-form">
              <div className="w-full xl:w-[48%] ">
                <label htmlFor="name" className="block mb-1">
                  <span>{translate("Namn", lang)}</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#2d3748]"
                />
              </div>
              <div className="w-full xl:w-[48%] ">
                <label htmlFor="phone" className="block mb-1">
                  {translate("Telefon", lang)}
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#2d3748]"
                />
              </div>
              <div className="w-full">
                <label htmlFor="email" className="block mb-1">
                  {translate("E-post", lang)}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#2d3748]"
                />
              </div>
              <div className="w-full">
                <label htmlFor="message" className="block mb-1">
                  {translate("Meddelande", lang)}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#2d3748] h-32"
                />
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="consent"
                  checked={formData.consent}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      consent: e.target.checked,
                    }))
                  }
                  className="form-checkbox text-[#2d3748]"
                />
                <label htmlFor="consent" className="text-sm">
                  {translate(
                    "Jag godkänner att ni hanterar mina personuppgifter enligt ovan",
                    lang
                  )}

                  <br />
                  <a
                    href="#"
                    className="text-black text-[14px] open-sans hover:underline"
                  >
                    {translate(
                      "Läs mer om hur vi behandlar dina personuppgifter här",
                      lang
                    )}
                  </a>
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-[#2d3748] text-white py-2 px-4 h-14 font-medium rounded-md hover:bg-[#1a202c] transition duration-300"
              >
                {translate("Skicka", lang)}
              </button>
            </div>
          </div>
        </form>
      ) : (
        <h2 className="text-center">
          {translate(
            "Tack för ditt meddelande, vi återkommer så fort vi kan!",
            lang
          )}
        </h2>
      )}
    </div>
  );
};

export default Form;

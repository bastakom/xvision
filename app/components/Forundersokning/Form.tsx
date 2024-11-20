"use client";

import { useState } from "react";
import scss from "./forundersokning.module.scss";

const Form = () => {
  const [sent, setSent] = useState(false);
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    tid: "",
    message: "",
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
      <form
        onSubmit={handleSubmit}
        className={`grid grid-cols-1 md:grid-cols-2 gap-14 ${scss.form}`}
      >
        <div className="space-y-4 flex flex-col">
          <h2 className="text-xl font-semibold">
            Svara gärna på nedan frågor.
          </h2>
          {questions.map((question, index) => (
            <div key={index}>
              <p className="mb-2">{`${index + 1}. ${question}`}</p>
              <div className="flex space-x-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value="Ja"
                    onChange={() => handleRadioChange("Ja", index)}
                    className="hidden peer"
                  />
                  <div className="w-8 h-8 border-2 border-gray-300 rounded-full peer-checked:border-[#1d383f] peer-checked:bg-[#1d383f]"></div>
                  <span>Ja</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value="Nej"
                    onChange={() => handleRadioChange("Nej", index)}
                    className="hidden peer"
                  />
                  <div className="w-8 h-8 border-2 border-gray-300 rounded-full peer-checked:border-[#1d383f] peer-checked:bg-[#1d383f]"></div>
                  <span>Nej</span>
                </label>
              </div>
            </div>
          ))}
          <label>{`7. Vad vill du uppnå med en ögonoperation?`}</label>
          <textarea placeholder="Beskriv i fritext" className="p-4" />
          <label>{`8. Vilken tid skulle du vilja bli uppringd?`}</label>
          <textarea
            placeholder="Förmiddag / Eftermiddag / Kväll / Tid"
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
                Namn
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
                Telefon
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
                E-post
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
                Meddelande
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
                Jag godkänner att ni hanterar mina personuppgifter enligt ovan.
                <br />
                <a
                  href="#"
                  className="text-black text-[14px] open-sans hover:underline"
                >
                  Läs mer om hur vi behandlar dina personuppgifter här
                </a>
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-[#2d3748] text-white py-2 px-4 h-14 font-medium rounded-md hover:bg-[#1a202c] transition duration-300"
            >
              Skicka
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
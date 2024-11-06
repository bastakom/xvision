'use client'

import { useState } from 'react'
import scss from './forundersokning.module.scss'

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    consent: false,
    questions: Array(6).fill('')
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string, index: number) => {
    setFormData(prev => {
      const newQuestions = [...prev.questions]
      newQuestions[index] = value
      return { ...prev, questions: newQuestions }
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
  }

  const questions = [
    "Använder du glasögon?",
    "Använder du kontaktlinser?",
    "Ser du bra med dina kontaktlinser och/eller glasögon?",
    "Har du någon autoimmun sjukdom?",
    "Tar du några mediciner?",
    "Har du tidigare gjort någon ögonoperation?"
  ]

  return (
    <div className="max-w-6xl mx-auto p-6">
      <form onSubmit={handleSubmit} className={`grid grid-cols-1 md:grid-cols-2 gap-14 ${scss.form}`}>
        <div className="space-y-4 flex flex-col">
          <h2 className="text-xl font-semibold">Svara gärna på nedan frågor.</h2>
          {questions.map((question, index) => (
            <div key={index}>
              <p className="mb-2">{`${index + 1}. ${question}`}</p>
              <div className="flex space-x-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value="Ja"
                    onChange={() => handleRadioChange('Ja', index)}
                    className="form-radio text-[#2d3748]"
                  />
                  <span>Ja</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value="Nej"
                    onChange={() => handleRadioChange('Nej', index)}
                    className="form-radio text-[#2d3748]"
                  />
                  <span>Nej</span>
                </label>
              </div>
            </div>
          ))}
                <label>
                  {`7. Vad vill du uppnå med en ögonoperation?`}
                </label>
                <textarea placeholder='Beskriv i fritext' className="p-4" />
                <label>
                  {`8. Vilken tid skulle du vilja bli uppringd?`}
                </label>
                <textarea placeholder='Förmiddag / Eftermiddag / Kväll / Tid' className="p-4" />
        </div>
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1">Namn</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#2d3748]"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block mb-1">Telefon</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#2d3748]"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">E-post</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#2d3748]"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1">Meddelande</label>
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
              onChange={(e) => setFormData(prev => ({ ...prev, consent: e.target.checked }))}
              className="form-checkbox text-[#2d3748]"
            />
            <label htmlFor="consent" className="text-sm">
              Jag godkänner att ni hanterar mina personuppgifter enligt ovan.
              <br />
              <a href="#" className="text-blue-600 hover:underline">Läs mer om hur vi behandlar dina personuppgifter här</a>
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-[#2d3748] text-white py-2 px-4 rounded-md hover:bg-[#1a202c] transition duration-300"
          >
            Skicka
          </button>
        </div>
      </form>
    </div>
  )
}


export default Form;
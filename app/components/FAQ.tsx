'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "How long is the internship program?",
    answer: "Our internship program typically lasts for 3 months, but can be extended based on performance and mutual agreement."
  },
  {
    question: "Is the internship paid?",
    answer: "Yes, all our internships are paid. The exact compensation depends on the specific program and your experience level."
  },
  {
    question: "Do I need prior experience to apply?",
    answer: "While some basic knowledge is helpful, we welcome applicants with various levels of experience. Our program is designed to help you learn and grow."
  },
  {
    question: "Can I apply if I'm not a student?",
    answer: "Our internship program is open to recent graduates and career changers as well as current students."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left font-semibold p-4 bg-gray-100 hover:bg-gray-200 rounded-lg focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
                {openIndex === index ? <ChevronUp /> : <ChevronDown />}
              </button>
              {openIndex === index && (
                <div className="mt-2 p-4 bg-gray-50 rounded-lg">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


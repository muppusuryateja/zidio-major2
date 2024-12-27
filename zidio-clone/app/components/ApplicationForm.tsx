'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'

const steps = ['Personal Information', 'Education', 'Experience', 'Program Selection']

export default function ApplicationForm() {
  const [currentStep, setCurrentStep] = useState(0)
  const searchParams = useSearchParams()
  const initialProgram = searchParams.get('program') || ''

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    education: '',
    university: '',
    graduationYear: '',
    experience: '',
    program: initialProgram,
    whyJoin: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the application data to your backend
    console.log('Application submitted:', formData)
    alert('Thank you for your application. We will review it and get back to you soon!')
    setFormData({
      name: '',
      email: '',
      phone: '',
      education: '',
      university: '',
      graduationYear: '',
      experience: '',
      program: '',
      whyJoin: ''
    })
    setCurrentStep(0)
  }

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, steps.length - 1))
  }

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0))
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <div className="flex justify-between">
          {steps.map((step, index) => (
            <div key={step} className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${index <= currentStep ? 'bg-primary text-white' : 'bg-gray-200'}`}>
                {index + 1}
              </div>
              <div className="text-xs mt-2">{step}</div>
            </div>
          ))}
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        {currentStep === 0 && (
          <>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              />
            </div>
          </>
        )}
        {currentStep === 1 && (
          <>
            <div>
              <label htmlFor="education" className="block text-sm font-medium text-gray-700">Highest Education</label>
              <select
                id="education"
                name="education"
                value={formData.education}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              >
                <option value="">Select education level</option>
                <option value="high-school">High School</option>
                <option value="bachelors">Bachelor's Degree</option>
                <option value="masters">Master's Degree</option>
                <option value="phd">Ph.D.</option>
              </select>
            </div>
            <div>
              <label htmlFor="university" className="block text-sm font-medium text-gray-700">University/Institution</label>
              <input
                type="text"
                id="university"
                name="university"
                value={formData.university}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="graduationYear" className="block text-sm font-medium text-gray-700">Graduation Year</label>
              <input
                type="number"
                id="graduationYear"
                name="graduationYear"
                value={formData.graduationYear}
                onChange={handleChange}
                required
                min="1900"
                max="2099"
                step="1"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              />
            </div>
          </>
        )}
        {currentStep === 2 && (
          <div>
            <label htmlFor="experience" className="block text-sm font-medium text-gray-700">Relevant Experience</label>
            <textarea
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              placeholder="Please describe any relevant experience or skills"
            ></textarea>
          </div>
        )}
        {currentStep === 3 && (
          <>
            <div>
              <label htmlFor="program" className="block text-sm font-medium text-gray-700">Preferred Program</label>
              <select
                id="program"
                name="program"
                value={formData.program}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              >
                <option value="">Select a program</option>
                <option value="web-development">Web Development</option>
                <option value="mobile-app-development">Mobile App Development</option>
                <option value="data-science">Data Science</option>
                <option value="ui-ux-design">UI/UX Design</option>
              </select>
            </div>
            <div>
              <label htmlFor="whyJoin" className="block text-sm font-medium text-gray-700">Why do you want to join this program?</label>
              <textarea
                id="whyJoin"
                name="whyJoin"
                value={formData.whyJoin}
                onChange={handleChange}
                required
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                placeholder="Tell us why you're interested in this internship program"
              ></textarea>
            </div>
          </>
        )}
        <div className="flex justify-between">
          {currentStep > 0 && (
            <button type="button" onClick={prevStep} className="btn-secondary">
              Previous
            </button>
          )}
          {currentStep < steps.length - 1 ? (
            <button type="button" onClick={nextStep} className="btn-primary">
              Next
            </button>
          ) : (
            <button type="submit" className="btn-primary">
              Submit Application
            </button>
          )}
        </div>
      </form>
    </div>
  )
}


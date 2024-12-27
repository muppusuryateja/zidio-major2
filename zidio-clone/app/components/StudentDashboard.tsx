'use client'

import { useState } from 'react'
import { User, Book, Clock, CheckCircle } from 'lucide-react'

const mockApplications = [
  { id: 1, course: 'Web Development 101', status: 'Pending', submittedDate: '2023-06-15' },
  { id: 2, course: 'React Fundamentals', status: 'Accepted', submittedDate: '2023-06-10' },
  { id: 3, course: 'Introduction to Data Science', status: 'Rejected', submittedDate: '2023-06-05' },
]

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState('profile')

  return (
    <section className="section-padding">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Student Dashboard</h2>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex border-b">
            <button
              className={`flex-1 py-4 px-6 text-center ${activeTab === 'profile' ? 'bg-primary text-white' : 'hover:bg-gray-100'}`}
              onClick={() => setActiveTab('profile')}
            >
              <User className="inline-block mr-2" /> Profile
            </button>
            <button
              className={`flex-1 py-4 px-6 text-center ${activeTab === 'applications' ? 'bg-primary text-white' : 'hover:bg-gray-100'}`}
              onClick={() => setActiveTab('applications')}
            >
              <Book className="inline-block mr-2" /> Applications
            </button>
          </div>
          <div className="p-6">
            {activeTab === 'profile' && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
                <p><strong>Name:</strong> John Doe</p>
                <p><strong>Email:</strong> john.doe@example.com</p>
                <p><strong>Phone:</strong> (123) 456-7890</p>
              </div>
            )}
            {activeTab === 'applications' && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Your Applications</h3>
                <div className="space-y-4">
                  {mockApplications.map(app => (
                    <div key={app.id} className="border rounded-md p-4">
                      <h4 className="font-semibold">{app.course}</h4>
                      <p className="text-sm text-gray-500"><Clock className="inline-block mr-1" /> Submitted: {app.submittedDate}</p>
                      <p className={`text-sm ${app.status === 'Accepted' ? 'text-green-500' : app.status === 'Rejected' ? 'text-red-500' : 'text-yellow-500'}`}>
                        <CheckCircle className="inline-block mr-1" /> Status: {app.status}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}


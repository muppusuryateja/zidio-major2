'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search } from 'lucide-react'

const courses = [
  {
    id: 'web-dev-101',
    title: 'Web Development 101',
    description: 'Learn the basics of HTML, CSS, and JavaScript.',
    duration: '6 weeks',
    level: 'Beginner',
    tags: ['HTML', 'CSS', 'JavaScript']
  },
  {
    id: 'react-fundamentals',
    title: 'React Fundamentals',
    description: 'Master the basics of React and build interactive UIs.',
    duration: '8 weeks',
    level: 'Intermediate',
    tags: ['React', 'JavaScript', 'Web Development']
  },
  {
    id: 'data-science-intro',
    title: 'Introduction to Data Science',
    description: 'Explore the fundamentals of data analysis and machine learning.',
    duration: '10 weeks',
    level: 'Beginner',
    tags: ['Python', 'Data Analysis', 'Machine Learning']
  },
  {
    id: 'mobile-app-dev',
    title: 'Mobile App Development',
    description: 'Build native mobile apps for iOS and Android.',
    duration: '12 weeks',
    level: 'Intermediate',
    tags: ['React Native', 'iOS', 'Android']
  }
]

export default function CourseCatalog() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <section className="section-padding">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Course Catalog</h2>
        <div className="mb-8 relative">
          <input
            type="text"
            placeholder="Search courses..."
            className="w-full p-3 pl-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map(course => (
            <div key={course.id} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-500">{course.duration}</span>
                <span className="text-sm bg-primary text-white px-2 py-1 rounded">{course.level}</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {course.tags.map(tag => (
                  <span key={tag} className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">{tag}</span>
                ))}
              </div>
              <Link href={`/courses/${course.id}`} className="btn-primary block text-center">
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


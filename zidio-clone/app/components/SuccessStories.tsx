import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const successStories = [
  {
    name: 'Sarah Johnson',
    role: 'Frontend Developer at TechCorp',
    image: '/placeholder.svg?height=100&width=100&text=SJ',
    quote: 'The Zidio internship program gave me the skills and confidence to land my dream job in tech.',
  },
  {
    name: 'Michael Chen',
    role: 'Data Scientist at DataTech',
    image: '/placeholder.svg?height=100&width=100&text=MC',
    quote: 'Thanks to Zidio, I transitioned from a non-tech background to a rewarding career in data science.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Mobile App Developer at AppWorks',
    image: '/placeholder.svg?height=100&width=100&text=ER',
    quote: 'The hands-on experience I gained during my Zidio internship was invaluable for my career growth.',
  },
]

export default function SuccessStories() {
  const [currentStory, setCurrentStory] = useState(0)

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % successStories.length)
  }

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + successStories.length) % successStories.length)
  }

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
        <div className="bg-white rounded-lg shadow-lg p-8 relative">
          <button
            onClick={prevStory}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primary text-white rounded-full p-2 hover:bg-primary-dark transition duration-300"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={nextStory}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary text-white rounded-full p-2 hover:bg-primary-dark transition duration-300"
          >
            <ChevronRight />
          </button>
          <div className="flex flex-col items-center text-center">
            <img
              src={successStories[currentStory].image}
              alt={successStories[currentStory].name}
              className="w-24 h-24 rounded-full mb-4"
            />
            <p className="text-xl italic mb-4">"{successStories[currentStory].quote}"</p>
            <h3 className="font-semibold">{successStories[currentStory].name}</h3>
            <p className="text-gray-600">{successStories[currentStory].role}</p>
          </div>
        </div>
      </div>
    </section>
  )
}


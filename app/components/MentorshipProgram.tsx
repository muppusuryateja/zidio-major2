import { Users, Book, Calendar, Award } from 'lucide-react'

const mentorshipFeatures = [
  {
    icon: Users,
    title: 'One-on-One Guidance',
    description: 'Get personalized support from experienced industry professionals.',
  },
  {
    icon: Book,
    title: 'Skill Development',
    description: 'Enhance your technical and soft skills through targeted mentoring sessions.',
  },
  {
    icon: Calendar,
    title: 'Flexible Schedule',
    description: 'Choose mentoring sessions that fit your schedule and learning pace.',
  },
  {
    icon: Award,
    title: 'Career Advancement',
    description: 'Gain insights and strategies to accelerate your career growth in tech.',
  },
]

export default function MentorshipProgram() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Mentorship Program</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mentorshipFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href="#" className="btn-primary">
            Join Our Mentorship Program
          </a>
        </div>
      </div>
    </section>
  )
}


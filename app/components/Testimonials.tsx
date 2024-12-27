import { Star } from 'lucide-react'

const testimonials = [
  {
    name: "John Doe",
    role: "Web Development Intern",
    content: "The Zidio internship program was a game-changer for my career. I learned so much in such a short time!",
    rating: 5
  },
  {
    name: "Jane Smith",
    role: "Data Science Intern",
    content: "I'm amazed by the depth of knowledge I gained during my internship. The mentors were incredibly supportive.",
    rating: 5
  },
  {
    name: "Mike Johnson",
    role: "Mobile App Development Intern",
    content: "Zidio provided me with hands-on experience that was crucial for landing my first job in tech.",
    rating: 4
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Interns Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div className="font-semibold">{testimonial.name}</div>
              <div className="text-sm text-gray-500">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


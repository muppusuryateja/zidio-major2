import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'
import { Calendar, Clock, Users } from 'lucide-react'

const programs = [
  {
    id: "web-development",
    title: "Web Development",
    description: "Master the art of creating responsive and dynamic websites using the latest technologies.",
    skills: ["HTML/CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB"],
    duration: "12 weeks",
    startDate: "September 1, 2023",
    capacity: 30
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    description: "Learn to build native and cross-platform mobile applications for iOS and Android.",
    skills: ["Swift", "Kotlin", "React Native", "Flutter", "Mobile UI/UX", "API Integration"],
    duration: "12 weeks",
    startDate: "October 15, 2023",
    capacity: 25
  },
  {
    id: "data-science",
    title: "Data Science",
    description: "Dive into the world of data analysis, machine learning, and artificial intelligence.",
    skills: ["Python", "R", "SQL", "Machine Learning", "Data Visualization", "Statistical Analysis"],
    duration: "16 weeks",
    startDate: "August 1, 2023",
    capacity: 20
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "Design intuitive and beautiful user interfaces for web and mobile applications.",
    skills: ["User Research", "Wireframing", "Prototyping", "Adobe XD", "Figma", "Design Systems"],
    duration: "10 weeks",
    startDate: "November 1, 2023",
    capacity: 25
  }
]

export default function Programs() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-12">Our Internship Programs</h1>
          <div className="space-y-16">
            {programs.map((program, index) => (
              <div key={index} id={program.id} className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-semibold mb-4">{program.title}</h2>
                <p className="text-lg mb-6">{program.description}</p>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="flex items-center">
                    <Clock className="w-6 h-6 mr-2 text-primary" />
                    <span><strong>Duration:</strong> {program.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-6 h-6 mr-2 text-primary" />
                    <span><strong>Start Date:</strong> {program.startDate}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-6 h-6 mr-2 text-primary" />
                    <span><strong>Capacity:</strong> {program.capacity} students</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Skills You'll Learn:</h3>
                <ul className="list-disc list-inside mb-6 grid md:grid-cols-2 gap-2">
                  {program.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>{skill}</li>
                  ))}
                </ul>
                <Link href={`/apply?program=${program.id}`} className="btn-primary">
                  Apply for {program.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}


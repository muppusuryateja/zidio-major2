import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Launch Your Tech Career with Zidio
            </h1>
            <p className="text-xl mb-8">
              Join our internship program and gain real-world experience in software development, data science, and more.
            </p>
            <div className="flex space-x-4">
              <Link href="/apply" className="btn-secondary inline-flex items-center">
                Apply Now <ArrowRight className="ml-2" />
              </Link>
              <Link href="/programs" className="btn-primary bg-white text-primary hover:bg-gray-100">
                Explore Programs
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src="/placeholder.svg?height=400&width=600&text=Internship+Image" alt="Zidio Internship" className="rounded-lg shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}


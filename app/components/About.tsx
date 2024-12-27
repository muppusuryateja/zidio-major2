export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">About Zidio Internship</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="/placeholder.svg?height=300&width=400" alt="About Zidio" className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 md:pl-10">
            <p className="text-gray-600 mb-4">
              Zidio offers a comprehensive internship program designed to help aspiring developers gain practical experience in the tech industry. Our program focuses on hands-on learning, mentorship, and real-world projects.
            </p>
            <p className="text-gray-600 mb-4">
              Whether you're a recent graduate or looking to switch careers, our internship provides the perfect opportunity to kickstart your journey in tech.
            </p>
            <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}


import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Header />
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-8">About Zidio Internship</h1>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/placeholder.svg?height=400&width=600" alt="Zidio Internship" className="rounded-lg shadow-lg" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="mb-4">At Zidio, our mission is to bridge the gap between academic learning and industry requirements. We believe in empowering the next generation of tech talent by providing hands-on experience, mentorship, and real-world projects.</p>
              <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
              <ul className="list-disc list-inside mb-4">
                <li>Hands-on experience with cutting-edge technologies</li>
                <li>Mentorship from industry professionals</li>
                <li>Exposure to real-world projects and challenges</li>
                <li>Networking opportunities with tech leaders</li>
                <li>Career guidance and job placement assistance</li>
              </ul>
              <p>Join us in shaping the future of technology and kickstart your career in the tech industry!</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}


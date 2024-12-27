import Header from '../components/Header'
import Footer from '../components/Footer'
import ApplicationForm from '../components/ApplicationForm'

export default function Apply() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-8">Apply for Zidio Internship</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-center mb-8 text-lg">
              Ready to kickstart your career in tech? Fill out the application form below to apply for our internship program. We'll review your application and get back to you soon!
            </p>
            <ApplicationForm />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}


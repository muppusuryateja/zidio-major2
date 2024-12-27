import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Header />
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              <p className="mb-6">Have questions about our internship programs? Want to learn more about Zidio? We're here to help!</p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-4" />
                  <span>info@zidio.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-4" />
                  <span>+1 (123) 456-7890</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 mr-4" />
                  <span>123 Tech Street, San Francisco, CA 94105</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}


import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Programs from './components/Programs'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import CourseCatalog from './components/CourseCatalog'
import Blog from './components/Blog'
import EventsCalendar from './components/EventsCalendar'
import Chatbot from './components/Chatbot'
import SuccessStories from './components/SuccessStories'
import SkillsAssessment from './components/SkillsAssessment'
import MentorshipProgram from './components/MentorshipProgram'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <About />
      <Stats />
      <Programs />
      <CourseCatalog />
      <SuccessStories />
      <SkillsAssessment />
      <MentorshipProgram />
      <Testimonials />
      <Blog />
      <EventsCalendar />
      <FAQ />
      <CallToAction />
      <Footer />
      <Chatbot />
    </main>
  )
}


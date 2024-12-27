import Link from 'next/link'

export default function CallToAction() {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Start Your Tech Journey?</h2>
        <p className="text-xl mb-8">Join our internship program and kickstart your career in tech today!</p>
        <Link href="/apply" className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 inline-block">
          Apply Now
        </Link>
      </div>
    </section>
  )
}


import Link from 'next/link'

export default function FeaturedProgram() {
  return (
    <section className="bg-accent text-white section-padding">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Featured: AI & Machine Learning Bootcamp</h2>
            <p className="text-lg mb-6">Join our intensive 8-week bootcamp and dive deep into the world of AI and Machine Learning. Learn from industry experts and work on real-world projects.</p>
            <Link href="/programs#ai-ml-bootcamp" className="btn-secondary">
              Learn More
            </Link>
          </div>
          <div className="md:w-1/2">
            <img src="/placeholder.svg?height=300&width=500" alt="AI & Machine Learning Bootcamp" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}


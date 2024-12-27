import Link from 'next/link'

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Web Development',
    excerpt: 'Explore the latest trends and technologies shaping the future of web development.',
    author: 'Jane Smith',
    date: '2023-06-20',
  },
  {
    id: 2,
    title: 'Machine Learning: A Beginner\'s Guide',
    excerpt: 'Dive into the basics of machine learning and its applications in various industries.',
    author: 'John Doe',
    date: '2023-06-18',
  },
  {
    id: 3,
    title: 'The Importance of UI/UX in Modern Applications',
    excerpt: 'Learn why user interface and user experience design are crucial for successful applications.',
    author: 'Alice Johnson',
    date: '2023-06-15',
  },
]

export default function Blog() {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest from Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={`/placeholder.svg?height=200&width=400&text=Blog+Image`} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
                <Link href={`/blog/${post.id}`} className="mt-4 inline-block text-primary hover:underline">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


export default function Programs() {
  const programs = [
    { title: "Web Development", description: "Learn frontend and backend technologies" },
    { title: "Mobile App Development", description: "Build iOS and Android applications" },
    { title: "Data Science", description: "Analyze and interpret complex data" },
    { title: "UI/UX Design", description: "Create intuitive and beautiful interfaces" },
  ]

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
              <p className="text-gray-600">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">Zidio</h3>
            <p className="mt-2">Empowering the next generation of tech talent</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">Home</a>
            <a href="#" className="hover:text-gray-300">About</a>
            <a href="#" className="hover:text-gray-300">Programs</a>
            <a href="#" className="hover:text-gray-300">Contact</a>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Zidio Internship. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


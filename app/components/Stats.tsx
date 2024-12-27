import { Users, Briefcase, Award } from 'lucide-react'

const stats = [
  { name: 'Interns Placed', value: '500+', icon: Users },
  { name: 'Partner Companies', value: '100+', icon: Briefcase },
  { name: 'Success Rate', value: '95%', icon: Award },
]

export default function Stats() {
  return (
    <section className="bg-primary text-white section-padding">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div key={stat.name} className="flex flex-col items-center text-center">
              <stat.icon className="w-12 h-12 mb-4" />
              <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
              <p className="text-xl">{stat.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


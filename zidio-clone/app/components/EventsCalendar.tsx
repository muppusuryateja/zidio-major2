'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const events = [
  { id: 1, title: 'Web Development Workshop', date: '2023-07-15', time: '14:00 - 16:00' },
  { id: 2, title: 'Data Science Webinar', date: '2023-07-20', time: '10:00 - 11:30' },
  { id: 3, title: 'UI/UX Design Masterclass', date: '2023-07-25', time: '15:00 - 17:00' },
  { id: 4, title: 'Mobile App Development Q&A', date: '2023-07-30', time: '13:00 - 14:00' },
]

export default function EventsCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth)
    const firstDayOfMonth = getFirstDayOfMonth(currentMonth)
    const days = []

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="p-2"></div>)
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
      const dateString = date.toISOString().split('T')[0]
      const dayEvents = events.filter(event => event.date === dateString)

      days.push(
        <div key={day} className="p-2 border">
          <div className="font-semibold">{day}</div>
          {dayEvents.map(event => (
            <div key={event.id} className="text-xs bg-primary text-white p-1 mt-1 rounded">
              {event.title}
            </div>
          ))}
        </div>
      )
    }

    return days
  }

  return (
    <section className="section-padding">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Events Calendar</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <button onClick={prevMonth} className="p-2"><ChevronLeft /></button>
            <h3 className="text-xl font-semibold">
              {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
            </h3>
            <button onClick={nextMonth} className="p-2"><ChevronRight /></button>
          </div>
          <div className="grid grid-cols-7 gap-2">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="text-center font-semibold">{day}</div>
            ))}
            {renderCalendar()}
          </div>
        </div>
      </div>
    </section>
  )
}


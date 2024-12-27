'use client'

import { useState } from 'react'
import { MessageCircle, Send, X } from 'lucide-react'

const chatbotResponses = {
  'hello': 'Hello! How can I assist you today?',
  'courses': 'We offer various courses including Web Development, Data Science, and Mobile App Development. Which area are you interested in?',
  'apply': 'To apply for a course, please visit our Apply page and fill out the application form. Is there a specific course you\'re interested in?',
  'contact': 'You can reach us at contact@zidio.com or call us at (123) 456-7890. How else can I help you?',
  'default': 'I\'m sorry, I don\'t have information about that. Can you try rephrasing your question?'
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{text: string, sender: 'user' | 'bot'}[]>([])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (input.trim() === '') return

    setMessages([...messages, { text: input, sender: 'user' }])
    
    let botResponse = chatbotResponses.default
    for (const [key, value] of Object.entries(chatbotResponses)) {
      if (input.toLowerCase().includes(key)) {
        botResponse = value
        break
      }
    }
    
    setTimeout(() => {
      setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }])
    }, 500)
    
    setInput('')
  }

  return (
    <div className="fixed bottom-4 right-4">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary-dark transition duration-300"
        >
          <MessageCircle />
        </button>
      )}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-lg w-80 h-96 flex flex-col">
          <div className="bg-primary text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">Zidio Chatbot</h3>
            <button onClick={() => setIsOpen(false)}>
              <X />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block p-2 rounded-lg ${message.sender === 'user' ? 'bg-primary text-white' : 'bg-gray-200'}`}>
                  {message.text}
                </span>
              </div>
            ))}
          </div>
          <div className="p-4 border-t">
            <div className="flex">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                onClick={handleSend}
                className="bg-primary text-white p-2 rounded-r-md hover:bg-primary-dark transition duration-300"
              >
                <Send />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}


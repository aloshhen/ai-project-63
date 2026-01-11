import React from 'react'
import { cn } from '../utils'
import { Coffee, Menu } from 'lucide-react'

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200/50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Coffee className="w-8 h-8 text-amber-600" />
          <span className="text-2xl font-bold text-slate-900">Coffeeworks</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-slate-600 hover:text-amber-600 transition-colors">Главная</a>
          <a href="#menu" className="text-slate-600 hover:text-amber-600 transition-colors">Меню</a>
          <a href="#reservation" className="text-slate-600 hover:text-amber-600 transition-colors">Бронирование</a>
        </div>
        <button className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors">
          <Menu className="w-6 h-6 text-slate-600" />
        </button>
      </div>
    </nav>
  )
}
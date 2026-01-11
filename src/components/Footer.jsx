import React from 'react'
import { cn } from '../utils'
import { Coffee, MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Coffee className="w-8 h-8 text-amber-600" />
              <span className="text-2xl font-bold">Coffeeworks</span>
            </div>
            <p className="text-slate-400">
              Уютная кофейня с авторским кофе и бронированием
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-600 mt-1" />
                <span>ул. Кофейная, 12, Москва</span>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-amber-600 mt-1" />
                <span>+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-amber-600 mt-1" />
                <span>info@coffeeworks.ru</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Работаем</h3>
            <div className="space-y-2">
              <p className="text-slate-400">Пн-Пт: 9:00 - 22:00</p>
              <p className="text-slate-400">Сб-Вс: 10:00 - 23:00</p>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-500">
          <p>© 2024 Coffeeworks. Все права защищены</p>
        </div>
      </div>
    </footer>
  )
}
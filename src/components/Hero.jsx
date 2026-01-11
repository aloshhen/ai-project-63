import React from 'react'
import { cn } from '../utils'
import { Coffee, Utensils, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-6">
            <div className="bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent text-6xl md:text-8xl font-bold">
              Уютная кофейня
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-100 mb-10">
            Авторский кофе, свежие пирожные и уютная атмосфера
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#menu"
              className="px-8 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors flex items-center space-x-2">
              <Sparkles className="w-5 h-5" />
              <span>Посмотреть меню</span>
            </a>
            <a
              href="#reservation"
              className="px-8 py-3 border-2 border-amber-600 text-amber-600 rounded-lg hover:bg-amber-50 transition-colors flex items-center space-x-2">
              <Utensils className="w-5 h-5" />
              <span>Забронировать стол</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
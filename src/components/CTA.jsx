import React from 'react'
import { cn } from '../utils'
import { Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-amber-50 to-slate-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Забронируйте стол
          </h2>
          <p className="text-xl text-slate-600 mb-10">
            Удобная форма бронирования поможет вам забронировать столик в нашей кофейне
          </p>
          <a
            href="#reservation"
            className="px-8 py-4 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors flex items-center space-x-2 mx-auto">
            <Sparkles className="w-5 h-5" />
            <span>Бронировать сейчас</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
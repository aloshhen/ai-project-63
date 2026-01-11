import React from 'react'
import { cn } from '../utils'
import { Coffee, Utensils, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Как мы работаем
          </h2>
          <p className="text-xl text-slate-600">
            Три простых шага к идеальному кофе
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl p-8 border border-slate-200/50 shadow-xl">
            <div className="w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center mb-6">
              <Coffee className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-2xl font-bold mb-3">
              1. Выберите напиток
            </h3>
            <p className="text-slate-600">
              Изучите наше меню и выберите любимый напиток. Мы предлагаем как классические, так и авторские рецепты
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 border border-slate-200/50 shadow-xl">
            <div className="w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center mb-6">
              <Utensils className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-2xl font-bold mb-3">
              2. Забронируйте стол
            </h3>
            <p className="text-slate-600">
              Используйте нашу удобную форму бронирования и выберите удобное время. Мы сохраним ваш стол
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-3xl p-8 border border-slate-200/50 shadow-xl">
            <div className="w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-2xl font-bold mb-3">
              3. Наслаждайтесь
            </h3>
            <p className="text-slate-600">
              Получите свой напиток и наслаждайтесь уютной атмосферой нашей кофейни. Мы заботимся о каждом клиенте
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
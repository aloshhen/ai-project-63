import React from 'react'
import { cn } from '../utils'
import { Coffee, Utensils, Sparkles, Clock, Leaf, Star } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Features() {
  const features = [
    {
      icon: Coffee,
      title: 'Свежий кофе',
      description: 'Кофе из зерен, обжаренных вручную на месте. Выбирайте из 12 сортов',
      color: 'amber-600'
    },
    {
      icon: Utensils,
      title: 'Сезонное меню',
      description: 'Пирожные и десерты, приготовленные из местных продуктов',
      color: 'amber-500'
    },
    {
      icon: Sparkles,
      title: 'Уютная атмосфера',
      description: 'Комфортные кресла, мягкий свет и уютные уютные уголки',
      color: 'amber-400'
    },
    {
      icon: Clock,
      title: 'Быстрое обслуживание',
      description: 'Среднее время приготовления напитков - 3 минуты',
      color: 'amber-600'
    },
    {
      icon: Leaf,
      title: 'Экологичность',
      description: 'Все чашки и стаканы - многоразовые, биоразлагаемые',
      color: 'amber-500'
    },
    {
      icon: Star,
      title: 'Лояльность',
      description: 'Программа скидок для постоянных клиентов',
      color: 'amber-400'
    }
  ]

  return (
    <section id="menu" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-slate-600">
            Уникальные преимущества нашей кофейни
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-slate-200/50 shadow-xl hover:shadow-2xl hover:shadow-amber-500/20 transition-shadow">
                <div className="w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center mb-6">
                  <Icon className={`w-8 h-8 text-${feature.color}`} />
                </div>
                <h3 className="text-2xl font-bold mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
'use client'

import { motion } from 'framer-motion'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import ScreenCard from '../cards/ScreenCArd'
import { appScreenData } from '@/data/appScreenData'

export default function AppScreens () {
  return (
    <section
      className='py-20 overflow-hidden'
      style={{ backgroundColor: 'var(--teal-light)' }}
    >
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.5
          }}
          className='text-center max-w-3xl mx-auto mb-14'
        >
          <span
            className='uppercase tracking-[0.25em] text-sm font-semibold'
            style={{
              color: 'var(--text-highlight)'
            }}
          >
            App Screens
          </span>

          <h2
            className='mt-4 text-3xl md:text-5xl font-bold'
            style={{
              color: 'var(--text-highlight)'
            }}
          >
            Explore the App
          </h2>

          <p
            className='mt-5 text-lg leading-8'
            style={{
              color: 'var(--text-muted)'
            }}
          >
            Discover the intuitive interface that helps parents, schools and
            drivers stay connected through real-time transportation updates.
          </p>
        </motion.div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
          pagination={{
            clickable: true
          }}
          navigation
          breakpoints={{
            0: {
              slidesPerView: 1
            },
            768: {
              slidesPerView: 2
            },
            1200: {
              slidesPerView: 3
            }
          }}
        >
          {appScreenData.map((screen, index) => (
            <SwiperSlide key={screen.id}>
              <ScreenCard
                title={screen.title}
                description={screen.description}
                image={screen.image}
                delay={index * 0.15}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

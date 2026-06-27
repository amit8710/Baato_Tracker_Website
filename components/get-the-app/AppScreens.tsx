'use client'
import ScreenCard from '../cards/ScreenCard'
import { appScreenData } from '@/data/appScreenData'

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

export default function AppScreens () {
  return (
    <section
      className='py-12 lg:py-16'
      style={{ backgroundColor: 'var(--teal-light)' }}
    >
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        {/* Heading */}
        <div className='text-center max-w-2xl mx-auto mb-10'>
          <span
            className='uppercase tracking-[0.25em] text-xs font-semibold'
            style={{ color: 'var(--text-highlight)' }}
          >
            App Screens
          </span>
          <h2
            className='mt-3 text-2xl md:text-4xl font-bold'
            style={{ color: 'var(--text-highlight)' }}
          >
            Explore the App
          </h2>
          {/* <p
            className='mt-3 text-sm md:text-base leading-7'
            style={{ color: 'var(--text-muted)' }}
          >
            Explore every screen of Bato Tracker and discover how parents,
            schools and drivers stay connected through one powerful mobile app.
          </p> */}
        </div>

        {/* Swiper */}
        <div className='app-screen-swiper'>
          <Swiper
            modules={[EffectCoverflow, Pagination, Autoplay]}
            effect='coverflow'
            grabCursor={true}
            centeredSlides={true}
            slidesPerView='auto'
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 120,
              modifier: 2.5,
              slideShadows: true
            }}
            pagination={{ clickable: true }}
          >
            {appScreenData.map(screen => (
              <SwiperSlide key={screen.id}>
                <ScreenCard
                  title={screen.title}
                  description={screen.description}
                  image={screen.image}
                  delay={0}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

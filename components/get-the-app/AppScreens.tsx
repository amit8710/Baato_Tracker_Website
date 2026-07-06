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
        <div className='mx-auto mb-10 max-w-2xl text-center'>
          <span
            className='section-label'
            style={{ color: 'var(--text-highlight)' }}
          >
            App Screens
          </span>

          <h2
            className='heading-2 mt-3'
            style={{ color: 'var(--text-highlight)' }}
          >
            Explore the App
          </h2>

          {/*
          <p
            className='body-text mt-4'
            style={{ color: 'var(--text-muted)' }}
          >
            Explore every screen of Baato Tracker and discover how parents,
            schools and drivers stay connected through one powerful mobile app.
          </p>
          */}
        </div>

        {/* Swiper */}
        <div className='app-screen-swiper'>
          <Swiper
            modules={[EffectCoverflow, Pagination, Autoplay]}
            effect='coverflow'
            grabCursor
            centeredSlides
            slidesPerView='auto'
            loop
            autoplay={{
              delay: 3000,
              disableOnInteraction: false
            }}
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

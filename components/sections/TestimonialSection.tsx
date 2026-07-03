'use client'

import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import TestimonialCard from '../cards/TestimonialCard'
import { testimonialData } from '@/data/testimonialData'

export default function TestimonialSection () {
  return (
    <section
      className='relative pt-10 pb-52 overflow-visible'
      style={{
        background: 'var(--teal-light)'
      }}
    >
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-8'
        >
          <span
            className='uppercase tracking-[0.25em] text-xs font-semibold'
            style={{
              color: 'var(--text-highlight)'
            }}
          >
            Testimonials
          </span>

          <h2
            className='mt-2 text-2xl md:text-3xl lg:text-4xl font-bold'
            style={{
              color: 'var(--text-highlight)'
            }}
          >
            What Parents & Schools Say
          </h2>
        </motion.div>

        {/* Slider */}

        <Swiper
          effect='coverflow'
          centeredSlides
          grabCursor
          loop
          speed={1000}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          pagination={{
            clickable: true
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 170,
            modifier: 2,
            scale: 0.9,
            slideShadows: false
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40
            }
          }}
          className='testimonialSwiper'
        >
          {testimonialData.map(item => (
            <SwiperSlide key={item.id}>
              <TestimonialCard
                image={item.image}
                name={item.name}
                role={item.role}
                message={item.message}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .testimonialSwiper {
          overflow: visible;
          padding-bottom: 90px;
        }

        .testimonialSwiper .swiper-wrapper {
          align-items: center;
        }

        .testimonialSwiper .swiper-slide {
          opacity: 0.45;
          transform: scale(0.82);
          transition: all 0.45s ease;
        }

        .testimonialSwiper .swiper-slide-active {
          opacity: 1;
          transform: scale(1);
        }

        .testimonialSwiper .swiper-slide-prev,
        .testimonialSwiper .swiper-slide-next {
          opacity: 0.75;
          transform: scale(0.9);
        }

        .testimonialSwiper .swiper-pagination {
          position: absolute;
          bottom: 10px !important;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          width: auto;
          z-index: 5;
        }

        .testimonialSwiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          opacity: 1;
          background: rgba(255, 255, 255, 0.45);
          transition: all 0.3s ease;
        }

        .testimonialSwiper .swiper-pagination-bullet-active {
          background: #ffffff;
          transform: scale(1.35);
        }
      `}</style>
    </section>
  )
}

// 'use client'

// import { useEffect, useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { HiArrowUp } from 'react-icons/hi2'

// export default function ScrollToTop () {
//   const [isVisible, setIsVisible] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsVisible(window.scrollY > 300)
//     }

//     window.addEventListener('scroll', handleScroll)
//     handleScroll()

//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     })
//   }

//   return (
//     <AnimatePresence>
//       {isVisible && (
//         <motion.button
//           initial={{ opacity: 0, scale: 0.5, y: 40 }}
//           animate={{ opacity: 1, scale: 1, y: 0 }}
//           exit={{ opacity: 0, scale: 0.5, y: 40 }}
//           transition={{
//             duration: 0.35,
//             ease: 'easeOut'
//           }}
//           whileHover={{
//             scale: 1.12,
//             y: -6,
//             rotate: 6
//           }}
//           whileTap={{
//             scale: 0.92
//           }}
//           onClick={scrollToTop}
//           aria-label='Scroll to top'
//           className='fixed bottom-7 right-7 z-50 flex h-14 w-14 items-center justify-center rounded-full'
//           style={{
//             background:
//               'linear-gradient(135deg, var(--teal-primary), var(--teal-dark))',
//             color: 'var(--text-highlight)',
//             boxShadow: '0 15px 35px rgba(13,148,136,.35)'
//           }}
//         >
//           {/* Animated Glow */}
//           <motion.div
//             className='absolute inset-0 rounded-full'
//             style={{
//               backgroundColor: 'var(--teal-light)'
//             }}
//             animate={{
//               scale: [1, 1.6],
//               opacity: [0.35, 0]
//             }}
//             transition={{
//               duration: 2,
//               repeat: Infinity,
//               ease: 'easeOut'
//             }}
//           />

//           {/* Inner Shine */}
//           <div
//             className='absolute inset-[3px] rounded-full'
//             style={{
//               background:
//                 'linear-gradient(135deg,var(--teal-light),var(--teal-primary))'
//             }}
//           />

//           {/* Arrow */}
//           <motion.div
//             animate={{
//               y: [0, -5, 0]
//             }}
//             transition={{
//               duration: 1.4,
//               repeat: Infinity,
//               ease: 'easeInOut'
//             }}
//             className='relative z-10'
//           >
//             <HiArrowUp className='text-2xl text-white' />
//           </motion.div>
//         </motion.button>
//       )}
//     </AnimatePresence>
//   )
// }

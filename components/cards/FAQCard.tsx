'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

type FAQCardProps = {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}

export default function FAQCard ({
  question,
  answer,
  isOpen,
  onClick
}: FAQCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{
        y: -6,
        scale: 1.01,
        transition: {
          duration: 0.3
        }
      }}
      className='overflow-hidden rounded-2xl border shadow-md transition-all duration-300'
      style={{
        backgroundColor: 'var(--background)',
        borderColor: 'var(--teal-light)'
      }}
    >
      <motion.button
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
        className='w-full flex items-center justify-between px-6 py-5 text-left'
      >
        <h3
          className='text-lg font-semibold pr-4 transition-colors duration-300'
          style={{
            color: isOpen ? 'var(--teal-primary)' : 'var(--teal-dark)'
          }}
        >
          {question}
        </h3>

        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
            scale: isOpen ? 1.08 : 1
          }}
          transition={{
            duration: 0.35
          }}
          className='flex items-center justify-center w-10 h-10 rounded-full'
          style={{
            backgroundColor: 'var(--teal-light)'
          }}
        >
          {isOpen ? (
            <FaChevronUp style={{ color: 'var(--text-highlight)' }} />
          ) : (
            <FaChevronDown style={{ color: 'var(--text-highlight)' }} />
          )}
        </motion.div>
      </motion.button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0
            }}
            animate={{
              height: 'auto',
              opacity: 1
            }}
            exit={{
              height: 0,
              opacity: 0
            }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1]
            }}
            className='overflow-hidden'
          >
            <motion.p
              initial={{
                y: 20,
                opacity: 0
              }}
              animate={{
                y: 0,
                opacity: 1
              }}
              exit={{
                y: -10,
                opacity: 0
              }}
              transition={{
                duration: 0.35,
                delay: 0.05
              }}
              className='px-6 pb-6 leading-7'
              style={{
                color: 'var(--text-mainlight)'
              }}
            >
              {answer}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

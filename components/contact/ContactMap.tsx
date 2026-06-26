'use client'

export default function ContactMap () {
  return (
    <section
      className='w-full'
      style={{ backgroundColor: 'var(--background)' }}
    >
      {/* Heading */}
      <div className='max-w-7xl mx-auto px-6 lg:px-8 py-16 text-center'>
        <span
          className='uppercase tracking-[0.25em] text-sm font-semibold'
          style={{ color: 'var(--teal-primary)' }}
        >
          Find Us
        </span>

        <h2
          className='mt-3 text-3xl md:text-4xl font-bold'
          style={{ color: 'var(--teal-dark)' }}
        >
          Visit Our Office
        </h2>
      </div>

      {/* Full Width Google Map */}
      <div className='w-full'>
        <iframe
          title='Bato Tracker Location'
          src='https://www.google.com/maps?q=Kathmandu,Nepal&output=embed'
          width='100%'
          height='550'
          loading='lazy'
          allowFullScreen
          referrerPolicy='no-referrer-when-downgrade'
          className='w-full border-0'
        />
      </div>
    </section>
  )
}

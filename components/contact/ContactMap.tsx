'use client'

export default function ContactMap () {
  return (
    <section
      className='w-full'
      style={{ backgroundColor: 'var(--background)' }}
    >
      {/* Heading */}
      <div className='mx-auto max-w-7xl px-6 py-16 text-center lg:px-8'>
        <span
          className='section-label'
          style={{ color: 'var(--teal-primary)' }}
        >
          Find Us
        </span>

        <h2 className='heading-2 mt-3' style={{ color: 'var(--teal-dark)' }}>
          Visit Our Office
        </h2>

        {/* Uncomment if you want a description */}
        {/*
        <p
          className='body-text mx-auto mt-4 max-w-2xl'
          style={{ color: 'var(--text-mainlight)' }}
        >
          Visit our office to learn more about Baato Tracker and discover how
          we help schools provide safer and smarter transportation.
        </p>
        */}
      </div>

      {/* Full Width Google Map */}
      <div className='w-full'>
        <iframe
          title='Baato Tracker Location'
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

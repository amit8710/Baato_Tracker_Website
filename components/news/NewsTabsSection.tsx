'use client'

type NewsTabsSectionProps = {
  selectedCategory: string
  setSelectedCategory: (category: string) => void
}

const tabs = ['All', 'News', 'Updates', 'Events']

export default function NewsTabsSection ({
  selectedCategory,
  setSelectedCategory
}: NewsTabsSectionProps) {
  return (
    <section
      className='py-8 lg:py-10'
      style={{ backgroundColor: 'var(--background)' }}
    >
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        <div
          className='rounded-2xl p-2 md:p-3'
          style={{
            backgroundColor: 'var(--teal-dark)'
          }}
        >
          <div className='flex items-center justify-center gap-2 md:gap-4 overflow-x-auto scrollbar-hide'>
            {tabs.map(tab => {
              const active = selectedCategory === tab

              return (
                <button
                  key={tab}
                  type='button'
                  onClick={() => setSelectedCategory(tab)}
                  className='flex-shrink-0 rounded-xl px-6 py-3 md:px-8 md:py-3 text-sm md:text-base font-semibold transition-all duration-300 cursor-pointer'
                  style={{
                    backgroundColor: active ? '#ffffff' : 'transparent',
                    color: active
                      ? 'var(--teal-dark)'
                      : 'var(--text-highlight)',
                    boxShadow: active ? '0 6px 18px rgba(0,0,0,0.12)' : 'none'
                  }}
                >
                  {tab}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

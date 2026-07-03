import Header from '@/components/dashboard/Header'

export default function DashboardLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className='min-h-screen' style={{ background: 'var(--background)' }}>
      <Header />

      <main className='mx-auto max-w-7xl p-8'>{children}</main>
    </div>
  )
}

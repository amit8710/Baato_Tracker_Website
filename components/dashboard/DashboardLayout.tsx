import Sidebar from './Sidebar'
import TopNavbar from './TopNavbar'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout ({ children }: DashboardLayoutProps) {
  return (
    <div
      className='min-h-screen'
      style={{
        background: 'var(--background)'
      }}
    >
      <Sidebar />

      <TopNavbar />

      <main
        className='overflow-y-auto p-8'
        style={{
          marginLeft: '288px',
          marginTop: '80px',
          minHeight: 'calc(100vh - 80px)',
          background: 'var(--background)'
        }}
      >
        {children}
      </main>
    </div>
  )
}

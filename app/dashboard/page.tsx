import ChildInformation from '@/components/dashboard/ChildInformation'
import TodayTripSection from '@/components/dashboard/TodayTripSection'
import LiveTrackingSection from '@/components/dashboard/LiveTrackingSection'
import SmartAlertsSection from '@/components/dashboard/SmartAlertsSection'
import DriverInformation from '@/components/dashboard/DriverInformation'

export default function DashboardPage () {
  return (
    <div className='space-y-8'>
      {/* Hero */}

      {/* Top Cards */}
      <div className='grid gap-8 lg:grid-cols-2'>
        <ChildInformation />

        <TodayTripSection />
      </div>

      {/* Live Map */}
      <LiveTrackingSection />

      {/* Bottom Cards */}
      <div className='grid gap-8 lg:grid-cols-2'>
        <SmartAlertsSection />

        <DriverInformation />
      </div>
    </div>
  )
}

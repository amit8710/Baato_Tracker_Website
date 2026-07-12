import ChildInformation from '@/components/dashboard/ChildInformation'
import DriverInformation from '@/components/dashboard/DriverInformation'
import KeyHighlights from '@/components/dashboard/KeyHighlights'

export default function DashboardPage () {
  return (
    <div className='space-y-8'>
      <KeyHighlights />
      {/* Top Information */}
      <section className='grid grid-cols-1 gap-8 xl:grid-cols-2'>
        <ChildInformation />
        <DriverInformation />
      </section>
    </div>
  )
}

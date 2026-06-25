import HeroSection from '@/components/sections/HeroSection'
import WhoWeAreSection from '@/components/sections/WhoWeAreSection'
import HowItWorksSection from '@/components/sections/HowItWorksSection'
import NewsSection from '@/components/sections/NewsSection'
import StatisticsSection from '@/components/sections/StatisticsSection'
import ClientSection from '@/components/sections/clientSection'

export default function Home () {
  return (
    <main>
      <HeroSection />
      <WhoWeAreSection />
      <HowItWorksSection />
      <NewsSection />
      <StatisticsSection />
      <ClientSection />
    </main>
  )
}

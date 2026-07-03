import HeroSection from '@/components/sections/HeroSection'
import WhoWeAreSection from '@/components/sections/WhoWeAreSection'
import HowItWorksSection from '@/components/sections/HowItWorksSection'
// import NewsSection from '@/components/sections/NewsSection'
import StatisticsSection from '@/components/sections/StatisticsSection'
import ClientSection from '@/components/sections/clientSection'
import TestimonialSection from '@/components/sections/TestimonialSection'
import StayConnectedSection from '@/components/sections/StayConnectedSection'

export default function Home () {
  return (
    <main>
      <HeroSection />
      <WhoWeAreSection />
      <HowItWorksSection />
      {/* <NewsSection /> */}
      <StatisticsSection />
      <ClientSection />
      <TestimonialSection />
      <StayConnectedSection />
    </main>
  )
}

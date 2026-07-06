import PageHero from '@/components/common/PageHero'
import AboutSection from '@/components/about/AboutSection'
import CoreValues from '@/components/about/CoreValues'
import TeamSection from '@/components/about/TeamSection'
import CTASection from '@/components/common/CTASection'

export default function AboutPage () {
  return (
    <>
      <PageHero
        companyName='Baato Tracker'
        pageTitle='About Us'
        backgroundImage='heroimg.png'
      />

      <AboutSection />
      <CoreValues />
      {/* <TeamSection /> */}
      <CTASection />
    </>
  )
}

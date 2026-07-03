import PageHero from '@/components/common/PageHero'
import Introduction from '@/components/how-it-works/Introduction'
import ProcessTimeline from '@/components/how-it-works/ProcessTimeline'
import FeaturesAction from '@/components/how-it-works/FeaturesAction'
// import UserJourney from '@/components/how-it-works/UserJourney'
import CTASection from '@/components/common/CTASection'

export default function HowItWorksPage () {
  return (
    <>
      <PageHero
        companyName='Baato Tracker'
        pageTitle='How It Works'
        backgroundImage='/heroimg.png'
      />
      <Introduction />
      <FeaturesAction />
      <ProcessTimeline />
      {/* <UserJourney /> */}
      <CTASection />
    </>
  )
}

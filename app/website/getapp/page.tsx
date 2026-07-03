import PageHero from '@/components/common/PageHero'
import AppExperience from '@/components/get-the-app/AppExperience'
import AppScreens from '@/components/get-the-app/AppScreens'
import GetStarted from '@/components/get-the-app/GetStarted'
import CTASection from '@/components/common/CTASection'

export default function Get_The_App () {
  return (
    <>
      <PageHero
        companyName='Baato Tracker'
        pageTitle='Get The App'
        backgroundImage='/heroimg.png'
      />

      <AppExperience />
      <AppScreens />
      <GetStarted />
      <CTASection />
    </>
  )
}

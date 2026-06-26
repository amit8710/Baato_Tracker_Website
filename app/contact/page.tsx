import PageHero from '@/components/common/PageHero'
import ContactInfo from '@/components/contact/ContactInfo'
import ContactMap from '@/components/contact/ContactMap'
import ContactFAQ from '@/components/contact/ContactFAQ'
import CTASection from '@/components/common/CTASection'

export default function ContactPage () {
  return (
    <>
      <PageHero
        companyName='Bato Tracker'
        pageTitle='Contact Us'
        backgroundImage='/heroimg.png'
      />

      <ContactInfo />
      <ContactMap />
      <ContactFAQ />
      <CTASection />
    </>
  )
}
